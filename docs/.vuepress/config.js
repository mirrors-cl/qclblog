module.exports = {
    title:'blessbless',
    theme: 'reco',
    // 移动端优化
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
        ],
    themeConfig:{   
        // logo
        logo:'/public/user.jpg',
        // author
        author:'qcl',
        // 导航按钮
        nav:[
            {text: 'TimeLine', link: '/timeline/', icon: 'reco-date'}
        ],
        blogConfig: {
            category: {
              location: 2,     // 在导航栏菜单中所占的位置，默认2
              text: 'Category' // 默认文案 “分类”
            },
            tag: {
              location: 3,     // 在导航栏菜单中所占的位置，默认3
              text: 'Tag'      // 默认文案 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
              { icon: 'reco-github', link: 'https://github.com/recoluan' },
              { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
            ]
          }
    }
}