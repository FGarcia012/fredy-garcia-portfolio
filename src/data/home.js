import { certifications } from './certifications'
import { profile } from './profile'

// Lines typed in the hero. `prompt` appears instantly, `text` is typed.
export const heroLines = [
  { prompt: 'fredy@guatemala:~$', text: 'whoami' },
  { text: profile.name, className: 'hero-name' },
]

export const roles = ['Full-Stack Developer', 'Computer Science & Systems Student', 'Scrum Team Player']

export const pitch =
  'I build secure, efficient and scalable web and desktop applications, and I never stop learning.'

const certCount = certifications.length

// Stat cards. Numbers count up; text values are shown as they are.
export const stats = [
  {
    value: certCount,
    label: certCount === 1 ? 'Cisco CCNA certification' : 'Cisco CCNA certifications',
  },
  ...(profile.projectsBuilt === null ? [] : [{ value: profile.projectsBuilt, label: 'Projects built' }]),
  { value: 'Scrum', label: 'Methodology' },
  { value: 'ES / EN', label: 'Languages' },
]
