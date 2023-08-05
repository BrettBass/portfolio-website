// Define the type for a single link
export type Link = {
    label: string;
    href: string;
    download?: boolean;
};

// Export the array of links
const links: Link[] = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'About',
        href: '/about',
    },
    {
        label: 'Projects',
        href: '/projects',
    },
    {
        label: 'Contact',
        href: '/contact',
    },
    {
        label: 'Resume',
        href:
            'https://drive.google.com/u/0/uc?id=1STGoP0NsWAKwwotpKrYErdOFTQEae44u&export=download',
        download: true,
    },
];

export default links;
