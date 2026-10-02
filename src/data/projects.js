// Project data. Cards and README pages read from here.
//
// Card fields:   slug, file, title, summary, stack, tags, status, github, demo, featured
// README fields: overview, role, features, architecture, challenges, screenshots, linksNote
// Any field can be null or empty: the card or the README section is simply hidden.
// tags: 'Web' | 'Desktop' | 'Team' | 'Individual' | 'Professional' (used by the filter chips)
// screenshots: [{ src: '/images/projects/name-1.png', alt: 'What the picture shows' }]
// architecture: { flow: ['Step 1', 'Step 2'], notes: ['Short sentence'] }
export const projects = [
  {
    slug: 'ahorra-hoy',
    file: 'ahorra-hoy.json',
    title: 'AHORRA HOY',
    summary: 'Personal savings app to track and plan savings.',
    stack: ['Node.js', 'Express', 'MongoDB', 'React'],
    tags: ['Web', 'Individual'],
    status: 'Completed',
    github: null, // [EDIT]
    demo: 'https://ahorrahoy-2c3a6.web.app',
    featured: true,
    overview:
      'AHORRA HOY is a personal savings app. Users set savings goals, record deposits and withdrawals, and follow their progress and financial statistics.',
    role: 'Individual project.', // [EDIT] describe exactly what you built
    features: [
      'Savings goals with progress tracking',
      'Deposits and withdrawals',
      'Income and expense records',
      'Financial statistics',
      'Sign in with Google',
    ], // [EDIT] check this list
    architecture: {
      flow: ['React app', 'Express API', 'MongoDB'],
      notes: [
        'The React front end is hosted on Firebase Hosting.',
        'The Node.js and Express API is hosted on Vercel and uses Mongoose to talk to MongoDB.',
        'Google sign-in uses @react-oauth/google on the front end and google-auth-library on the back end.',
      ],
    },
    challenges: [
      'Money and floating point: amounts are stored as numbers, so I am comparing ways to avoid rounding errors (toFixed, BigNumber.js, decimal.js and Dinero.js).',
    ], // [EDIT] add what you learned
    screenshots: [], // [EDIT] add real screenshots
    linksNote: null,
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
    featured: false,
    overview:
      'Professional work for Distefano, a Guatemalan textile company, from Aug 2025 to Nov 2025. I worked on the ERP the company uses every day.',
    role: 'Software Developer at Distefano.',
    features: [
      'Custom Odoo 8 modules built for the needs of the business',
      'Improved visual interface and user experience',
      'System updates to follow changing business requirements',
      'On-site technical support at events: connecting thermal printers to the network so orders could be received',
    ],
    architecture: null,
    challenges: null, // [EDIT] add what you learned
    screenshots: [],
    linksNote: 'The code is private company work, so there are no public links. I describe it only in general terms.',
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
    overview:
      'My personal portfolio, designed like a developer workspace: a code-editor layout, a custom typing animation and a command-line style.',
    role: 'Individual project: design and development.',
    features: [
      'IDE layout with a file explorer, editor tabs and a status bar',
      'Custom typing engine that respects reduced-motion settings',
      'Boot screen, MCI goal tracker and README-style project pages',
      'All content lives in data files, so adding a project needs no component changes',
      'Interactive terminal (in progress)',
    ],
    architecture: {
      flow: ['Data files', 'React pages', 'Bootstrap theme'],
      notes: [
        'Pages are loaded with React.lazy, so each route is a separate chunk.',
        'Colors are CSS variables that override the Bootstrap ones.',
      ],
    },
    challenges: [
      'Making the typing effect accessible: screen readers get the full text at once, and visitors with reduced motion see it instantly.',
    ],
    screenshots: [],
    linksNote: null,
  },
  {
    slug: 'blfags',
    file: 'blfags.json',
    title: 'BLFAGS',
    summary:
      'Anonymous personal blog: people publish without a real name or a visible profile. Posts can be public or private, and private posts are visible only to their author.',
    stack: [], // [EDIT] technologies used
    tags: ['Web'],
    status: null, // [EDIT]
    github: null, // [EDIT]
    demo: null, // [EDIT]
    featured: true,
    overview:
      'An anonymous personal blog. People publish without a real name or a visible profile.',
    role: null, // [EDIT]
    features: [
      'Anonymous publishing: no real name and no visible profile',
      'Public and private posts',
      'Private posts are visible only to their author',
    ],
    architecture: null,
    challenges: null, // [EDIT]
    screenshots: [],
    linksNote: null,
  },
]

// Chips shown on the Projects page. A chip only appears when at least one project uses that tag.
export const projectTags = ['Web', 'Desktop', 'Team', 'Individual', 'Professional']
