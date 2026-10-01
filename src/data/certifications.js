// Add a new certificate by adding one more object to this array.
// type "link": opens `url` in a new tab. type "file": opens `file` in a modal.
// Files live in /public/certificates/ and are referenced as "/certificates/<name>".
export const certifications = [
  {
    id: 'ccna-itn-credly',
    type: 'link',
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    url: 'https://www.credly.com/badges/573dc394-d07a-4551-a4b4-30afbad31ae4/public_url',
    image: null, // [EDIT] badge image, added in Phase 4
  },
  {
    id: 'ccna-itn-pdf',
    type: 'file',
    title: 'CCNA: Introduction to Networks', // [EDIT] confirm: is this a different CCNA course?
    issuer: 'Cisco Networking Academy',
    issuedOn: '2023-03-07',
    file: '/certificates/ccna-introduction-to-networks.pdf',
    image: null, // [EDIT] preview image, added in Phase 4
  },
]
