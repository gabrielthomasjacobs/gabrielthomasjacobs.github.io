export const projects = [
  {
    id: 1,
    title: 'Search Interface',
    description: `This is the main interface for our product, so users can search and find results. 
    It's a complex MPA that uses a lot of different technologies including AngularJS, Angular, and Vue.`,
    thumbnail: 'navigo',
    timeRange: 'Mar 2018 - Ongoing',
    stack: ['AngularJS', 'Angular', 'Vue 2.x', 'TypeScript'],
    expandedSummary: {
      contribution: 'Maintenence and major feature additions.',
      challenges: `This application has a vast amount of features, many of which are written in AngularJS. Additionally, the target is ES5, so many newer JS features are not available and must be polyfilled or avoided.`,
      state: `This application is maintained and shipped with our core offerings. It's TBD ( To Be Deprecated ) once the new Search Interface is operational.`,
    },
  },
  {
    id: 2,
    title: '*Mostly* Deprecated Management Interface',
    description: 'A complex MPA for managing the indexing application.',
    thumbnail: 'manage',
    timeRange: 'Mar 2018 - Ongoing',
    stack: ['Angular', 'AngularJS', 'TypeScript'],
    expandedSummary: {
      contribution: 'Maintenence and minor feature additions.',
      challenges: 'This application is largely deprecated with only a few features remaining to be ported.',
      state: 'This application is maintained and shipped with our core offerings.',
    },
  },
  {
    id: 3,
    title: 'Management Interface',
    description: 'A complex MPA for managing the indexing application.',
    thumbnail: 'hq',
    timeRange: 'Mar 2018 - Ongoing',
    stack: ['Angular', 'TypeScript'],
    expandedSummary: {
      contribution: 'Maintenence and major feature additions.',
      challenges: `This application has a vast amount of features, so keeping everything organized and performant is critical.`,
      state: 'This application is maintained and shipped with our core offerings.',
    },
  },
  {
    id: 4,
    title: 'Voyager Integration with Esri',
    description: `Esri is a company that provides GIS software and services. 
    Because many of our customers use Esri's products, we wanted to create a way for them to use our search interface within their GIS software; specifically "ArcGIS Pro" and "ArcMap".`,
    link: '',
    thumbnail: 'arcgis',
    timeRange: 'Apr 2019 - Feb 2021',
    stack: ['N/A'],
    expandedSummary: {
      contribution: 'I led the planning, design, and was the product owner for this integration.',
      challenges: 'As with any integration, matching the existing look and feel of the software and addressing the holes in the SDK was a challenge.',
      state: 'The addins are publicly available on the ArcGIS Marketplace as well as our public downloads page.',
    },
  },
  {
    id: 5,
    title: 'Analytics Dashboard',
    description: 'A simple and interactive interface for displaying analytics about the system.',
    thumbnail: 'pulse_dashboard',
    timeRange: 'June 2021 - Ongoing',
    stack: ['Vue', 'Vite', 'TypeScript'],
    expandedSummary: {
      contribution: `Authored a few components to visualize data, such as charts and tables, and then created a dashboard using these components.
      This dashboard is used by our customers to monitor the health of their system.`,
      challenges: `One of the requirements was to allow the same data to be rendered in several different ways (e.g. a table or a chart). 
      Abstracting the data layer to allow for this was a great learning experience.`,
      state: 'Project was a success and is included in our offerings.',
      final: `This project was my introduction to Vue and I think it's definitely one of the best frameworks for building quick and efficient apps.`,
    },
  },
  {
    id: 6,
    title: 'Downloads UI',
    description: 'A product downloads page, built in React, that dynamically populates from server information.',
    thumbnail: 'download',
    timeRange: 'Dec 2022 - Jan 2023',
    stack: ['React', 'Vite', 'TypeScript'],
    expandedSummary: {
      contribution: 'I designed and authored this SPA.',
      challenges: `The API feeds a list of products that include different versions and platforms.
      I had to make sure to present these options in a concise way while maintaining a similar functionality as our deprecated products page.`,
      final: null,
      state: 'Project was a success and is now serving customers.',
    },
  },
  {
    id: 7,
    title: 'Grafana-Zendesk Plugin',
    description: 'A Grafana plugin that allows users to query and import Zendesk ticket information.',
    link: 'https://github.com/gabrielthomasjacobs/grafana-zendesk-plugin/',
    linkText: 'See project on GitHub',
    thumbnail: 'grafana',
    timeRange: 'March 2023 - Ongoing',
    stack: ['Go', 'React', 'TypeScript'],
    expandedSummary: {
      contribution: `I authored this plugin using community resources as reference. 
        I used the Grafana web components as a base for the UI. 
        As this was my first time authoring Go code, it required a lot of documentation referencing.`,
      challenges: `Not only was this my first time using Go, but also doing fullstack, so bouncing between the front and back end was a new challenge.`,
      state: 'This plugin is currently available on my GitHub and is under review with the Grafana team to be published in the community listing.',
      final: 'I had a lot of fun learning Go and building this plugin. I\'m looking forward to using Go more in the future.',
    },
  },
  {
    id: 8,
    title: 'Vue Web Component Library',
    description: 'A responsive web component library built in Vue.',
    thumbnail: 'components',
    timeRange: 'May 2022 - Ongoing',
    stack: ['Vue3', 'Vite', 'TypeScript'],
    expandedSummary: {
      contribution: `I oversaw all frontend aspects of this project including planning, designing, developing, and testing. 
      Additionally I created a SPA that uses the components. This SPA is used both as a reference for other developers and will become a replacement for our Search Interface.`,
      challenges: `This project needed a lot of planning to ensure that the components were flexible enough to be used both internally and externally.
      Things like theming, accessibility, and responsiveness were all important to consider.`,
      state: `The components are still under development, with a lot of the groundwork laid. There will be minor changes required as the backend is fully fletched out.`,
      final: `I was given a lot of freedom on the design of the components, which was a great experience.`,
    },
  }
]