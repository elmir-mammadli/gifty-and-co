export interface NavbarData {
    label: string;
    path: string;
    color: string;
}
export const routesData: NavbarData[] = [
    {
        label: 'Shop by Interest',
        path: '/',
        color: '#43B17C'
    },
    {
        label: 'Occasions',
        path: '/about',
        color: '#0A95FF'
    },
    {
        label: 'Gift Ideas For',
        path: '/contact',
        color: '#FF5733'
    },
    {
        label: 'Trending',
        path: '/blog',
        color: '#FC6C85'
    },
    {
        label: 'Sale',
        path: '/blog2',
        color: '#E40A2D'
    }
]