module.exports = {
  "title": "YC's Weekly Journal",
  "description": "Weekly Journal",
  "dest": "public",
  "head": [
  /*
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    */
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  plugins: {
    "vuepress-plugin-sitemap": {
    hostname: "http://ycjhuo.gitlab.io"
      },
    "@vuepress/google-analytics": {
      "ga": "UA-111664664-1"
      },
    "vuepress-plugin-google-adsense": {
      ad_client: "ca-pub-1016984133618195" 
      }
  },

  "theme": "reco",
  // 主題的配置文件
  "themeConfig": {
    // 取消 404 騰訊公益
    noFoundPageByTencent: false,
    // 導航欄
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      /*
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      
      {
        "text": "Mail",
        "icon": "reco-mail",
        "items": [
          {
            "text": "y.c.jhuo@gmail.com",
            "link": "y.c.jhuo@gmail.com",
            "icon": "reco-message"
          }
        ]
      }
      */
    ],
    "sidebar": "auto",/*{
      
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]

    },*/
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    /*
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    */
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "YC JHUO",
    /*
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    */
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}