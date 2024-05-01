
import * as prismic from '@prismicio/client'

export const repositoryName = 'astro-prismic-play'

export const client = prismic.createClient(repositoryName, {
  accessToken: '',
  routes: [
    {
      type: 'homepage',
      path: '/',
    },
  ],
})

export async function getPage(uuid: string) {
  return client.getByUID('page', uuid, { pageSize: 1, page: 1 });
}

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