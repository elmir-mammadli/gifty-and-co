export interface DropdownData {
    label: string;
    path: string;
    slogan?: string;
}
export interface NavbarData {
    label: string;
    dropdown?: DropdownData[];
}
export const routesData: NavbarData[] = [
    {
        label: 'Audience',
        dropdown: [
            {
                label: 'Families',
                path: '/families',
                slogan: 'Find thoughtful and practical gifts for those who nurture and support others, whether it\'s for parents, guardians, or anyone who plays a caregiving role in someone\'s life.'
            },
            {
                label: 'Individuals',
                path: '/individuals',
                slogan: 'Discover items tailored to personal preferences and interests, perfect for treating yourself or finding that special something for a friend or loved one.'
            },
            {
                label: 'Couples',
                path: '/couples',
                slogan: 'Explore gifts that celebrate the bond between two people, whether it\'s for romantic partners, close friends, or family members.'
            },
            {
                label: 'Kids & Teens',
                path: 'kids',
                slogan: 'Browse presents that cater to the unique tastes and needs of children and teenagers, from toys and trendy gadgets to educational materials and more, for all ages and interests.'
            }
        ]
    },
    {
        label: 'Occasions',
        dropdown: [
            {
                label: 'Celebrations',
                path: '/celebrations',
                slogan: 'Find the perfect gift for any occasion worth celebrating, whether it\'s a birthday, anniversary, wedding, or any other special milestone in life.'

            },
            {
                label: 'Milestones',
                path: '/milestones',
                slogan: 'Discover presents that commemorate significant events and achievements, from graduations and promotions to moving into a new home or starting a family.'
            },
            {
                label: 'Special Events',
                path: '/special-events',
                slogan: 'Discover thoughtful presents for gatherings and occasions that bring people together, from housewarmings to graduations and everything in between'
            },
            {
                label: 'Life Moments',
                path: '/life-moments',
                slogan: 'Browse gifts that honor the highs and lows of life\'s journey, offering comfort, joy, and support during times of change and growth'
            }
        ]
    },
    {
        label: 'Interests',
        dropdown: [
            {
                label: 'Culinary Delights',
                path: '/culinary-delights',
                slogan: 'Indulge in the pleasure of food and drink with a selection of gourmet treats, cooking gadgets, and accessories for food lovers of all kinds.'
            },
            {
                label: 'Outdoor Adventures & Play',
                path: '/adventure-and-play',
                slogan: 'Gear up for outdoor exploration and adventure with products designed for camping, hiking, sports, and other activities that embrace the great outdoors.'
            },
            {
                label: 'Creature Comforts',
                path: '/creature-comforts',
                
            },
            {
                label: 'Wanderlust',
                path: '/wanderlust'
            },
            {
                label: 'Wellness & Relaxation',
                path: '/wellness'
            },
            {
                label: 'Thoughtful Gestures',
                path: '/gestures'
            },
            {
                label: 'Everyday Living',
                path: '/everyday-living'
            },
        ]
    },
    {
        label: 'Trending',
        dropdown: [
            {
                label: 'Hot Picks',
                path: '/hot-picks'
            },
            {
                label: 'What\'s in',
                path: '/what-is-in'
            },
            {
                label: 'Fan Favorites',
                path: '/fan'
            },
            {
                label: 'Buzzworthy',
                path: '/buzzworthy'
            }
        ]
    },
    // {
    //     label: 'Sale',
    //     path: '/blog2',
    //     color: '#E40A2D'
    // }
]