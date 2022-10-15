const blogData: HomePageStore['data'] = []
blogData.push({
  title: 'Que es React',
  slug: 'que-es-react',
  content: 'React es el mejor framework de JavaScript',
  author: 'juanDc'
})
blogData.push({
  title: 'Que es vue',
  slug: 'que-es-vue',
  content: 'vue es el mejor framework de JavaScript',
  author: 'juanDc'
})
blogData.push({
  title: 'Que es angular',
  slug: 'que-es-angular',
  content: 'angular es el mejor framework de JavaScript',
  author: 'juanDc'
})

interface HomePageStore {
  data:{
    title: string,
    slug: string,
    content: string,
    author: string
  }[]
}

export { blogData };