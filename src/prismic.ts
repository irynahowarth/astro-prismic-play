
import * as prismic from '@prismicio/client'

export const repositoryName = 'astro-prismic-play'

export const client = prismic.createClient(repositoryName, {
  accessToken: '',
  routes: [
    {
      type: 'homepage',
      path: '/',
    },
    {
      type: 'testimonial',
      path: '/:uid',
    },
    {
      type: 'page',
      path: '/:uid',
    },
  ],
})



export async function generateSetting() {
  const { data } = await client.getSingle("settings");

  return {
    title: data.site_title || "Flowrise",
    description: data.meta_description || "Flowrise is relaxing app for you",
    openGraph: {
      image: [data.og_image.url || ""]
    },
    navigation: data.navigation
  }
}