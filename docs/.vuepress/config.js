module.exports = {
  // 默认语言
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
    title:'bless',
    theme: 'reco',
    // 移动端优化
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
        ],
    themeConfig:{   
        subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        type: 'blog', // 类型 博客
        // logo
        logo:'/cj.jpg', // 左上角logo
        // 头像
        authorAvatar: '/yq.jpg', // 个人头像
        // author
        author:'lan', //作者姓名
        // 导航按钮 
        nav:[
            {text: '时间轴', link: '/timeline/', icon: 'reco-date'},
        ],
        blogConfig: {
            category: {
              location: 2,     // 在导航栏菜单中所占的位置，默认2
              text: '分类' // 默认文案 “分类”
            },
            tag: {
              location: 3,     // 在导航栏菜单中所占的位置，默认3
              text: '标签'      // 默认文案 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
              { icon: 'reco-github', link: 'https://github.com/mirrors-cl' },
              // { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
            ]
        },
        // 添加友情链接
        friendLink: [
          {
            title: 'vuepress-theme-reco',
            desc: 'A simple and beautiful vuepress Blog & Doc theme.',
            logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
            link: 'https://vuepress-theme-reco.recoluan.com'
          },
          {
            title: '午后南杂',
            desc: 'Enjoy when you can, and endure when you must.',
            email: 'recoluan@qq.com',
            link: 'https://www.recoluan.com'
          },
          // ...
        ]
    }
}