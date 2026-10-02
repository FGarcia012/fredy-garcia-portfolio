import { FaReact } from 'react-icons/fa'
import {
  VscFilePdf,
  VscFolder,
  VscJson,
  VscMarkdown,
  VscSettingsGear,
  VscTerminalBash,
} from 'react-icons/vsc'

export const DEFAULT_DESCRIPTION =
  'Portfolio of Fredy García: Computer Science and Systems Engineering student and junior full-stack developer from Guatemala.'

// One entry per page. `file` is the name shown in the sidebar (like a file explorer).
// `description` becomes the page's meta description (what search engines show under the title).
export const navItems = [
  { path: '/', file: 'home.jsx', editorFile: 'home.jsx', title: 'Home', Icon: FaReact, description: DEFAULT_DESCRIPTION },
  { path: '/about', file: 'about.md', editorFile: 'about.md', title: 'About', Icon: VscMarkdown, description: 'About Fredy García: his studies at USAC, the technologies he works with and how he works with Scrum.' },
  { path: '/values', file: 'values.json', editorFile: 'values.json', title: 'Professional Values', Icon: VscJson, description: "The professional values that guide Fredy García's work: learning, collaboration, leadership, communication, adaptability and integrity." },
  { path: '/mark', file: 'mark.md', editorFile: 'mark.md', title: 'Personal Mark', Icon: VscMarkdown, description: "Fredy García's personal brand: curiosity, craftsmanship and collaboration." },
  { path: '/mci', file: 'mci.yml', editorFile: 'mci.yml', title: 'MCI Goals', Icon: VscSettingsGear, description: 'The crucially important goals Fredy García is working on to grow as a software developer.' },
  { path: '/projects', file: 'projects/', editorFile: 'projects.md', title: 'Projects', Icon: VscFolder, description: 'A selection of software projects by Fredy García, with tech stack, status and links.' },
  { path: '/cv', file: 'cv.pdf', editorFile: 'cv.pdf', title: 'CV', Icon: VscFilePdf, description: 'Curriculum vitae of Fredy García: experience, education, skills, languages and certifications.' },
  { path: '/contact', file: 'contact.sh', editorFile: 'contact.sh', title: 'Contact', Icon: VscTerminalBash, description: 'Get in touch with Fredy García by email, GitHub, LinkedIn or Instagram.' },
]

const root = ['fredy-garcia', 'portfolio']

// Returns what the tab bar, breadcrumb, status bar and SEO need for the current URL
export function getPageMeta(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/'

  const exact = navItems.find((item) => item.path === clean)
  if (exact) {
    return {
      file: exact.editorFile,
      Icon: exact.Icon,
      description: exact.description,
      crumbs: [...root, exact.editorFile],
    }
  }

  // Detail pages such as /projects/ahorra-hoy (each page passes its own description)
  const parent = navItems.find((item) => item.path !== '/' && clean.startsWith(`${item.path}/`))
  if (parent) {
    const file = `${clean.split('/').pop()}.md`
    return { file, Icon: VscMarkdown, description: null, crumbs: [...root, parent.file.replace('/', ''), file] }
  }

  return {
    file: 'command-not-found',
    Icon: VscTerminalBash,
    description: 'This page does not exist.',
    notFound: true,
    crumbs: [...root, 'command-not-found'],
  }
}
