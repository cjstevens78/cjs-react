import React, { Component } from 'react';
import Me from './Images/chris-stevens.png';
import About from './About/About';
import Highlights from './Highlights/Highlights';
import Details from './Details/Details';
import Intro from './Intro/Intro';
import Job from './Job/Job';
import './App.scss';

class App extends Component {

  state = {
    details: [
      {
        availability: "Immediate",
        email: "cjs78@hotmail.co.uk",
        mobile: "07809 758568",
        phone: "01252 641982",
        cvtext: "CV Download",
        cvlink: "april2019"
      }
    ],
    jobs: [
      { id: "current",
        startdate: "March 2019", 
        enddate: "Present", 
        jobtitle: "Front End Web Developer", 
        company: "University of Southampton (NIHR)", 
        location: "Southampton, Hampshire", 
        summary: "I am currently working with the University of Southampton on behalf of the NHS to help roll out a newly designed website for the NIHR (National Institute for Health Research). The work involves the production of templates and component based assets which are integrated into a CMS system called SiteKit.",
        glance1: "Build cross browser and multi device website from supplied designs in Photoshop format.", 
        glance2: "Working with a CMS platform called ‘Site Kit’.", 
        glance3: "Use main skillset of HTML5 / Native Javascript / JQuery / Bootstrap 4 / CSS3 / Photoshop / Invision / CSS Animations inc GSAP / GIT / Bitbucket / Sublime / Mobile First / Responsive", 
        glance4: "Working in a team environment, liaising with designers and developers.", 
        link: "https://www.nihr.ac.uk/",
        imagetitle: "nihr"
      },
      { id: "past",
        startdate: "February 2019", 
        enddate: "March 2019", 
        jobtitle: "Front End Web Developer", 
        company: "Outbound - Channel Agency", 
        location: "Yateley, Hampshire", 
        summary: "Outbound are a Channel Marketing agency working with big brand IT equipment manufacturers such as Hewlett Packard, McAfee, Fujitsu, Canon, AMD and Lexmark. The work involved creating a microsite for McAfee called 'SuperLeague'. The webiste allows sales executives to check their progress on a leaderboard and answer some targeted sales data questions.", 
        glance1: "Build cross browser and multi device website from supplied designs in Adobe XD format.", 
        glance2: "Working in an ASP.Net environment using Visual Studio and VS Code.", 
        glance3: "Use main skillset of HTML5, SASS, Webpack, Babel, React.js, some native JS", 
        glance4: "Working in a team environment, liaising with designers and .Net developers.", 
        link: "https://www.outbound.co.uk/",
        imagetitle: "outbound"
      },
      { id: "pastt",
        startdate: "June 2018", 
        enddate: "February 2019", 
        jobtitle: "Front End Web Developer", 
        company: "Gallagher Communication", 
        location: "Liphook, Hampshire", 
        summary: "Gallagher Communication are a global communications agency based in Liphook, Hampshire. They work with clients such as Husqvarna, Nike, BMW, Newfield, Lifepoint, Penske and AXA to manage their employee communications and benefits. My role there was varied and included the production of stand alone ‘React / Bootstrap 4’ websites, Angular JS ‘core’ based 'Benefit Brochure' sites and HTML email campaigns.", 
        glance1: "Build cross browser and multi device websites from supplied designs in Photoshop, Sketch and InVision formats.", 
        glance2: "Working with a bespoke Angular JS based platform known as ‘Core’. HTML email production using Mailchimp and tested in Litmus.", 
        glance3: "Use main skillset of HTML / CSS / SASS / Javascript / React / Angular JS / GRUNT / NPM / Bower / GIT / Bitbucket / Sublime / CSS Animation / Greensock GSAP / ScrollMagic", 
        glance4: "Working in a scrum team environment, liaising with designers and backend devs.", 
        link: "https://gallaghercommunication.com",
        imagetitle: "newfieldbenefits"
      },
      { 
        id: "pasttt",
        startdate: "April 2018", 
        enddate: "June 2018", 
        jobtitle: "Front End Web Developer",  
        company: "Jaywing Ltd", 
        location: "Newbury, Berkshire", 
        summary: "Jaywing are a full service agency based in Newbury, Berkshire. I worked with them on a new website build for the University of Portsmouth. This was not my first foray into the university sector, having been a part of the project for Sheffield Hallam University a few years back. The site is based on the Sitecore platform and uses Jaywing's bespoke front end framework called 'Atomic' which is loosely based on Foundation.", 
        glance1: "MS Visual Studio 2017 and MS Visual Studio Code (VSCode)", 
        glance2: "Sitecore - including component integration and customisation of the experience editor.", 
        glance3: "GIT, Yarn Package Manager, Node, Webpack, Babel, SASS and JS Lint", 
        glance4: "CSS3 - SASS, Atomic (Foundation), Responsive Grid Mobile First Approach Javascript - Custom Modular Vanilla JS - Similar to Require.js with some ES6 HTML5 - component based with templating via Nunjucks Designs - working from designs provided in Adobe XD CC Project management - Jira Tickets, Agile, Scrum, Daily Standups", 
        link: "https://www.port.ac.uk/",
        imagetitle: "universityofportsmouth"
      },
      { id: "pastttt",
        startdate: "March 2018", 
        enddate: "April 2018", 
        jobtitle: "Front End Web Developer",  
        company: "21Six Ltd", 
        location: "Fair Oak, Hampshire", 
        summary: "21Six is a full service agency based in Fair Oak, Hampshire. Due to rapid growth, 21Six needed an experienced FE dev who could ‘hit the ground running’ to handle some urgent web development work. The brief was to take the current website for the 'Aviator' hotel in Farnborough and port it from 'Cobalt CMS' to 'Wordpress' whilst retaining the existing design and content and making that design fully responsive. I achieved this by creating a series of Wordpress templates that used Boostrap 4 as a front end framework and Advanced Custom Fields (ACF) to allow users to edit the pages. The site is now live, click below to view.", 
        glance1: "Wordpress, Advanced Custom Fields, PHP, MAMP, Twig/Timber", 
        glance2: "HTML5, CSS3, SASS, Javascript, JQuery, Bootstrap 4", 
        glance3: "Photoshop, Sketch", 
        glance4: "NPM, Grunt, Webpack, GIT, Bitbucket and Handlebars JS.", 
        link: "http://www.aviatorbytag.com",
        imagetitle: "aviatorhotel"
      },
      { id: "pasttttt",
        startdate: "August 2017", 
        enddate: "March 2018", 
        jobtitle: "Front End Web Developer",  
        company: "Haymarket Media Group", 
        location: "Twickenham", 
        summary: "Haymarket media are a large media company who operate over 70 magazine and web based brands. The role primarily involved the creation of new UI modules for their online magazines such as <a href='https://www.stuff.tv' target='_blank'>STUFF</a>, <a href='https://www.classicandsportscar.com' target='_blank'>Classic and Sports Car</a>, <a href='https://www.fourfourtwo.com' target='_blank'>Four Four Two</a> and <a href='https://www.whathifi.com' target='_blank'>What Hi-Fi?</a>. I worked as part of a team in an Agile Kanban Scrum environment via Jira with a Drupal 7/8 CMS. Each site differed slightly in its approach so i had to call on my wide ranging experience with a variety of skills in, Sublime 3, Vanilla Javascript/JQuery, Sass, NPM, Compass, GRUNT/GULP, Bourbon, Neat, Bootstrap 4, Git, SSH, Putty, Bitbucket, Twig PHP, InVision for designs, virtual machines via Virtual box, Vagrant and Docker.", 
        glance1: "Drupal 7/8 with Twig PHP", 
        glance2: "HTML5 / Pre-processed CSS3 using SASS / Task runners and CLI / Javascript ECMA2015+ and JQuery / GIT source control", 
        glance3: "Working in an Agile team with Drupal devs, testers, PM's, UX designers", 
        glance4: "Large scale high traffic websites", 
        link: "https://www.classicandsportscar.com/",
        imagetitle: "classicandsportscar"
      },
      { id: "pastttttt",
        startdate: "January 2017", 
        enddate: "July 2017", 
        jobtitle: "Front End Web Developer",  
        company: "Supermassive Games", 
        location: "Guildford, Surrey", 
        summary: "Supermassive Games have produced some leading games for the Sony label including Until Dawn, Little Big Planet and Killzone. I worked in a game development team as the sole UI resource. During my time there I worked on three new games <a href='https://www.playstation.com/en-gb/games/hidden-agenda-ps4/' target='_blank'>Hidden Agenda</a> (playlink), <a href='https://www.playstation.com/en-gb/games/the-inpatient-ps4/' target='_blank'>The Inpatient</a> (VR) and <a href='https://www.playstation.com/en-gb/games/bravo-team-ps4/' target='_blank'>Bravo Team</a> (VR). I used a UI system called Coherent UI to create complex interactive in-game UI components using HTML5, CSS3 animations, SASS and Javascript. This assignment was a very enjoyable learning curve and the change of industry and challenges presented by working in Unreal Engine 4 and Coherent UI proved that I can port my core skillset to the most unlikely of environments.", 
        glance1: "Adapt web development skills to working in a C++ Unreal Engine 4 environment Coherent UI – understanding its limitations and working around issues", 
        glance2: "HTML5 Javascript and JQuery Pre-processed CSS3 using SASS CSS3 animations and transitions", 
        glance3: "Perforce source control PS4 development launching and testing", 
        glance4: "Working in a highly confidential environment", 
        link: "https://www.supermassivegames.com/",
        imagetitle: "supermassive"
      },
      { id: "pasttttttt",
        startdate: "August 2016", 
        enddate: "December 2016", 
        jobtitle: "Front End Web Developer",  
        company: "Cigna UK", 
        location: "Southwark, London", 
        summary: "Cigna is a global organisation providing Employee Health insurance and Lifestyle Management products to Businesses. The team I worked in was small and agile and I was the sole Web Developer. We worked on the production of a new website which surveys employee's lifestyles and recommends changes that they can make to improve their stress levels, sleep patterns etc. The project had a Microsoft ASP.Net back end with a Front End setup of HTML 5, CSS3, Bootstrap, Mobile First Responsive, SASS and Javascript. The project was also multi-lingual and required adaptation for RTL languages. On a daily basis I worked closely with a graphic designer and group of back end developers to build and incorporate pages and changes into the development website. I also managed a list of BAU tasks assigned to me via TFS which related to the main website cignawellbeing.com.", 
        glance1: "HTML5 using Modernizr for feature detection & polyfills for a consistent experience cross browser back to IE8.", 
        glance2: "Bootstrap framework for rapid, mobile first development. Pre-processed CSS3 using SASS (config, partials, vars, mixins & media queries).", 
        glance3: "Bespoke Javascript in native format and using the JQuery library.", 
        glance4: "Multi language versions including RTL. Learning the REACT Javascript Library.", 
        link: "http://www.cignawellbeing.com",
        imagetitle: "cigna"
      },
      { id: "pastttttttt",
        startdate: "December 2015", 
        enddate: "August 2016", 
        jobtitle: "Front End Web Developer",
        company: "Pharmiweb Solutions", 
        location: "Bracknell, Berkshire", 
        summary: "Pharmiweb Solutions are a web agency providing bespoke solutions to the Pharmaceutical sector. They work with companies such as GSK, ViiV Healthcare, Bristol-Myers Squibb and Nutricia. I worked within a close Agile team using a JIRA ticket system. I worked primarily on iPad only Javascript heavy presentations known as DVA's (Digital Visual Aids). I also built HTML emails which were loaded into a custom mail out tool and tested using Litmus and Putsmail.", 
        glance1: "HTML5 using Modernizr for feature detection &amp; polyfills. Pre-processed CSS3 using SASS", 
        glance2: "Use of an in-house custom set of Javascript functions.", 
        glance3: "Heavy usage and data manipulation of SVG files", 
        glance4: "JSLint and CSSLint and GRUNT Taskrunner.", 
        link: "https://www.pharmiwebsolutions.com",
        imagetitle: "pharmiweb"
      },
      { id: "pasttttttttt",
        startdate: "November 2015", 
        enddate: "December 2015", 
        jobtitle: "Front End Web Developer",  
        company: "Agent3", 
        location: "London Bridge, London", 
        summary: "Agent3 is a digital marketing agency based at London Bridge. I built a new website from scratch to show off a new product called 'Insight 3' using supplied Photoshop designs. I used my standard skillset of HTML5 / CSS3 / SASS / JQUERY / Photoshop. Taking a mobile first approach, I chose Yeoman to scaffold the app, Bootstrap for the framework, GRUNT for task running, GIT for source control and Bower for dependencies.", 
        glance1: "HTML5, CSS3, SASS, Sublime", 
        glance2: "Javascript, JQuery, JSON, JSLint", 
        glance3: "Bootstrap, Photoshop ,Chrome Dev Tools, Responsive", 
        glance4: "GIT, GRUNT, Source Tree, Yeoman, Bower", 
        link: "https://www.agent3.com/",
        imagetitle: "agent3"
      },
      { id: "pastttttttttt",
        startdate: "October 2015", 
        enddate: "November 2015", 
        jobtitle: "Front End Web Developer",  
        company: "Precedent Communications Limited", 
        location: "Curtain Road, London", 
        summary: "Precedent are a digital agency based in London. This was my second visit to Precedent, where I was given a build project for Sheffield Hallam University. I used supplied PSD's and wireframes to build a set of templates from scratch. Taking a mobile first approach, I used Yeoman to scaffold the project used GRUNT, GIT, SASS, JQUERY, Bourbon and NEAT to build a fully responsive cross browser web app. It was later handed off for integration into a Sitecore solution.", 
        glance1: "HTML5, CSS3, SASS, Bourbon, Neat, Sublime, Javascript, JQuery, JSON", 
        glance2: "Visual Studio, ASP.NEt, MS Sitecore, IIS", 
        glance3: "Photoshop, Chrome Dev Tools", 
        glance4: "GIT, Source Tree, Jira", 
        link: "https://www.shu.ac.uk",
        imagetitle: "shu"
      },
      { id: "pasttttttttttt",
        startdate: "September 2015", 
        enddate: "October 2015", 
        jobtitle: "Front End Web Developer",  
        company: "Ego Creative", 
        location: "Ewshot, Surrey", 
        summary: "Ego Creative is an Agency based in a converted pub on the Surrey/Hampshire border. They asked me to come in on a short term contract to work on building a new website for their financial services client 'West One Loans' who provide bridging loans. The role involved converting PSD designs into a master asset file for later integration into Wordpress. I built it from scratch using a supplied framework and the following: PSD designs, HTML5, CSS3, SASS, BEM, GIT via Tower, MAMP, Formstack, Bower, Bourbon, Neat, JQuery, Sublime, Transitions, Responsive, Media Queries, Mobile First, Browserstack, Google Analytics, BugHeard bug tracking, MAC OSX.", 
        glance1: "", 
        glance2: "", 
        glance3: "", 
        glance4: "", 
        link: "http://www.westoneloans.co.uk",
        imagetitle: "westoneloans"
      },
      { id: "pastttttttttttt",
        startdate: "September 2015", 
        enddate: "September 2015", 
        jobtitle: "Front End Web Developer",  
        company: "Precedent Communications Limited", 
        location: "Curtain Road, London",
        summary: "Precedent is a multi-national agency based in the shoreditch area of London. This was a short term contract to provide cover for a Front End Dev who had been in an accident. I worked on the front end of a Sitecore project using HTML5, CSS3, JQuery and SASS with Mixture and GIT via SourceTree. I worked through a batch of Jira bugs, mostly relating to responsive issues requiring multi device testing via emulators and localised tools. The role involved bug triage and assessment, dealing with back end devs, a Project Manager and another Front End Developer.", 
        glance1: "", 
        glance2: "", 
        glance3: "", 
        glance4: "", 
        link: "http://www.precedent.com",
        imagetitle: "precedent"
      },
      { id: "pasttttttttttttt",
        startdate: "August 2015", 
        enddate: "September 2015", 
        jobtitle: "Front End Web Developer", 
        company: "eTeach Limited", 
        location: "Camberley, Surrey", 
        summary: "Eteach is an online education recruitment company offering a bespoke vacancy service to teachers and schools in the UK and International markets. I worked as part of the online marketing team as the main Front End Web Development resource. I worked closely with team leads, designers and back-end Microsoft developers to enhance and maintain the company’s range of recruitment websites and recruiter tools.", 
        glance1: "", 
        glance2: "", 
        glance3: "", 
        glance4: "", 
        link: "https://www.eteach.com/",
        imagetitle: "eteach"
      },
      { id: "pastttttttttttttt",
        startdate: "March 2015", 
        enddate: "August 2015", 
        jobtitle: "Front End Web Developer",
        company: "Pharmiweb Solutions", 
        location: "Bracknell, Berkshire", 
        summary: "Pharmiweb Solutions are a web agency providing bespoke solutions to the Pharmaceutical sector. They work with companies such as GSK, ViiV Healthcare, Bristol-Myers Squibb and Nutricia. I worked within a close Agile team using a JIRA ticket system. I worked primarily on iPad only Javascript heavy presentations known as DVA's (Digital Visual Aids). I also built HTML emails which were loaded into a custom mail out tool and tested using Litmus and Putsmail.", 
        glance1: "", 
        glance2: "", 
        glance3: "", 
        glance4: "", 
        link: "https://www.pharmiwebsolutions.com",
        imagetitle: "pharmiweb"
      },
      { id: "pasttttttttttttttt",
        startdate: "August 2011", 
        enddate: "February 2015", 
        jobtitle: "Front End Web Developer", 
        company: "O2 Telefonica", 
        location: "Slough, Berkshire", 
        summary: "I was originally contracted to <strong>O2 Telefónica</strong> in Slough in 2011, tasked with the UI development on their new Business Shop. I then moved onto various other projects such as iPhone releases, the 4G product release, an in-store fast track upgrade system and two SMB customer portals. In early 2014 the business shop was over-hauled with a series of new interfaces and a re-designed product builder and I handled the front end development work on the project. The business shop runs on the cloud based ‘SalesForce’ platform and I worked with both in-house and off shore development teams. I used skills in ‘Apex’ Code, hand coded HTML5, CSS3, SASS, Native JavaScript, JQuery, JSON, XML, Photoshop, SVN &amp; Jira.", 
        glance1: "", 
        glance2: "", 
        glance3: "", 
        glance4: "", 
        link: "https://businessshop.o2.co.uk",
        imagetitle: "o2"
      },
      { id: "pastttttttttttttttt",
        startdate: "October 2010", 
        enddate: "August 2011", 
        jobtitle: "Front End Web Developer", 
        company: "Sapient at Vodafone", 
        location: "Newbury, Berkshire", 
        summary: "I worked on contract for <strong>Sapient</strong> (Number 1 Agency on NMA Top 100 Agencies List 2010) and was based on site in Newbury with their large telecommunications client <strong>Vodafone</strong>. I worked as part of a sprint team as the front end web development resource. The work involved working closely with other Developers, IA's and Designers. I followed supplied wireframes and designs to produce batches of semantic, standards compliant code for integration into the main <a href='http://www.vodafone.co.uk' target='_blank'>Vodafone website</a>. I was also tasked with day to day updates and amends which were entered into the ATG based content management system.", 
        glance1: "", 
        glance2: "", 
        glance3: "", 
        glance4: "", 
        link: "http://www.vodafone.co.uk/",
        imagetitle: "vodafone"
      }
    ]
  }

  render () {
    return (
      <div className="App container-full">
        <header className="row">
          <Details
            availability={this.state.details[0].availability}
            email={this.state.details[0].email}
            mobile={this.state.details[0].mobile}
            phone={this.state.details[0].phone}
            cvtext={this.state.details[0].cvtext}
            cvlink={this.state.details[0].cvlink}
            />
        </header>
        <div className="row row-type-1">
          <div className="col-sm-4 pt-4 pb-4 pr-4">
            <img src={ Me } className="img-fluid" alt="Chris Stevens - Web Developer" />
          </div>
          <div className="col-sm-8 p-4 intro">
            <Intro />
          </div>
        </div>
        <Highlights />
        <div className="row row-type-2 about">
          <div className="col-12 text-center type-header">
            <h2>About this website:</h2>
          </div>
          <div className="col-sm-6 mt-4 mb-4 pb-2 pt-2">
            <About />
          </div>
          <div className="col-sm-6 mt-4 mb-4 pb-2 pt-2 text-center">
            <i className="fab fa-react"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-npm"></i>
            <i className="fab fa-yarn"></i>
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3"></i>
            <i className="fab fa-sass"></i>
            <i className="fab fa-bootstrap"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-font-awesome"></i>
          </div>
          <div className="col-12 text-center">
          <a href="https://github.com/cjstevens78/cjs-react" className="btn btn-light" value="Download from GitHub">Download from GitHub <i className="fab fa-github"></i></a>
          </div>
        </div>
         <div className="row row-type-3">
          <div className="col-12 text-center type-header">
            <h2>Code examples:</h2>
          </div>
          <div className="col-12 col-sm-6 text-center pt-4 pb-4">
            <p>info about code examples</p>
          </div>
          <div className="col-12 col-sm-6 text-center pt-4 pb-4">
            <ul>
              <li><a href="#">Link out to codepen</a></li>
              <li><a href="#">Link out to codepen</a></li>
              <li><a href="#">Link out to codepen</a></li>
              <li><a href="#">Link out to codepen</a></li>
            </ul>
          </div>
        </div>
        <div className="row row-type-4">
          <div className="col-12 text-center type-header">
            <h2>Recent Contracts:</h2>
          </div>
          <div className="col-12 jobs">
            <div className="col-sm-6">
              <Job jobdata={this.state.jobs[0]} />
            </div>
            <div className="col-sm-6">
              <Job jobdata={this.state.jobs[1]} />
            </div>
          </div>
        </div>
        <div className="row row-type-3">
          <div className="col-12 text-center type-header">
            <h2>More Contracts:</h2>
          </div>
          <div className="col-12 jobs-sub">

            {this.state.jobs.slice(2).map(job => {
              return <div className="col-sm-4"><Job jobdata={job} key={job.id} /></div>
            })}
            
          </div>
        </div>
        <div className="row row-type-3">
          <div className="col-12 text-center type-header">
            <h2>There's lots more back to 1999..</h2>
          </div>
          <div className="col-12 text-center pt-4 pb-4">
            <a href="/documents/chris_stevens_webdev_contract_DOC_april2019.docx" className="btn btn-primary" value="Download my CV">Download my CV <i className="fas fa-file-word ml-2"></i></a>
          </div>
        </div>
        <footer className="row">
          <Details 
            availability={this.state.details[0].availability}
            email={this.state.details[0].email}
            mobile={this.state.details[0].mobile}
            phone={this.state.details[0].phone}
            cvtext={this.state.details[0].cvtext}
            cvlink={this.state.details[0].cvlink}
            />
        </footer>
      </div>
    );
  }
}

export default App;
