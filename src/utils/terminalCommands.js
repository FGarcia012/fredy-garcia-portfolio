import { goals } from '../data/goals'
import { links } from '../data/links'
import { navItems } from '../data/navigation'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { methodologies, skills } from '../data/skills'
import { ACCENT_NAMES } from './accent'

const BAR_SIZE = 10

const pageNames = navItems.map((item) => item.path.slice(1) || 'home')
const projectNames = projects.map((project) => `projects/${project.slug}`)
const PAGE_PATHS = Object.fromEntries(navItems.map((item) => [item.path.slice(1) || 'home', item.path]))

function resolvePath(argument = '') {
  const clean = argument
    .toLowerCase()
    .replace(/^(~|\.)?\//, '')
    .replace(/\/+$/, '')
    .replace(/\.(jsx|md|json|yml|pdf|sh)$/, '')

  if (clean === '' || clean === '~' || clean === '.' || clean === '..') return '/'
  if (PAGE_PATHS[clean]) return PAGE_PATHS[clean]
  if (projectNames.includes(clean)) return `/${clean}`
  return null
}

const text = (value, tone) => ({ text: value, tone })
const link = (value, href) => ({ text: value, href })

const commands = {
  help: {
    desc: 'Show this list',
    run: () => ({
      lines: [
        text('Available commands:', 'muted'),
        ...Object.entries(commands).map(([name, command]) => ({ cmd: command.usage ?? name, desc: command.desc })),
        text('Tip: use ↑ ↓ for history and Tab to autocomplete.', 'muted'),
      ],
    }),
  },
  whoami: {
    desc: 'Who am I?',
    run: () => ({
      lines: [text(profile.name), text(`${profile.role} · ${profile.roles[1]}`), text(profile.location, 'muted')],
    }),
  },
  about: {
    desc: 'A short summary about me',
    run: () => ({
      lines: [
        text(profile.pitch),
        text(`${profile.about[0].split('. ')[0]}.`, 'muted'),
        text('Read more with: cd about', 'muted'),
      ],
    }),
  },
  skills: {
    desc: 'Technologies I work with',
    run: () => ({
      lines: [text(skills.map((skill) => skill.name).join(' · ')), text(`Methodology: ${methodologies.join(', ')}`, 'muted')],
    }),
  },
  projects: {
    desc: 'My projects',
    run: () => ({
      lines: [
        ...projects.map((project) => text(`- ${project.title}${project.status ? ` (${project.status})` : ''}`)),
        text('Open one with: cd projects/<name>  (press Tab to see the names)', 'muted'),
      ],
    }),
  },
  goals: {
    desc: 'My crucially important goals',
    run: () => ({
      lines: [
        ...goals.map((goal) => {
          const filled = Math.round((goal.progress / 100) * BAR_SIZE)
          return text(`[${'█'.repeat(filled)}${'░'.repeat(BAR_SIZE - filled)}] ${String(goal.progress).padStart(3)}%  ${goal.title}`)
        }),
        text('Details with: cd mci', 'muted'),
      ],
    }),
  },
  cv: {
    desc: 'Open my CV',
    run: () => ({
      lines: [text('Opening cv.pdf...', 'success')],
      action: { type: 'navigate', to: '/cv', delay: 600 },
    }),
  },
  contact: {
    desc: 'How to reach me',
    run: () => ({
      lines: [
        link(`Email:     ${links.email}`, `mailto:${links.email}`),
        link(`GitHub:    ${links.github}`, links.github),
        link(`LinkedIn:  ${links.linkedin}`, links.linkedin),
        link(`Instagram: ${links.instagram}`, links.instagram),
      ],
    }),
  },
  scrum: {
    desc: 'How I work',
    run: () => ({
      lines: [
        text('Backlog → Sprint → Review → Retro  ↻'),
        text('Sprint planning, daily stand-ups, backlog management, reviews and retrospectives.', 'muted'),
      ],
    }),
  },
  ls: {
    desc: 'List the pages',
    run: () => ({ lines: [text(navItems.map((item) => item.file).join('  '))] }),
  },
  cd: {
    usage: 'cd <page>',
    desc: 'Go to a page (cd about)',
    run: ([target]) => {
      const to = resolvePath(target)
      if (!to) return { lines: [text(`cd: no such file or directory: ${target}`, 'error'), text("Type 'ls' to see the pages.", 'muted')] }
      return { lines: [text(`Opening ${target ?? '~'}...`, 'success')], action: { type: 'navigate', to } }
    },
  },
  clear: {
    desc: 'Clear the screen',
    run: () => ({ lines: [], action: { type: 'clear' } }),
  },
  theme: {
    usage: 'theme <color>',
    desc: `Change the accent color (${ACCENT_NAMES.join(', ')})`,
    run: ([name], { accent }) => {
      if (!name) {
        return { lines: [text(`Current accent: ${accent}`), text(`Usage: theme <${ACCENT_NAMES.join('|')}>`, 'muted')] }
      }
      if (!ACCENT_NAMES.includes(name.toLowerCase())) {
        return { lines: [text(`theme: unknown color "${name}"`, 'error'), text(`Try: ${ACCENT_NAMES.join(', ')}`, 'muted')] }
      }
      return {
        lines: [text(`Accent color set to ${name.toLowerCase()}.`, 'success')],
        action: { type: 'theme', value: name.toLowerCase() },
      }
    },
  },
  github: {
    desc: 'Open my GitHub',
    run: () => ({
      lines: [text('Opening GitHub...', 'success'), link(links.github, links.github)],
      action: { type: 'open', url: links.github },
    }),
  },
  linkedin: {
    desc: 'Open my LinkedIn',
    run: () => ({
      lines: [text('Opening LinkedIn...', 'success'), link(links.linkedin, links.linkedin)],
      action: { type: 'open', url: links.linkedin },
    }),
  },
}

function runSudo(args) {
  if (args.length === 0) return { lines: [text('usage: sudo <command>', 'muted')] }
  if (args.join(' ').toLowerCase() === 'hire-me') {
    return {
      lines: [
        text('[sudo] password for recruiter: ********', 'muted'),
        text('Access granted. Great choice! Taking you to the contact page...', 'success'),
      ],
      action: { type: 'navigate', to: '/contact', delay: 1400 },
    }
  }
  return { lines: [text(`${profile.name.split(' ')[0].toLowerCase()} is not in the sudoers file. This incident will be reported.`, 'error')] }
}

export const COMMAND_NAMES = Object.keys(commands)
export const CHIP_COMMANDS = ['help', 'whoami', 'skills', 'projects', 'goals', 'contact', 'ls', 'clear']

export const WELCOME_LINES = [text("Welcome to my terminal. Type 'help' to see the commands.", 'muted')]

export function runCommand(raw, context) {
  const [name, ...args] = raw.trim().split(/\s+/)
  const key = name.toLowerCase()

  if (key === 'sudo') return runSudo(args)
  if (Object.hasOwn(commands, key)) return commands[key].run(args, context)
  return { lines: [text(`${name}: command not found. Type 'help' to see the commands.`, 'error')] }
}

function commonPrefix(options) {
  return options.reduce((prefix, option) => {
    let i = 0
    while (i < prefix.length && prefix[i] === option[i]) i += 1
    return prefix.slice(0, i)
  }, options[0])
}

export function completeInput(input) {
  const endsWithSpace = /\s$/.test(input)
  const tokens = input.trim().split(/\s+/).filter(Boolean)
  if (tokens.length === 0) return { value: input, options: [] }

  const completingCommand = tokens.length === 1 && !endsWithSpace
  const partial = endsWithSpace ? '' : tokens[tokens.length - 1]
  const command = tokens[0].toLowerCase()
  const completingArgument = (tokens.length === 1 && endsWithSpace) || (tokens.length === 2 && !endsWithSpace)

  let candidates = []
  if (completingCommand) candidates = COMMAND_NAMES
  else if (completingArgument) {
    if (command === 'cd') candidates = [...pageNames, ...projectNames]
    else if (command === 'theme') candidates = ACCENT_NAMES
    else if (command === 'sudo') candidates = ['hire-me']
  }

  const matches = candidates.filter((candidate) => candidate.startsWith(partial.toLowerCase()))
  if (matches.length === 0) return { value: input, options: [] }

  const base = input.slice(0, input.length - partial.length)
  if (matches.length === 1) {
    const takesArgument = completingCommand && ['cd', 'theme'].includes(matches[0])
    return { value: `${base}${matches[0]}${takesArgument ? ' ' : ''}`, options: [] }
  }
  return { value: `${base}${commonPrefix(matches)}`, options: matches }
}
