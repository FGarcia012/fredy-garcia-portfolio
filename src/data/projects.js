// Seed data. `status`, `github` and `demo` can be null: the card hides what does not exist.
export const projects = [
  {
    slug: 'ahorra-hoy',
    file: 'ahorra-hoy.json',
    title: 'AHORRA HOY',
    summary: 'Personal savings app to track and plan savings.',
    stack: ['Node.js', 'Express', 'MongoDB', 'React'],
    tags: ['Web', 'Individual'],
    status: null, // [EDIT] 'Completed' or 'In progress'
    github: null, // [EDIT]
    demo: null, // [EDIT]
    featured: true,
  },
  {
    slug: 'odoo-erp-distefano',
    file: 'odoo-erp.json',
    title: 'Odoo ERP Customization',
    summary:
      'Custom modules, interface improvements and system updates for the ERP of a Guatemalan textile company.',
    stack: ['Odoo 8'],
    tags: ['Professional'],
    status: 'Completed',
    github: null, // private company code: no public link
    demo: null,
    featured: true,
  },
  {
    slug: 'portfolio',
    file: 'portfolio.jsx',
    title: 'This Portfolio',
    summary: 'IDE-style personal site with a custom typing engine and an interactive terminal.',
    stack: ['React', 'Bootstrap', 'Vite'],
    tags: ['Web', 'Individual'],
    status: 'In progress',
    github: 'https://github.com/FGarcia012/fredy-garcia-portfolio',
    demo: null,
    featured: true,
  },
]
