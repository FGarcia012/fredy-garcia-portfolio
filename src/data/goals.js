import { FaCertificate, FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa'

// MCI = Crucially Important Goals. Every [EDIT] is a value only Fredy can fill in.
// progress: 0-100. keyResults: done true/false.
export const goals = [
  {
    id: 'portfolio',
    title: 'Portfolio & Projects',
    Icon: FaLaptopCode,
    deadline: null, // [EDIT] e.g. 'Dec 2026'
    progress: 0, // [EDIT]
    keyResults: [
      { text: 'Deploy [EDIT: N] projects online', done: false },
      { text: 'Add real screenshots and links to each featured project', done: false },
    ],
  },
  {
    id: 'skills',
    title: 'Skill Development',
    Icon: FaCode,
    deadline: null, // [EDIT]
    progress: 0, // [EDIT]
    keyResults: [
      { text: 'Reach an advanced level in full-stack development', done: false },
      { text: '[EDIT: add a measurable result]', done: false },
    ],
  },
  {
    id: 'certifications',
    title: 'Certifications',
    Icon: FaCertificate,
    deadline: null, // [EDIT]
    progress: 0, // [EDIT]
    keyResults: [
      { text: 'Earn [EDIT: N] more recognized IT certifications', done: false },
      { text: '[EDIT: name of the next certification]', done: false },
    ],
  },
  {
    id: 'career',
    title: 'Career',
    Icon: FaRocket,
    deadline: null, // [EDIT]
    progress: 0, // [EDIT]
    keyResults: [
      { text: 'Land my first professional role or internship', done: false },
      { text: 'Send [EDIT: N] applications per month', done: false },
    ],
  },
]
