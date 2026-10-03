import { FaCertificate, FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa'

export const goals = [
  {
    id: 'portfolio',
    title: 'Portfolio & Projects',
    Icon: FaLaptopCode,
    deadline: 'Dec 2030',
    progress: 30,
    keyResults: [
      { text: 'Deploy 10 projects', done: true },
      { text: 'Add links to each featured project', done: true },
    ],
  },
  {
    id: 'skills',
    title: 'Skill Development',
    Icon: FaCode,
    deadline: 'Dec 2030',
    progress: 50,
    keyResults: [
      { text: 'Reach an advanced level in full-stack development', done: false },
      { text: 'Improve my skills in testing, deployment and software architecture', done: true },
    ],
  },
  {
    id: 'certifications',
    title: 'Certifications',
    Icon: FaCertificate,
    deadline: 'Dec 2028', 
    progress: 0, 
    keyResults: [
      { text: ' Earn recognized certifications that strengthen my skills in software development', done: false },
      { text: 'Earn my first two certifications: ISC2 Certified in Cybersecurity (CC) and AWS Certified Developer – Associate', done: false },
    ],
  },
  {
    id: 'career',
    title: 'Career',
    Icon: FaRocket,
    deadline: 'Dec 2032', 
    progress: 5, 
    keyResults: [
      { text: 'Get my first professional job in software development and continue developing my technical and professional skills.', done: false },
      { text: 'Complete my degree in Computer Science and Systems Engineering and pursue a masters degree to continue advancing my professional education.', done: true },
    ],
  },
]
