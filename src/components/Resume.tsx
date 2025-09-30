import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="content-section" id="resume-section">
      <div className="resume-content">
        <div className="resume-header">
          <h2>cyberwar</h2>
          <a 
            href="https://docs.google.com/document/d/1aAkqmRcmJG_oCTp9YTfU7iqURPLDrh7IE-toPunIk0s/edit?pli=1&tab=t.0" 
            className="download-btn" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Download
          </a>
        </div>
        
        <div className="resume-section">
          <p className="resume-intro">
            As a Mathematical Science student and Software Engineer, I am passionate about using technology to solve real-world problems. With a strong foundation in Mathematical Science principles and programming languages such as JavaScript, Python, C++ and Java. I am constantly seeking opportunities to learn and apply my skills in new and innovative ways.
          </p>
          <p className="resume-intro">
            In addition to my academic pursuits, I have completed internships at leading technology companies, where I have gained valuable experience working on complex software projects. I am a team player who enjoys collaborating with others and sharing knowledge.
          </p>
          <p className="resume-intro">
            I am excited to continue learning and growing as a software engineer, and I am eager to apply my skills and knowledge to tackle challenging problems and make a positive impact on the world.
          </p>
        </div>

        <div className="resume-section">
          <h3>Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Languages:</h4>
              <p>JavaScript, TypeScript, Python, C++, Java, Go</p>
            </div>
            <div className="skill-category">
              <h4>Frameworks/Libraries:</h4>
              <p>React, Vue, Nodejs, Nestjs, Nextjs, GraphQL, Flask</p>
            </div>
            <div className="skill-category">
              <h4>Storages/Databases:</h4>
              <p>SQL, PostgreSQL, MongoDB, Kafka, ElasticSearch, Neo4j</p>
            </div>
            <div className="skill-category">
              <h4>Tooling:</h4>
              <p>Linux, Git, Docker, Kubernetes, AWS, GCP</p>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <h3>Experience</h3>
          
          <div className="experience-item">
            <div className="exp-header">
              <h4>JP Morgan Chase & Co - Software Engineer Intern</h4>
              <span className="exp-date">JUN 2023 - AUG 2023</span>
            </div>
            <ul className="exp-details">
              <li>Co-Led a team of 3 interns, designing and developing an end-to-end social network graph project for employees to find how they are connected to other people within the firm, improving employee experience.</li>
              <li>Developed a Batch Processing application which transforms Oracle SQL data into Neo4j Graph data using Spring Batch</li>
              <li>Developed a RESTful backend service to compute the shortest path, all paths, and path recommendations in the employee network</li>
              <li>Implemented draggable and interactive graphs visualization for the social network</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h4>Cruise LLC - Software Engineer Intern</h4>
              <span className="exp-date">SEP 2022 - DEC 2022</span>
            </div>
            <ul className="exp-details">
              <li>Helped built the world's most advanced self-driving vehicles to safely connect people with places, things, and experiences they care about</li>
              <li>Collaborated alongside multiple teams to bring forth multiple deliverables that improved end-to-end metrics gathering, enabling the Simulation department to measure the impact of its various efforts on key success metrics</li>
              <li>Contributed to Cruise AI Simulation Platform Tools which empowers AV engineers to run simulations at scale, accelerating the development of Autonomous Vehicles by more than 4x</li>
              <li>Implemented NPCs objective profile conversion features for Planning Simulation (PSIM) and Matrix on the Scenario Editor Software, which prevent data loss while editing scenarios and maintain states between NPCs objective profiles</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h4>JP Morgan Chase & Co - Software Engineer Intern</h4>
              <span className="exp-date">JUN 2022 - AUG 2022</span>
            </div>
            <ul className="exp-details">
              <li>Designed and developed the prototype of a new Global Search Platform that enables searching of internal trades data to make search speed at least 10x faster and flexible search queries possible using Spring Boot and Elasticsearch</li>
              <li>Configured and deployed Kafka Connect (sink connector) to ship data from the Kafka Cluster to the Elasticsearch Cluster</li>
              <li>Automated the visualization and analytics of data as they are shipped in real-time using Kibana</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h4>Block Knowledge - Software and DevOps Engineer</h4>
              <span className="exp-date">DEC 2020 - DEC 2021</span>
            </div>
            <ul className="exp-details">
              <li>Designed the database and system architecture for Kadogo (turn everyday purchases into charitable donations)</li>
              <li>Led the kadogo backend team of 2 - 3 people</li>
              <li>Built the entire backend of the MVP version, which raised $100,000 in funding</li>
              <li>Optimized the backend to leverage on cloud services like serverless functions and messaging systems to increase performance and prevent downtime of the critical part of the application</li>
              <li>Developed APIs for the mobile application, merchant and NGO dashboard</li>
              <li>Facilitated the use of continuous integration and continuous deployment tools to reduce code shipping time and increase collaboration and productivity among the developers</li>
              <li>Implemented the spare change and cashback donation algorithms</li>
              <li>Set up Autoscaling, Load balancers and failover servers on AWS for development, staging, production environment</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h4>Powerjamb - Software and DevOps Engineer Intern</h4>
              <span className="exp-date">JUN 2019 - SEP 2020</span>
            </div>
            <ul className="exp-details">
              <li>Managed infrastructure as code using AWS CloudFormation</li>
              <li>Redesigned the landing page to 3x faster</li>
              <li>Developed a web mobile-first examination application</li>
              <li>Created Dockerfiles and built docker images for the microservices to run on Kubernetes cluster</li>
              <li>Created and managed the deployment of microservices cluster to EKS using Docker, Kubernetes, Helm, and Jenkins</li>
              <li>Experience with Amazon services such as AWS, VPC, S3, EC2 Relational Database (RDS), Document DB, Elastic Load Balancing, Autoscaling, ECR, ECS, Lambda, IAM, EKS, Beanstalk, and CloudFormation</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h4>Soft Quest Incorporated - Software Enginer Intern</h4>
              <span className="exp-date">SEP 2018 - MAR 2019</span>
            </div>
            <ul className="exp-details">
              <li>Produced clean, validation-ready code for given project needs</li>
              <li>Developed a basic Banking Web Application with Angular and PHP</li>
              <li>Developed a Car Racing game using JavaScript and HTML5 canvas</li>
              <li>Built an advanced Scientific Calculator, Inventory System, Timer, Countdown on the Web and many other self-development Projects</li>
            </ul>
          </div>
        </div>

        <div className="resume-section">
          <h3>Education</h3>
          <div className="education-item">
            <h4>B.Sc Mathematics at Kogi state university, Anyigba</h4>
            <span className="edu-date">MAY 2025</span>
          </div>
          <div className="education-item">
            <h4>Winners Comprehensive High school, Jalingo</h4>
            <span className="edu-date">SEP 2012 - JUL 2018</span>
          </div>
        </div>

        <div className="resume-section">
          <h3>Certification</h3>
          <div className="cert-item">
            <h4>Cloud DevOps Engineer Nanodegree, Udacity</h4>
            <span className="cert-date">MAY 2020</span>
          </div>
          <div className="cert-item">
            <h4>Microsoft Certified: Azure Fundamentals (AZ – 900)</h4>
            <span className="cert-date">JUL 2020</span>
          </div>
        </div>

        <div className="resume-section">
          <h3>Languages</h3>
          <div className="languages-grid">
            <div className="lang-item">
              <span className="lang-name">English</span>
              <span className="lang-level">PROFICIENT</span>
            </div>
            <div className="lang-item">
              <span className="lang-name">Igala</span>
              <span className="lang-level">PROFICIENT</span>
            </div>
            <div className="lang-item">
              <span className="lang-name">Spanish</span>
              <span className="lang-level">BEGINNER</span>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <h3>Hobbies</h3>
          <p className="hobbies-text">Learning, Playing the piano, Lifting, Football/Soccer</p>
        </div>

        <div className="resume-section">
          <h3>Projects</h3>
          <p className="projects-text">Some selected projects can be found <a href="#" className="projects-link">here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
