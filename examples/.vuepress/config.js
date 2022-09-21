module.exports = {
  title: 'Dcesa',
  description: '',
  base: '/',
  dest: 'dist/',
  theme: require.resolve('../../'),
  themeConfig: {
    // defaultTheme: { dark: [19, 6] },
    showThemeButton: false,
    cover: '/cover2.jpg',
    logo: '/Dcesa.png',
    backgroundImage: false,
    pageGroup: 6,
    // postTime: {
    //   createTime: 'Create Time',
    //   lastUpdated: 'Last Updated',
    //   options: {
    //     dateStyle: 'full',
    //     timeStyle: 'short',
    //     hour12: false,
    //     weekday: 'long'
    //   }
    // },
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Sobre Nosotros', link: '/acerca/1/' },
      { text: 'Productos', link: '/productos/' },
      { text: 'Proyectos', link: '/proyectos/' },
      { text: 'Recursos', link: '/recursos/5/' },
      { text: 'Contacto', link: '/contacto/' }
    ],
    footer: [
      { text: 'Dcesa', link: '' }
    ]
  },
  // postcss: {
  //   plugins: [
  //     require('css-prefers-color-scheme/postcss'),
  //     require('autoprefixer')
  //   ]
  // }
}
