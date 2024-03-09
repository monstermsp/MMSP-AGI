/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'MMSP-AGI',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'MMSP-AGI',
  },
  Meta: {
    Description: 'Launch MMSP-AGI to unlock the full potential of AI, with precise control over your data and models. Voice interface, AI personas, advanced features, and fun UX.',
    SiteName: 'MMSP-AGI | Precision AI for Your Business',
    ThemeColor: '#32383E',
  },
  URIs: {
    Home: 'https://mmsp-agi.monstermsp.com',
    // App: 'https://get.big-agi.com',
    CardImage: 'https://big-agi.com/icons/card-dark-1200.png',
    OpenRepo: 'https://monstermsp.com',
    OpenProject: 'https://monstermsp.com',
    SupportInvite: 'https://support.monstermsp.com',
    // Twitter: 'https://www.twitter.com/enricoros',
    PrivacyPolicy: 'https://monstermsp.com',
  },
} as const;