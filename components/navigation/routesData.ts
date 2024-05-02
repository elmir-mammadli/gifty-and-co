export interface NavbarData {
    label: string;
    path: string;
    color?: string;
}
export const routesData: NavbarData[] = [
    {
        label: 'Shop by Interest',
        path: '/men',
        color: '#32C6F2'
    },
    {
        label: 'Occasions',
        path: '/about',
        color: '#E41756'
    },
    {
        label: 'For',
        path: '/contact',
        color: '#2CBD80'
    },
    {
        label: 'Trending',
        path: '/blog',
        color: '#E40A2D'
    },
    // {
    //     label: 'Sale',
    //     path: '/blog2',
    //     color: '#E40A2D'
    // }
]