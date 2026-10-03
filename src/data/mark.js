import { FaSearch, FaTools, FaUsers } from 'react-icons/fa'

export const mark = {
  tagline: 'I turn curiosity into working software.',
  statement: [
    'I believe good software starts with curiosity.',
    'I look for new ideas and tools, and I test them in real projects.',
    'I care about the quality of my work, from clean code to a clear user experience.',
    'I never stop learning, because technology keeps changing and I want to grow with it.',
  ],
  pillars: [
    { title: 'Curiosity', Icon: FaSearch, text: 'I ask why things work and I try new ideas.' },
    { title: 'Craftsmanship', Icon: FaTools, text: 'I care about clean and readable code.' },
    { title: 'Collaboration', Icon: FaUsers, text: 'I share what I learn and I build with others.' },
  ],
  
  quote: { text: 'Talk is cheap. Show me the code.', author: 'Linus Torvalds' },
}
