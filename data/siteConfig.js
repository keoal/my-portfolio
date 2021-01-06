module.exports = {
  siteTitle: 'Alan Keogh - Web Developer',
  siteDescription: `Online curriculum vitae`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Alan Keogh',
 //twitterUsername: 'Keoal',
 githubUsername: 'Keoal',
 authorAvatar: '/images/avatar.jpeg',
 authorDescription: `Web Developer with a passion for Drupal and front end technologies with ten years of experience, other interests include React & Gatsby `,
 skills: [
  {
    name: 'HTML',
    level: 90
  },
  {
    name: 'CSS',
    level: 90
  },
  {
    name: 'Javascript',
    level: 60
  },
  {
    name: 'Drupal 7',
    level: 90
  },
  {
    name: 'Drupal 8',
    level: 70
  },
  {
    name: 'React',
    level: 40
  },
  {
    name: 'Git',
    level: 70
  },
  {
    name: 'PHP',
    level: 50
  },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Novartis",
      begin: {
        month: 'Oct',
        year: '2019'
      },
      duration: '1 yr',
      occupation: "Technical Design Expert",
      description: "I was part of the Platform team, involved in the development and planning of a core distribution for Drupal sites and also the analysis & planning for transition of 250 sites from Epi Server to Drupal. I also Initiated the Design Authority for Drupal to ensure consistency across products in the future. I was also responsible for enabling onboarding & access for development teams and quality assurance across the Drupal products.",   
    },  {
      company: "Irish Life",
      begin: {
        month: 'Sep',
        year: '2013'
      },
      duration: '6 yr',
      occupation: "Digital Specialist/Web Developer",
      description: "As part of the Digital Team my role was as a full stack developer on the Drupal framework. I was responsible for the development and design of the Drupal sites along with other features such as online quote calculators, google map features and custom Drupal modules. I was also responsible for the maintenance of the Drupal sites and their databases.",
  
    }, {
      company: "Canada Life",
      begin: {
        month: 'May',
        year: '2008'
      },
      duration: '5 yr',
      occupation: "eBusiness Specialist/Web Developer",
      description: "Responsible for the design, development, maintainance and on-page SEO for the canadalife.ie website and various micro-sites, these sites were developed using HTML, CSS, Javascript, jQuery, & PHP. Front-end development & user interface for new group pension scheme sites. Design, development and implementation of content management system for sales agent personal websites. Management of content for the Canada Life eCentre (broker portal) using Stellent content server. Canada Life eCentre: Specifying changes needed for new sections of the site and building new pages in Websphere and carrying out testing.",
    }, 
  ],
 portifolio: [
    {
      //image: "/images/investment-hub.png",
      description: "Investment Hub",
      url: "#"
    },
    {
      //image: "/images/hammond.png",
      description: "Hammond Solicitors",
      url: "https://www.hammond.ie"
    },
    {
      //image: "/images/greenes-florists.png",
      description: "Greenes Florists",
      url: "https://www.greenesflorists.ie"
    },
    /* more portfolio items here */
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/santos-francisco",
    github: "https://github.com/santosfrancisco",
    email: "yoshi.df@gmail.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: false, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    }
  ]
}