export type Categories = 'men' | 'women' | 'kids' | 'trending';

export interface NavbarData {
    label: string;
    path: `/${Categories}` | string // Path will be dynamically generated
    color?: string;
    dropdown?: {
        elements: Pick<NavbarData, 'label' | 'path'>[] // Only pick label and path
    }
}

// Helper function to dynamically add the category prefix to the paths
const createCategoryPaths = (category: Categories, items: Pick<NavbarData, 'label' | 'path'>[]): Pick<NavbarData, 'label' | 'path'>[] => {
    return items.map(item => ({
        label: item.label,
        path: `${category}/${item.path}` // Automatically prefix the category to the path
    }));
}

export const itemsByCategories: Record<Categories, Pick<NavbarData, 'label' | 'path'>[]> = {
    'men': createCategoryPaths('men', [
        { label: 'Home & Hobbies', path: 'home-hobbies' },
        { label: 'Tech & Gadgets', path: 'tech-and-gadgets' },
        { label: 'Grooming & Personal Care', path: 'grooming-personal-care' },
        { label: 'Entertainment & Media', path: 'entertainment-media' },
        { label: 'Outdoor & Sports Gear', path: 'outdoor-sports-gear' }
    ]),
    'women': createCategoryPaths('women', [
        { label: 'Beauty & Personal Care', path: 'beauty-personal-care' },
        { label: 'Wellness & Relaxation', path: 'wellness-relaxation' },
        { label: 'Home & Living', path: 'home-living' },
        { label: 'Crafts & DIY', path: 'crafts-diy' },
        { label: 'Tech & Gadgets', path: 'tech-and-gadgets' }
    ]),
    'kids': createCategoryPaths('kids', [
        { label: 'Toys & Games', path: 'toys-games' },
        { label: 'Outdoor Play', path: 'outdoor-play' },
        { label: 'Tech for Kids', path: 'tech-for-kids' },
        { label: 'Art & Creativity', path: 'art-creativity' },
        { label: 'Books & Learning Materials', path: 'books-learning-materials' }
    ]),
    'trending': []
}

export const routesData: Array<NavbarData> = [
    {
        label: 'Men',
        path: '/men',
        color: '#0079ff',
        dropdown: {
            elements: itemsByCategories['men']
        }
    },
    {
        label: 'Women',
        path: '/women',
        color: '#E41756',
        dropdown: {
            elements: itemsByCategories['women']
        }
    },
    {
        label: 'Kids',
        path: '/kids',
        color: '#2CBD80',
        dropdown: {
            elements: itemsByCategories['kids']
        }
    },
    {
        label: 'Trending',
        path: '/trending',
        color: '#FA812F'
    }
];
