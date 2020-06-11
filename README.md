[![Build Status](https://travis-ci.org/santosfrancisco/gatsby-starter-cv.svg?branch=master)](https://travis-ci.org/santosfrancisco/gatsby-starter-cv)
[![GitHub version](https://badge.fury.io/gh/santosfrancisco%2Fgatsby-starter-cv.svg)](https://badge.fury.io/gh/santosfrancisco%2Fgatsby-starter-cv)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Mickell Crawford CV
</h1>



## 📷 Preview

### Mobile

![Preview mobile](./preview-mobile.gif)

### Desktop

![Preview desktop](./preview-desktop.gif)

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```sh
    # create a new Gatsby site using the default starter
    npx gatsby new my-default-starter https://github.com/santosfrancisco/gatsby-starter-cv
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-default-starter/
    npm run develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    \_Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).\_

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

1. **Generate production build**

  That command will generate a production build on _public_ folder
  ```sh
    npm run build
  ```

## Configuration

Update the configuration file with your data. The configuration file is in ```data/siteConfig.js```

:warning: NOTE: Please change googleAnalyticsId to your ID.  See https://analytics.google.com for details.

> **Skills** is a set of your personal skills and their respective levels ranging from > 0 to 100.
> **jobs** is a set of your work experiences

```js
module.exports = {
  siteTitle: 'Mickell Crawford',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  authorName: 'Mickell Crawford',
  githubUsername: 'mickell1',
  authorAvatar: '/images/mickellselfie.jpg',
  authorDescription: `I'm a full stack Javascript engineer & consultant. I use Agile methods to help build digital products, teams and systems.<br />
  I have 6 years experience working in the technology secotor, this includes: software development, consultancy, finance, hospitality field engineer and tech support. Also Professional Scrum master certifield(PSM1) <br />
  I currently work as a frontend developer and mainly work with <strong>React, Javascript, CSS/SASS,     Typescript  & Jest.</strong>`,
  skills: [
    {
      name: 'React',
      level: 80
    },
    {
      name: 'Javascript',
      level: 70
    },
    {
      name: 'CSS/SASS',
      level: 70
    },
    {
      name: 'NodeJs',
      level: 50
    },
    {
      name: 'Typescript',
      level: 40
    },
    {
      name: 'Jest/Enzyme',
      level: 70
    },
    {
      name: 'Git',
      level: 70
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
      description: `Key Responsibilities:
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
    /* ... */
  ],
  portifolio: [
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Gatsby starter CV template",
      url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "Responsive grid for ReactJS",
      url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
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
      label: 'Mickell Crawford',
      url: '/',
    }
  ]
}

```
