import { MetadataRoute } from 'next'
import { indianCities, usaCities, internationalCities, indianStates } from '@/lib/constants'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://pulsequik.com'

  // Fetch blog posts
  const posts = await client.fetch(`*[_type == "post" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }`);

  // Static pages with specific priorities
  const staticPages = [
    { url: '', changeFrequency: 'daily', priority: 1.0 },
    { url: '/about-us', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/contact-us', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/faq', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/careers', changeFrequency: 'monthly', priority: 0.6 },
    { url: '/privacy-policy', changeFrequency: 'yearly', priority: 0.5 },
    { url: '/terms-and-conditions', changeFrequency: 'yearly', priority: 0.5 },
    { url: '/refund-cancellation-policy', changeFrequency: 'yearly', priority: 0.5 },
    { url: '/medical-fitness-certificate', changeFrequency: 'weekly', priority: 0.8 },
    { url: '/cara-fitness-certificate', changeFrequency: 'weekly', priority: 0.8 },
    { url: '/caretaker-certificate', changeFrequency: 'weekly', priority: 0.8 },
    { url: '/medical-certificates', changeFrequency: 'weekly', priority: 0.8 },
    { url: '/recovery-certificate', changeFrequency: 'weekly', priority: 0.7 },
    { url: '/unfit-to-travel-certificate', changeFrequency: 'weekly', priority: 0.7 },
    { url: '/sick-leave-certificate', changeFrequency: 'weekly', priority: 0.7 },
    { url: '/online-medical-sick-leave-certificate-in-india', changeFrequency: 'weekly', priority: 0.9 },
    { url: '/backdated-medical-certificate', changeFrequency: 'weekly', priority: 0.7 },
    { url: '/fit-to-fly-certificate', changeFrequency: 'weekly', priority: 0.7 },
    { url: '/form-1a-fitness-certificate', changeFrequency: 'weekly', priority: 0.8 },
    { url: '/international-medical-certificate', changeFrequency: 'weekly', priority: 0.8 },
    { url: '/online-medical-certificate-in-india', changeFrequency: 'weekly', priority: 0.9 },
    { url: '/online-medical-certificate-in-usa', changeFrequency: 'weekly', priority: 0.8 },
    { url: '/doctor-consultation', changeFrequency: 'weekly', priority: 0.7 },
    { url: '/states-and-cities-where-we-are-available', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/blog', changeFrequency: 'daily', priority: 0.9 }
  ] as const

  const routes: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency as any,
    priority: page.priority,
  }))

  // Add Blog posts
  if (posts) {
    posts.forEach((post: any) => {
      routes.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post._updatedAt),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })
  }

  // Add Indian medical certificate cities
  indianCities.forEach((city) => {
    routes.push({
      url: `${baseUrl}/online-medical-certificate-in-${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  })

  // Add Indian sick leave certificate cities
  indianCities.forEach((city) => {
    routes.push({
      url: `${baseUrl}/online-medical-sick-leave-certificate-in-${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  })

  // Add USA cities
  usaCities.forEach((city) => {
    routes.push({
      url: `${baseUrl}/online-medical-certificate-in-usa-${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  })

  // Add International cities
  internationalCities.forEach((city) => {
    routes.push({
      url: `${baseUrl}/online-international-medical-certificate-in-${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  })

  // Add Indian states for Form 1A
  indianStates.forEach((state) => {
    routes.push({
      url: `${baseUrl}/online-form-1a-fitness-certificate-in-${state}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  })

  return routes
}
