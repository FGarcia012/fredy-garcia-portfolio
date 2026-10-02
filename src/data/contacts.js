import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { links } from './links'

// Contact channels used on the Contact page and in the CV.
// Only email and social links: no phone, age or address (privacy).
export const contacts = [
  { id: 'email', label: 'Email', Icon: FaEnvelope, href: `mailto:${links.email}`, text: links.email },
  { id: 'github', label: 'GitHub', Icon: FaGithub, href: links.github, text: 'Code and projects' },
  { id: 'linkedin', label: 'LinkedIn', Icon: FaLinkedin, href: links.linkedin, text: 'Professional profile' },
  { id: 'instagram', label: 'Instagram', Icon: FaInstagram, href: links.instagram, text: 'Follow me' },
]
