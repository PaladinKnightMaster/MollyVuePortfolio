import { reactive } from "vue";

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  spaceman: "src\assets\img\pexels-tima-miroshnichenko-5647328(1).mp4",

  percent: 0,
  // portfolioImages: [
  //   "../../assets/img/portfolio/InspireSS.png",
  //   "../../assets/img/portfolio/DimensionMiner.png",
  //   "../../assets/img/portfolio/ImGame.png",
  //   "../../assets/img/portfolio/KeeprSS.png",
  //   "../../assets/img/portfolio/Network.png",
  //   "../../assets/img/portfolio/TowerSS.png",
  // ],

  skillsIcons: [
    {
      title: "HTML5",
      src: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
      type: "lang",
      id: 1,
    },
    {
      title: "CSS3",
      src: "https://armortechs.com/upload/image/blog/css-variables-css-3-logo.png",
      type: "lang",
      id: 2,
    },
    {
      title: "JavaScript ES6",
      src: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png",
      type: "lang",
      id: 3,
    },
    {
      title: "C-Sharp",
      src: "https://1.bp.blogspot.com/-U8C6UaajxeA/XV1J6Yo6x2I/AAAAAAAABQo/3v2OEgTGn9ggUqArXtGZpl_6zqbo09nmACLcBGAs/s1600/csharp_logo.png",
      type: "lang",
      id: 4,
    },
    {
      title: "Node Js",
      src: "https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png",
      type: "tech",
      id: 5,
    },
    {
      title: "Vue.js 3",
      src: "https://coder.clothing/images/stories/virtuemart/product/vuejs-logo.png",
      type: "framework",
      id: 6,
    },
    {
      title: "Next.js",
      src: "https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png",
      type: "framework",
      id: 6,
    },
    {
      title: "DotNet Core",
      src: "https://wpguru.co.uk/wp-content/uploads/2020/04/dotnet-logo.png",
      type: "framework",
      id: 7,
    },
    {
      title: "BootStrap ",
      src: "https://pluspng.com/img-png/bootstrap-logo-vector-png-bem-with-bootstrap-bootstrap-logo-1024.png",
      type: "framework",
      id: 8,
    },
    {
      title: "TailWind CSS",
      src: "https://media.zeemly.com/zeemly/product/tailwind-css.png",
      type: "framework",
      id: 9,
    },
    {
      title: "Sass",
      src: "https://vanseodesign.com/blog/wp-content/uploads/2015/09/sass-logo-2.png",
      type: "lang",
      id: 10,
    },

    {
      title: "MySQL",
      src: "https://findicons.com/files/icons/977/rrze/720/database_mysql.png",
      type: "database",
      id: 11,
    },
    {
      title: "Auth0",
      src: "https://www.pngrepo.com/png/349297/512/auth0.png",
      type: "tech",
      id: 11,
    },
    {
      title: "Scrum",
      src: "https://i.pinimg.com/originals/71/26/cd/7126cdceaae0b3225e4af95d593a7236.png",
      type: "tech",
      id: 12,
    },
    {
      title: "MongoDb",
      src: "https://pluspng.com/img-png/logo-mongodb-png-hundreds-of-popular-mongodb-articles-400.png",
      type: "database",
      id: 13,
    },
    {
      title: "Github",
      src: "https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png",
      type: "tech",
      id: 14,
    },
    {
      title: "NPM",
      src: "https://authy.com/wp-content/uploads/npm-logo.png",
      type: "tech",
      id: 15,
    },
    {
      title: "Git",
      src: "https://3.bp.blogspot.com/-xhNpNJJyQhk/XIe4GY78RQI/AAAAAAAAItc/ouueFUj2Hqo5dntmnKqEaBJR4KQ4Q2K3ACK4BGAYYCw/s1600/logo%2Bgit%2Bicon.png",
      type: "tech",
      id: 15,
    },
    {
      title: "Postman",
      src: "https://blog.scottlogic.com/smangan/assets/postman.png",
      type: "tech",
      id: 16,
    },
    {
      title: "Figma",
      src: "https://cdn.iconscout.com/icon/free/png-512/figma-1693589-1442630.png",
      type: "tech",
      id: 17,
    },
    {
      title: "FireBase",
      src: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
      type: "database",
      id: 18,
    },
    {
      title: "PocketBase",
      src: "https://pbs.twimg.com/profile_images/1544692814822391811/s2hcCido_400x400.png",
      type: "database",
      id: 18,
    },
    {
      title: "Trello",
      src: "https://pluspng.com/img-png/trello-png-trello-png-1600.png",
      type: "tech",
      id: 19,
    },
    {
      title: "Slack",
      src: "https://cdn2.hubspot.net/hubfs/521324/slack-logo.png",
      type: "tech",
      id: 19,
    },
  ],

  devProjects: [
    {
      title: `SamadhiYogaIdaho`,
      description: "Details listed Above",
      tech: [],
      externalLink: "",
      img: "https://cdn.discordapp.com/attachments/1060066788878069891/1060067418073993226/samadhiApp.png",
    },
    {
      title: `RCMF`,
      description: "Randy Carpenter Memorial Foundation website.",
      tech: ["Vue", "BootStrap"],
      externalLink: "",
      img: "https://cdn.discordapp.com/attachments/1060066788878069891/1060068162185465917/rcmfApp.png",
    },
    {
      title: ` SoftBall Website`,
      description: "Website for Centennial HighSchool's Softball team ",
      tech: ["Vue", "BootStrap"],
      externalLink: "",
      img: "https://cdn.discordapp.com/attachments/1051960755311890454/1060304889227509820/image.png",
    },
  ],

  archivedProjects: [
    {
      title: `Task Master`,
      description:
        "creating a task manager, where users can create multiple lists each with multiple items to complete on that list.They will demonstrate their understanding of the MVC Design pattern by completing this process utilizing services, controllers and models. In addition students will be able to persist data into local storage that will be retrieved on page refresh.",
      tech: ["Node Js", "Vue", "BootStrap"],
      githubLink: "",
      externalLink: "https://tungle0319.github.io/TaskMaster/",
      img: "assets/img/portfolio/TowerSS.png",
    },

    {
      title: `Tower`,
      description:
        "SPA app designed to help people get together with other users for events. Whether they are concerts, expos, or sporting events. VueJs with Vue-Router for the client. Express with Node.js and MongoDB with Mongoose to manage database and handling relationships of both one to many, and many to many objects. Identity management with Auth0. ",
      tech: ["Node Js", "Vue", "BootStrap", "Auth0"],
      githubLink: "",
      externalLink: "https://thetower-f4he.onrender.com",
      img: "https://cdn.discordapp.com/attachments/1060066788878069891/1060067418464075877/TowerSS.png",
    },

    {
      title: `Dimension Miner`,
      description:
        "A Cookie Clicker Clone that  demonstrates  understanding of working with the DOM and dynamically rendering data to the page. styling the page utilizing Bootstrap best practices to design the page.",
      tech: ["HTML", "JavaScript", "BootStrap"],
      githubLink: "",
      externalLink: "https://tungle0319.github.io/DimensionMiner/",
      img: "assets/img/portfolio/TowerSS.png",
    },
  ],

  featuredProjects: [
    {
      title: `SamadhiYogaIdaho`,
      description:
        "Custom Designed and built website for a small yoga business owner client. The app will allow users to easily browse and sign up for classes, view class schedules, and purchase memberships and packages. It will also include a feature for teachers to manage their schedules and events, to manage customer information and Integrated Ghost for CMS blog publishing feature. The SPA will be optimized for both desktop and mobile use, making it convenient for users to access from any device. Overall, the goal of the app is to provide a seamless and convenient experience for both the business and its customers.",
      tech: ["Vue", "BootStrap"],
      externalLink: "https://www.samadhiyogaidaho.com/#/",
      img: "https://cdn.discordapp.com/attachments/1060066788878069891/1060067418073993226/samadhiApp.png",
    },
  ],
  // new
});
