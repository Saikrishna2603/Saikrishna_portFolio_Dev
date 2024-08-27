/* Change this file to get your personal Porfolio */
import splashAnimation from "./assests/lottie/splashAnimation.json";
// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000, // Set animation duration as per your animation
};

//SEO Related settings
const seo = {
  title: "Saikrishna's Portfolio",
  description:
    "I'm a motivated professional who consistently finds satisfaction in developing comprehensive solutions that construct impactful, scalable, and long-lasting business solutions.",
  og: {
    title: "Saikrishna Madala Portfolio",
    type: "website",
    url: "http://Saikrishna.com/",
  },
};

//Home Page
const greeting = {
  title: "Hi all, I'm Saikrishna.",
  logo_name: "Saikrishna Madala",
  nickname: "Sai",
  subTitle:
    "I'm a motivated professional who consistently finds satisfaction in developing comprehensive solutions that construct impactful, scalable, and long-lasting business solutions.",
  resumeLink:
    "https://docs.google.com/document/d/1029v7uD2a7UYlZWLhrAjULtzUAF_-zUd/edit?usp=sharing&ouid=109423073263715850298&rtpof=true&sd=true",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // linkedin: "www.linkedin.com/in/sai2603",
  // gmail: "saikrishna26031998@gmail.com",
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sai2603/", //
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:saikrishna26031998@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Software  Engineer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Responsible for developing responsive website front end using React, Angular, HTML, CSS, Javascript.",
        "⚡ Developing backend applications using Java, SpringBoot, and MySQL",
        "⚡ Deployed the developed application from local environment to higher environments using Jenkin jobs.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "devicon:angular",
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java",
          style: {
            color: "#61DAFB",
            width: "1.2em",
            height: "1.2em",
          },
        },

        {
          skillName: "SpringBoot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#00ad3d",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "mdi:github",
          style: {
            color: "black",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "devicon:jenkins",
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/NoobCoder3012/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sreyas Institute of Engineering and Technology",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "clg_logo.png",
      alt_name: "Sreays_Hyd",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Java, DBMS, Data Structures, Algorithms, Design Patterns, Operating Systems etc.",
        "⚡ Apart from this, I have atended the tech drive on Hackathon, IoT, and Full Stack Development.",
        "⚡ Developed the mini and major projects based on IoT. Developed this projects to address real-time scenarios.",
        "⚡ Developed the mini project named Real-Time Public Transport Tracking System. Which sends notifications to the users when the busses are approaching them based on the radius point.",
        "⚡ Developed the major project named Smart Irrigation using IoT. Which updates data like the moist content and number of hours the water pumped, and also sends suggestion notification based on the weather report.",
      ],
      responsibiletes: [],
      website_link: "https://sreyas.ac.in/",
    },
    {
      title: "Auburn University At Montgomery",
      subtitle: "M.S. in Computer Science",
      logo_path: "Uni_logo.png",
      alt_name: "Aum_US",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ I have studied Advanced software engineering subjects like SQL , Computer Architecture , Theory of Computations and Data Structures.",
        "⚡ Apart from this, I took major courses in cloud computing and I was introduced to AWS and also achieved AWS Cloud practitioner certificate with those skills",
        "⚡ Also gained knowledge in Networking Systems  & Front-end Development.",
        "⚡ And as part of my own I have completed Datastructures certificate.",
      ],
      responsibiletes: [],
      website_link: "https://www.aum.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Amazon Cloud Practitioner",
      subtitle: "",
      logo_path: "Aws.png",
      certificate_link:
        "https://cp.certmetrics.com/amazon/en/public/verify/credential/ZHYCQNT141V4Q3GQ",
      alt_name: "",
      color_code: "#00000099",
    },
    {
      title: "Salesforce Adminstrator",
      subtitle: "",
      logo_path: "SfdcAdmin.png",
      certificate_link: "https://www.salesforce.com/trailblazer/skrishna110",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: " FreeCodeCamp Javascript Algorithms and DataStructures",
      subtitle: "",
      logo_path: "codecamp.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/fcc141a0164-1b24-485a-94cd-3656293e38a6/javascript-algorithms-and-data-structures",
      alt_name: "",
      color_code: "#090921",
    },

    {
      title: "Java Basic Certification",
      subtitle: "",
      logo_path: "hacker.png",
      certificate_link: "https://www.hackerrank.com/certificates/13ccee00889d",
      alt_name: "",
      color_code: "#090921",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "As a Java Software Engineer, I have gained knowledge on various technologies along with extensive experience working with both evolving startups and well-established companies. My expertise spans across various domains, including software design, and development.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer - FullTime",
          company: "Cognizant",
          company_url: "https://www.cognizant.com/us/en",
          logo_path: "Cognizant.png",
          duration: "August 2023 - Present",
          location: "Remote, United States",
          description:
            "As a Java Developer worked on Amazon logistics project that involved front-end development utilizing CSS3, HTML5, and JavaScript. " +
            "The Model View Controller (MVC) architecture of the Spring Framework was utilized in the development of the application, using RESTful services to integrate and exchange the data to perform all CRUD functionalities, as well as complicated SQL queries and backend SQL procedures for the login module.",
          color: "#0879bf",
          responsibiletes: [],
        },
        {
          title: "Software Engineer - FullTime",
          company: "Genpact",
          company_url: "https://www.genpact.com/",
          logo_path: "Genpact.png",
          duration: "November 2018 - May 2022",
          location: "Hyderabad, India",
          description:
            "As a software engineer, I led design and development sessions, ensuring adherence to Agile principles and project objectives. Proficient in Java and front-end technologies, I optimized application performance, achieved high code coverage, and facilitated seamless user experiences through responsive web development and robust backend architecture. My expertise in debugging, testing, and continuous integration contributed to maintaining a bug-free production environment.",
          color: "#0879bf",
          responsibiletes: [],
        },
        /*{
          title: "Software Engineer - FullTime",
          company: "Accellor",
          company_url: "https://www.accellor.com/",
          logo_path: "Accellor.png",
          duration: "Oct 2019-Dec 2020",
          location: "Hyderabad, Teleangana ,India",
          description: [
            "As a software engineer at Acellor used the AGILE technique and Test-Driven Development (TDD) to work on the design, development, and testing phases of software development. As a Dynamics 365 developer at Acellor used the experienced in utilizing Microsoft Dynamics 365 and specializing in a virtual healthcare solution connecting practitioners and patients for seamless consultations and EMR integration and testing phases of software development.",
          ],
          color: "#9b1578",
        },*/
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Graduate Teaching Assistant",
          company: "Auburn University At Montgomery",
          company_url: "https://about.google/",
          logo_path: "Ms_logo.jpg",
          duration: "Aubust2022-July2023",
          location: "Montgomery, Alabama, UnitedStates",
          description: [
            "Worked as a graduate assistant under the assistant professor by teaching C++, helping to teach the language's fundamentals to pupils",
            " and also functioned as a graduate assistant under the professor by teaching data structure, assisting students with various data structures and algorithmic methodologies.",
          ],
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects which I worked so far makes use of vast variety of latest technology tools. My best experience is to create the application using spring framework and deploy them to environments using Devops tools like jenkins.",
  avatar_image_path: "projects_image.svg",
};
//projects Data
const bigProjects = {
  degrees: [
    {
      title: "Amazon Logistics",
      logo_path: "Amazon.png",
      descriptions: [
        "Orders placed on Amazon are delivered more easily thanks to Amazon Logistics. Orders that are shipped via the Amazon Logistics network will appear to have been shipped by Amazon.Customers can expect Amazon deliveries delivered seven days a week thanks to its partnerships with local and regional delivery services across the nation. When more and more customers take advantage of Amazon Prime's next-day delivery benefits, the Amazon Logistics service enhances our current large, national delivery partners and adds capacity.",
      ],
      responsibiletes: [
        "⚡ Implemented a new feature to facilitate zipping functionality within a custom application, enabling users to package all related data associated with specific records.",
        "⚡ Developed Java-based workflows to automate email notifications to clients, triggered 14 days before a predefined service date.",
        "⚡ Engineered triggers to ensure seamless integration of document uploads, providing real-time updates in the case records.",
        "⚡ Enhanced the existing system integration with Amazon's Simple Storage Service (S3) to dynamically generate attachment URLs in case feeds upon document uploads via the SIM Dashboard.",
        "⚡ Implemented functionality to generate PDF documents summarizing case details upon case record creation, enhancing accessibility and record-keeping capabilities.",
      ],
      website_link: "",
    },
    {
      title: "MobiCure",
      logo_path: "mobicure.png",
      descriptions: [
        "Personalized campaigns, treatment plans, prescriptions, orders for diagnostic tests, a 360° picture of the patient, and an end-to-end patient, doctor, and enterprise interface will all help to provide the best possible care. Billing and communications will also be handled. Digitally revolutionize with an emphasis on quick, easy, and ergonomic process flow for patients and medical staff alike. MobiCure expands upon the Microsoft Healthcare accelerator by including features for disease tracking, medication management, scheduling, and telehealth. End-to-end healthcare business enablement is made possible by the addition of sales, marketing, and customer service functions.",
      ],
      responsibiletes: [
        "⚡As a Java developer Utilized Java in Microsoft Dynamics 365 development, focusing on enhancing practitioner and patient experiences",
        "⚡Developed an application facilitating virtual consultations between doctors and patients, leveraging Dynamics 365 capabilities for seamless integration with Electronic Medical Records (EMR) systems.",
        "⚡Integrated various EMR systems including All-Scripts, FHIR, and Cernie using REST APIs for streamlined data exchange and interoperability.",
        "⚡Implemented PUBNUB and TOKBOX integration to enable virtual experiences and chat options within the application, enhancing communication and interaction features.",
      ],
      website_link: "",
    },

    {
      title: "Lincoln Finances",
      logo_path: "Lincoln.png",
      descriptions: [
        "After a thorough investigation, we came to the conclusion that while there wasn't much fluctuation, several metadata components needed to be properly combined in order to preserve functioning. As a result, we determined that the best course of action would be to create a new production instance with unified data and metadata in order to minimize business impact. It was crucial to maintain data privacy and segregation throughout the combined organization. Instead of writing code, we intended to use declarative development and setup in the Salesforce environment to do this.The application architecture included business processes, unified reporting for the entire company, and data validation standards. To transfer data to the new instance, maintain region-specific values, and guarantee that shared resources were visible, we carried out a laborious data migration.",
      ],
      responsibiletes: [
        "⚡Extensively involved in collaboration meetings and actively engaged in design and development sessions to guarantee adherence to project objectives, Agile principles, and software architecture, fostering teamwork and producing software with continuous improvement of the highest caliber.",
        "⚡Engineered Java classes and triggers to execute the logical flow of operations, decision making, optimizing application performance and reducing runtime by 50%. Generated Test Classes with more than 90% code coverage to ensure the reliability and quality of the code for deployment to the production and also participated in code review meetings.",
        "⚡Proficient in Visual Studio Code to develop responsive front end lightning Web Pages using HTML, CSS, and js ensuring a seamless and engaging user experience. Enhanced the qualities of backend using the RESTful API, MVC , system integration ",
        "⚡Extensively involved in Debugging, Unit Testing and collaborative with Quality Assurance Engineer team and continuous integration, ci/cd, and resolve issues, and contributed to the production environment bug-free by 99%.",
      ],
      website_link: "",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sk.jpeg",
    email_address: "saikrishna26031998@gmail.com",
    description: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  splashScreen,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  bigProjects,
  contactPageData,
};
