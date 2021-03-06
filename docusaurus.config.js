/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Spring Boot 持久化最佳实践',
  tagline: '在 Spring Boot 应用中优化 Java 持久化性能',
  url: 'https://levid-gc.github.io',
  baseUrl: '/spring-boot-persistence-best-practices/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'levid-gc', // Usually your GitHub org/user name.
  projectName: 'spring-boot-persistence-best-practices', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Spring Boot 持久化最佳实践',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '文档',
          position: 'left',
        },
        {
          to: 'blog',
          label: '博客',
          position: 'left'
        },
        {
          href: 'https://github.com/levid-gc/spring-boot-persistence-best-practices',
          label: 'GitHub',
          position: 'right',
        },
      ],
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
