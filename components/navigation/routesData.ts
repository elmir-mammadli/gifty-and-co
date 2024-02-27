export interface NavbarData {
    label: string;
    path: string;
}
export const routesData: NavbarData[] = [
    {
        label: 'Shop by Interest',
        path: '/'
    },
    {
        label: 'Occasions',
        path: '/about'
    },
    {
        label: 'For',
        path: '/contact'
    },
    {
        label: 'Trending',
        path: '/blog'
    },
    {
        label: 'Sale',
        path: '/blog2'
    }
]