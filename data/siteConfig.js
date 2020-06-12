module.exports = {
  siteTitle: 'Mickell Crawford',
  siteDescription: `Mickell's portfolio`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Mickell Crawford',
  githubUsername: 'mickell1',
  authorAvatar: '/images/mickellselfie.jpg',
  authorDescription: `I'm a full stack Javascript engineer & consultant. I use Agile methods to help 
  build digital products, teams and systems.
  I have 6 years experience working in the technology secotor, this includes: software development, 
  consultancy, finance, hospitality field engineer and tech support. Also Professional Scrum master certifield(PSM1)
  I currently work as a frontend developer and mainly work with 
  <strong>React, Javascript, CSS/SASS, Typescript  & Jest.</strong>`,
  skills: [
    {
      name: 'React',
      level: 80
    },
    {
      name: 'Javascript',
      level: 75
    },
    {
      name: 'CSS/SASS',
      level: 75
    },
    {
      name: 'NodeJs',
      level: 55
    },
    {
      name: 'Typescript',
      level: 50
    },
    {
      name: 'Styled cmponents',
      level: 65
    },
    {
      name: 'Jest/Enzyme',
      level: 70
    },
    {
      name: 'Git',
      level: 75
    }
  ],
  jobs: [
    {
      company: "Secret Escapes",
      begin: {
        month: 'Sep',
        year: '2019'
      },
      duration: null,
      occupation: "Frontend developer",
      description: `Key Responsibilities:\n\n
      
        Frontend engineer, Agile working, built various new and reusable components in component library,
        Built two types of grids that displayed holiday sales and was shown on the homepage
        Implemented code review template and guidelines to improve development process
        Techstack: React, Typescript JavaScript, HTML,GraphQL, Styled Components, TDD, Storybook, SCSS
        Key Achievements:
        Implemented new code review template for all tech teams
        Conducted analysis using Google rail technique which led to performance improvements on the website
        `
  
    }, {
      company: "AND Digital",
      begin: {
        month: 'Sep',
        year: '2017'
      },
      duration: '2 yrs',
      occupation: "Software Developer - Associate",
      description: `Key Responsibilities:

        Full-stack Javascript Engineer & Consultant, use Agile methods to help build digital products, teams and systems
        Created new reusable React components which was used across development team
        Implemented styling using SCSS & CSS and suggested more user friendly features
        Build web application to manage employees; add/edit employees, search functionality, API calls to get required data
        Build monolith application; microservices, updating microservice template & skeleton
        Back end development for PSD2 and Open Banking product that enables consent management and compliance
        Integrated various new web functionality such as filtering status, course list, creation of course form and styling
        External Clients: Premier Inn (Whitbread / Hospitality), Konsentus (Fintech / Open Banking), ANDDigital (Digital consultancy)
        Techstack: React, Redux JavaScript, HTML, Node, Docker, AWS
        MySQL & Mongo DB, TDD, Storybook, SCSS

        Key Achievements:
        Joined AND Digital and became professional scrum master certified, since achieving this certification I have been scrum master/developer for our development team
        Facilitation of stand ups, sprint refinements, sprint reviews, sprint retrospectives and sprint planning and other events
        Implemented new TDD/BDD testing format to make tests and documentation clearer
        `
    }, 
    {
      company: "J.P.Morgan",
      begin: {
        month: 'Jun',
        year: '2016'
      },
      duration: '3 mon',
      occupation: "Technology Analyst",
      description: `Key Responsibilities:
        Designed and built a website portal that was accessible by all J.P.Morgan staff, which involved organising co-design sessions and utilised Sharepoint, HTML, CSS & Javascript
        Led a group of fellow summer analysts in the production of a marketing video. Post production utilised Adobe Premier Pro & After Effects
        Wrote a blog on the importance of user involvement in software design/ development`
    },
    {
      company: "PTS Consulting - Partnership Education",
      begin: {
        month: 'Nov',
        year: '2012'
      },
      duration: '3 yrs & 6 mons',
      occupation: "Systems Engineer",
      description: ""
  
    },
  ],
  portifolio: [
    {
      image: "/images/mickell-portfolio.png",
      description: "Mickell Crawford Portfolio Page",
      url: "https://github.com/mickell1/MickellCrawford-Portfolio"
    },
    {
      image: "/images/react-shopping.gif",
      description: "React Shopping Cart",
      url: "https://github.com/mickell1/React-Shopping-Cart"
    },
    /* more portifolio items here */
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/mickcraw/",
    github: "https://github.com/mickell1",
    email: "mickellcrawford@gmail.com"
  },
  siteUrl: 'https://github.com/mickell1/Mickell-Portfolio',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Projects',
      url: '/portifolio',
    }
  ]
}