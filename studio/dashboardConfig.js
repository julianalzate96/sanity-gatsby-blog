export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d7a92d526b77a3c9ee1a86f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rdupnmqz',
                  apiId: '4a67b00f-3b08-4da9-9a99-9b6da1748b6a'
                },
                {
                  buildHookId: '5d7a92d5fdcb6f4ec5d686c6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-b5goiade',
                  apiId: '6a3e3e5f-6536-44bc-b35a-4dd8ab148386'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/julianalzate96/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-b5goiade.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
