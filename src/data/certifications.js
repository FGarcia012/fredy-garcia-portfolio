// Add a new certificate by adding one more object to this array.
// type "file": opens `file` in a modal (files live in /public/certificates/).
// type "link": opens `url` in a new tab.
// Any certificate can also have `verifyUrl`: an extra "Verify" link (for example Credly).
export const certifications = [
  {
    id: 'ccna-itn',
    type: 'file',
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    issuedOn: '2023-03-07',
    file: '/certificates/ccna-introduction-to-networks.pdf',
    verifyUrl: 'https://www.credly.com/badges/573dc394-d07a-4551-a4b4-30afbad31ae4/public_url',
    image: null, // [EDIT] badge image, added in Phase 4
  },
]
