
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
