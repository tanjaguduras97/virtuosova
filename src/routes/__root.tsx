import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'
import { GA4_MEASUREMENT_ID, TRACKING_CONFIGURED } from '../lib/tracking'

const SITE_URL = 'https://virtuosovirtualassistants.com'
const SITE_NAME = 'Virtuoso Virtual Assistants'
const DEFAULT_TITLE = 'Virtuoso | Virtual Assistant Agency — One Team for Marketing, Operations & Support'
const DEFAULT_DESCRIPTION =
  'Vetted Europe-based specialists for social media, content, websites, executive support and automation — one team, one point of contact.'
// [PLACEHOLDER: swap for the cropped 1200×630 hero photo (virtuoso.png) once it's in /assets/brand/]
const DEFAULT_OG_IMAGE = `${SITE_URL}/specialist-1.png`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: DEFAULT_TITLE,
      },
      { name: 'description', content: DEFAULT_DESCRIPTION },
      { name: 'robots', content: 'index, follow' },
      { name: 'theme-color', content: '#7a1f3d' },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: DEFAULT_TITLE },
      { property: 'og:description', content: DEFAULT_DESCRIPTION },
      { property: 'og:image', content: DEFAULT_OG_IMAGE },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:locale', content: 'en_US' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: DEFAULT_TITLE },
      { name: 'twitter:description', content: DEFAULT_DESCRIPTION },
      { name: 'twitter:image', content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: 'icon', href: '/favicon.ico' }],
  }),
  shellComponent: RootDocument,
})

const LOCAL_BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  description: DEFAULT_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Banja Luka',
    addressCountry: 'BA',
  },
  areaServed: 'Europe',
  sameAs: [
    'https://www.upwork.com/agencies/virtuosovirtualassistants/',
    'https://www.linkedin.com/company/virtuosovirtualassistants',
    'https://www.instagram.com/virtuosova_agency/',
  ],
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
        />
        {TRACKING_CONFIGURED && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_MEASUREMENT_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
