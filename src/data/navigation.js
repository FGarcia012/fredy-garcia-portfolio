import { FaReact } from 'react-icons/fa'
import {
  VscFilePdf,
  VscFolder,
  VscJson,
  VscMarkdown,
  VscSettingsGear,
  VscTerminalBash,
} from 'react-icons/vsc'

// One entry per page. `file` is the name shown in the sidebar (like a file explorer).
export const navItems = [
  { path: '/', file: 'home.jsx', editorFile: 'home.jsx', title: 'Home', Icon: FaReact },
  { path: '/about', file: 'about.md', editorFile: 'about.md', title: 'About', Icon: VscMarkdown },
  { path: '/values', file: 'values.json', editorFile: 'values.json', title: 'Professional Values', Icon: VscJson },
  { path: '/mark', file: 'mark.md', editorFile: 'mark.md', title: 'Personal Mark', Icon: VscMarkdown },
  { path: '/mci', file: 'mci.yml', editorFile: 'mci.yml', title: 'MCI Goals', Icon: VscSettingsGear },
  { path: '/projects', file: 'projects/', editorFile: 'projects.md', title: 'Projects', Icon: VscFolder },
  { path: '/cv', file: 'cv.pdf', editorFile: 'cv.pdf', title: 'CV', Icon: VscFilePdf },
  { path: '/contact', file: 'contact.sh', editorFile: 'contact.sh', title: 'Contact', Icon: VscTerminalBash },
]

const root = ['fredy-garcia', 'portfolio']

// Returns what the tab bar, breadcrumb and status bar need for the current URL
export function getPageMeta(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/'

  const exact = navItems.find((item) => item.path === clean)
  if (exact) {
    return { file: exact.editorFile, Icon: exact.Icon, crumbs: [...root, exact.editorFile] }
  }

  // Detail pages such as /projects/ahorra-hoy
  const parent = navItems.find((item) => item.path !== '/' && clean.startsWith(`${item.path}/`))
  if (parent) {
    const file = `${clean.split('/').pop()}.md`
    return { file, Icon: VscMarkdown, crumbs: [...root, parent.file.replace('/', ''), file] }
  }

  return { file: 'command-not-found', Icon: VscTerminalBash, crumbs: [...root, 'command-not-found'] }
}
