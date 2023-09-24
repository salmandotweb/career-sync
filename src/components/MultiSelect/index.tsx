import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { ISkillsItem } from "@/stores/slices/experiences/interfaces";

const skills = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "Python" },
  { id: 3, name: "Java" },
  { id: 4, name: "C#" },
  { id: 5, name: "Ruby" },
  { id: 6, name: "PHP" },
  { id: 7, name: "Swift" },
  { id: 8, name: "Kotlin" },
  { id: 9, name: "Go" },
  { id: 10, name: "Rust" },
  { id: 11, name: "HTML" },
  { id: 12, name: "CSS" },
  { id: 13, name: "SQL" },
  { id: 14, name: "MongoDB" },
  { id: 15, name: "Redis" },
  { id: 16, name: "Node.js" },
  { id: 17, name: "React" },
  { id: 18, name: "Angular" },
  { id: 19, name: "Vue.js" },
  { id: 20, name: "Django" },
  { id: 21, name: "Flask" },
  { id: 22, name: "Spring Boot" },
  { id: 23, name: "ASP.NET" },
  { id: 24, name: "Laravel" },
  { id: 25, name: "Symfony" },
  { id: 26, name: "Ruby on Rails" },
  { id: 27, name: "Express.js" },
  { id: 28, name: "REST API" },
  { id: 29, name: "GraphQL" },
  { id: 30, name: "API Design" },
  { id: 31, name: "Database Design" },
  { id: 32, name: "UI/UX Design" },
  { id: 33, name: "Responsive Design" },
  { id: 34, name: "Version Control (Git)" },
  { id: 35, name: "Continuous Integration" },
  { id: 36, name: "Containerization (Docker)" },
  { id: 37, name: "Kubernetes" },
  { id: 38, name: "AWS" },
  { id: 39, name: "Azure" },
  { id: 40, name: "Google Cloud Platform" },
  { id: 41, name: "Linux" },
  { id: 42, name: "Windows Server" },
  { id: 43, name: "Network Administration" },
  { id: 44, name: "Cybersecurity" },
  { id: 45, name: "Ethical Hacking" },
  { id: 46, name: "Machine Learning" },
  { id: 47, name: "Artificial Intelligence" },
  { id: 48, name: "Data Science" },
  { id: 49, name: "Big Data" },
  { id: 50, name: "Natural Language Processing" },
  { id: 51, name: "Computer Vision" },
  { id: 52, name: "Blockchain" },
  { id: 53, name: "Quantum Computing" },
  { id: 54, name: "Virtual Reality (VR)" },
  { id: 55, name: "Augmented Reality (AR)" },
  { id: 56, name: "Game Development" },
  { id: 57, name: "Mobile App Development" },
  { id: 58, name: "Web Development" },
  { id: 59, name: "Full Stack Development" },
  { id: 60, name: "Front-End Development" },
  { id: 61, name: "Back-End Development" },
  { id: 62, name: "DevOps" },
  { id: 63, name: "Agile Methodology" },
  { id: 64, name: "Scrum" },
  { id: 65, name: "Kanban" },
  { id: 66, name: "JIRA" },
  { id: 67, name: "Confluence" },
  { id: 68, name: "Trello" },
  { id: 69, name: "Slack" },
  { id: 70, name: "Microsoft Office" },
  { id: 71, name: "Google Workspace" },
  { id: 72, name: "Project Management" },
  { id: 73, name: "Leadership" },
  { id: 74, name: "Communication Skills" },
  { id: 75, name: "Problem Solving" },
  { id: 76, name: "Critical Thinking" },
  { id: 77, name: "Teamwork" },
  { id: 78, name: "Time Management" },
  { id: 79, name: "Negotiation Skills" },
  { id: 80, name: "Presentation Skills" },
  { id: 81, name: "Customer Service" },
  { id: 82, name: "Sales" },
  { id: 83, name: "Marketing" },
  { id: 84, name: "Content Writing" },
  { id: 85, name: "Copywriting" },
  { id: 86, name: "Search Engine Optimization (SEO)" },
  { id: 87, name: "Social Media Management" },
  { id: 88, name: "Digital Marketing" },
  { id: 89, name: "E-commerce" },
  { id: 90, name: "Product Management" },
  { id: 91, name: "UI/UX Design" },
  { id: 92, name: "Graphic Design" },
  { id: 93, name: "Illustration" },
  { id: 94, name: "Motion Graphics" },
  { id: 95, name: "Video Editing" },
  { id: 96, name: "3D Modeling" },
  { id: 97, name: "Animation" },
  { id: 98, name: "Photography" },
  { id: 99, name: "Music Production" },
  { id: 100, name: "Game Design" },
  { id: 101, name: "TensorFlow" },
  { id: 102, name: "PyTorch" },
  { id: 103, name: "Natural Language Processing" },
  { id: 104, name: "Computer Vision" },
  { id: 105, name: "Image Processing" },
  { id: 106, name: "Speech Recognition" },
  { id: 107, name: "Data Analysis" },
  { id: 108, name: "Data Visualization" },
  { id: 109, name: "Data Engineering" },
  { id: 110, name: "ETL" },
  { id: 111, name: "Data Warehousing" },
  { id: 112, name: "Business Intelligence" },
  { id: 113, name: "Tableau" },
  { id: 114, name: "Power BI" },
  { id: 115, name: "Machine Learning" },
  { id: 116, name: "Artificial Intelligence" },
  { id: 117, name: "Deep Learning" },
  { id: 118, name: "Reinforcement Learning" },
  { id: 119, name: "Neural Networks" },
  { id: 120, name: "Genetic Algorithms" },
  { id: 121, name: "Blockchain" },
  { id: 122, name: "Smart Contracts" },
  { id: 123, name: "Cryptocurrency" },
  { id: 124, name: "Decentralized Applications" },
  { id: 125, name: "Web3" },
  { id: 126, name: "Solidity" },
  { id: 127, name: "Ethereum" },
  { id: 128, name: "Hyperledger" },
  { id: 129, name: "Quantum Computing" },
  { id: 130, name: "Quantum Algorithms" },
  { id: 131, name: "Quantum Cryptography" },
  { id: 132, name: "Quantum Simulators" },
  { id: 133, name: "Virtual Reality (VR)" },
  { id: 134, name: "Augmented Reality (AR)" },
  { id: 135, name: "Unity" },
  { id: 136, name: "Unreal Engine" },
  { id: 137, name: "Game Development" },
  { id: 138, name: "Mobile App Development" },
  { id: 139, name: "iOS Development" },
  { id: 140, name: "Android Development" },
  { id: 141, name: "Cross-Platform Development" },
  { id: 142, name: "Flutter" },
  { id: 143, name: "React Native" },
  { id: 144, name: "Xamarin" },
  { id: 145, name: "Mobile UI/UX Design" },
  { id: 146, name: "Responsive Design" },
  { id: 147, name: "Wireframing" },
  { id: 148, name: "Prototyping" },
  { id: 149, name: "User Testing" },
  { id: 150, name: "Usability Testing" },
  { id: 151, name: "Interaction Design" },
  { id: 152, name: "User-Centered Design" },
  { id: 153, name: "A/B Testing" },
  { id: 154, name: "Conversion Rate Optimization" },
  { id: 155, name: "User Research" },
  { id: 156, name: "User Personas" },
  { id: 157, name: "Accessibility" },
  { id: 158, name: "Inclusive Design" },
  { id: 159, name: "Typography" },
  { id: 160, name: "Color Theory" },
  { id: 161, name: "Illustration" },
  { id: 162, name: "Icon Design" },
  { id: 163, name: "Logo Design" },
  { id: 164, name: "Motion Graphics" },
  { id: 165, name: "Video Editing" },
  { id: 166, name: "3D Modeling" },
  { id: 167, name: "Animation" },
  { id: 168, name: "VFX" },
  { id: 169, name: "Augmented Reality (AR)" },
  { id: 170, name: "Virtual Reality (VR)" },
  { id: 171, name: "Game Design" },
  { id: 172, name: "Level Design" },
  { id: 173, name: "Narrative Design" },
  { id: 174, name: "Character Design" },
  { id: 175, name: "Game Mechanics" },
  { id: 176, name: "Monetization Strategies" },
  { id: 177, name: "Game Engines" },
  { id: 178, name: "Unity" },
  { id: 179, name: "Unreal Engine" },
  { id: 180, name: "CryEngine" },
  { id: 181, name: "Godot" },
  { id: 182, name: "Project Management" },
  { id: 183, name: "Agile Methodology" },
  { id: 184, name: "Scrum" },
  { id: 185, name: "Kanban" },
  { id: 186, name: "Lean" },
  { id: 187, name: "Waterfall" },
  { id: 188, name: "Gantt Charts" },
  { id: 189, name: "Risk Management" },
  { id: 190, name: "Stakeholder Communication" },
  { id: 191, name: "Leadership" },
  { id: 192, name: "Team Management" },
  { id: 193, name: "Conflict Resolution" },
  { id: 194, name: "Negotiation Skills" },
  { id: 195, name: "Emotional Intelligence" },
  { id: 196, name: "Time Management" },
  { id: 197, name: "Decision Making" },
  { id: 198, name: "Problem Solving" },
  { id: 199, name: "Critical Thinking" },
  { id: 200, name: "Communication Skills" },
  { id: 201, name: "Presentation Skills" },
  { id: 202, name: "Public Speaking" },
  { id: 203, name: "Storytelling" },
  { id: 204, name: "Sales" },
  { id: 205, name: "Marketing" },
  { id: 206, name: "Digital Marketing" },
  { id: 207, name: "Social Media Marketing" },
  { id: 208, name: "Content Marketing" },
  { id: 209, name: "Email Marketing" },
  { id: 210, name: "Search Engine Optimization (SEO)" },
  { id: 211, name: "Pay-Per-Click (PPC)" },
  { id: 212, name: "Affiliate Marketing" },
  { id: 213, name: "E-commerce" },
  { id: 214, name: "Customer Relationship Management (CRM)" },
  { id: 215, name: "Market Research" },
  { id: 216, name: "Brand Management" },
  { id: 217, name: "Public Relations" },
  { id: 218, name: "Copywriting" },
  { id: 219, name: "Content Writing" },
  { id: 220, name: "Technical Writing" },
  { id: 221, name: "Blogging" },
  { id: 222, name: "Copy Editing" },
  { id: 223, name: "Proofreading" },
  { id: 224, name: "SEO Writing" },
  { id: 225, name: "Email Writing" },
  { id: 226, name: "Storyboarding" },
  { id: 227, name: "Screenwriting" },
  { id: 228, name: "Audio Production" },
  { id: 229, name: "Podcasting" },
  { id: 230, name: "Voice Acting" },
  { id: 231, name: "Music Production" },
  { id: 232, name: "Film Editing" },
  { id: 233, name: "Animation" },
  { id: 234, name: "Photography" },
  { id: 235, name: "Video Editing" },
  { id: 236, name: "Color Theory" },
  { id: 237, name: "Typography" },
  { id: 238, name: "Graphic Design" },
  { id: 239, name: "UI/UX Design" },
  { id: 240, name: "Web Design" },
  { id: 241, name: "Responsive Design" },
  { id: 242, name: "Wireframing" },
  { id: 243, name: "Prototyping" },
  { id: 244, name: "User Testing" },
  { id: 245, name: "Usability Testing" },
  { id: 246, name: "Interaction Design" },
  { id: 247, name: "User Research" },
  { id: 248, name: "A/B Testing" },
  { id: 249, name: "Conversion Rate Optimization" },
  { id: 250, name: "User-Centered Design" },
  { id: 251, name: "Data Analysis" },
  { id: 252, name: "Data Visualization" },
  { id: 253, name: "Data Modeling" },
  { id: 254, name: "Data Warehousing" },
  { id: 255, name: "ETL" },
  { id: 256, name: "Business Intelligence" },
  { id: 257, name: "Tableau" },
  { id: 258, name: "Power BI" },
  { id: 259, name: "Big Data" },
  { id: 260, name: "Hadoop" },
  { id: 261, name: "Spark" },
  { id: 262, name: "Flink" },
  { id: 263, name: "Apache Kafka" },
  { id: 264, name: "Machine Learning" },
  { id: 265, name: "Deep Learning" },
  { id: 266, name: "Natural Language Processing" },
  { id: 267, name: "Computer Vision" },
  { id: 268, name: "Reinforcement Learning" },
  { id: 269, name: "Neural Networks" },
  { id: 270, name: "Genetic Algorithms" },
  { id: 271, name: "Ethical Hacking" },
  { id: 272, name: "Penetration Testing" },
  { id: 273, name: "Network Security" },
  { id: 274, name: "Vulnerability Assessment" },
  { id: 275, name: "Cryptography" },
  { id: 276, name: "Security Auditing" },
  { id: 277, name: "Incident Response" },
  { id: 278, name: "Malware Analysis" },
  { id: 279, name: "Identity and Access Management" },
  { id: 280, name: "Security Architecture" },
  { id: 281, name: "Risk Management" },
  { id: 282, name: "Cloud Security" },
  { id: 283, name: "DevSecOps" },
  { id: 284, name: "Cybersecurity Frameworks" },
  { id: 285, name: "Computer Forensics" },
  { id: 286, name: "Blockchain" },
  { id: 287, name: "Smart Contracts" },
  { id: 288, name: "Cryptocurrency" },
  { id: 289, name: "Decentralized Applications" },
  { id: 290, name: "Web3" },
  { id: 291, name: "Solidity" },
  { id: 292, name: "Ethereum" },
  { id: 293, name: "Hyperledger" },
  { id: 294, name: "Quantum Computing" },
  { id: 295, name: "Quantum Algorithms" },
  { id: 296, name: "Quantum Cryptography" },
  { id: 297, name: "Quantum Simulators" },
  { id: 298, name: "Virtual Reality (VR)" },
  { id: 299, name: "Augmented Reality (AR)" },
  { id: 300, name: "Game Development" },
  { id: 301, name: "Ruby on Rails" },
  { id: 302, name: "Sinatra" },
  { id: 303, name: "Django" },
  { id: 304, name: "Flask" },
  { id: 305, name: "Express.js" },
  { id: 306, name: "NestJS" },
  { id: 307, name: "Spring Boot" },
  { id: 308, name: "ASP.NET" },
  { id: 309, name: "Laravel" },
  { id: 310, name: "Symfony" },
  { id: 311, name: "CodeIgniter" },
  { id: 312, name: "Vue.js" },
  { id: 313, name: "React" },
  { id: 314, name: "Angular" },
  { id: 315, name: "Ember.js" },
  { id: 316, name: "Svelte" },
  { id: 317, name: "Meteor" },
  { id: 318, name: "Backbone.js" },
  { id: 319, name: "jQuery" },
  { id: 320, name: "Redux" },
  { id: 321, name: "MobX" },
  { id: 322, name: "RxJS" },
  { id: 323, name: "GraphQL" },
  { id: 324, name: "Apollo Client" },
  { id: 325, name: "Relay" },
  { id: 326, name: "REST API" },
  { id: 327, name: "SOAP" },
  { id: 328, name: "JSON" },
  { id: 329, name: "XML" },
  { id: 330, name: "WebSocket" },
  { id: 331, name: "ASP.NET Core" },
  { id: 332, name: "Express.js" },
  { id: 333, name: "Django REST framework" },
  { id: 334, name: "Flask-RESTful" },
  { id: 335, name: "LoopBack" },
  { id: 336, name: "Symfony API Platform" },
  { id: 337, name: "Ruby Grape" },
  { id: 338, name: "Serverless Framework" },
  { id: 339, name: "Strapi" },
  { id: 340, name: "Next.js" },
  { id: 341, name: "Nuxt.js" },
  { id: 342, name: "Gatsby" },
  { id: 343, name: "Hugo" },
  { id: 344, name: "Jekyll" },
  { id: 345, name: "NestJS" },
  { id: 346, name: "Feathers.js" },
  { id: 347, name: "AdonisJS" },
  { id: 348, name: "Rails" },
  { id: 349, name: "Symfony" },
  { id: 350, name: "Laravel" },
  { id: 351, name: "ASP.NET MVC" },
  { id: 352, name: "CakePHP" },
  { id: 353, name: "Zend Framework" },
  { id: 354, name: "Ruby on Rails" },
  { id: 355, name: "Express.js" },
  { id: 356, name: "NestJS" },
  { id: 357, name: "Feathers.js" },
  { id: 358, name: "AdonisJS" },
  { id: 359, name: "Django" },
  { id: 360, name: "Flask" },
  { id: 361, name: "Django REST framework" },
  { id: 362, name: "Flask-RESTful" },
  { id: 363, name: "LoopBack" },
  { id: 364, name: "Symfony" },
  { id: 365, name: "Symfony API Platform" },
  { id: 366, name: "Ruby Grape" },
  { id: 367, name: "Laravel" },
  { id: 368, name: "Strapi" },
  { id: 369, name: "Next.js" },
  { id: 370, name: "Nuxt.js" },
  { id: 371, name: "Gatsby" },
  { id: 372, name: "Hugo" },
  { id: 373, name: "Jekyll" },
  { id: 374, name: "Vue.js" },
  { id: 375, name: "React" },
  { id: 376, name: "Angular" },
  { id: 377, name: "Ember.js" },
  { id: 378, name: "Svelte" },
  { id: 379, name: "Meteor" },
  { id: 380, name: "Backbone.js" },
  { id: 381, name: "jQuery" },
  { id: 382, name: "Redux" },
  { id: 383, name: "MobX" },
  { id: 384, name: "RxJS" },
  { id: 385, name: "GraphQL" },
  { id: 386, name: "Apollo Client" },
  { id: 387, name: "Relay" },
  { id: 388, name: "REST API" },
  { id: 389, name: "SOAP" },
  { id: 390, name: "JSON" },
  { id: 391, name: "XML" },
  { id: 392, name: "WebSocket" },
  { id: 393, name: "Flutter" },
  { id: 394, name: "React Native" },
  { id: 395, name: "Xamarin" },
  { id: 396, name: "Ionic" },
  { id: 397, name: "Cordova" },
  { id: 398, name: "PhoneGap" },
  { id: 399, name: "NativeScript" },
  { id: 400, name: "Appcelerator Titanium" },
  { id: 401, name: "Unity" },
  { id: 402, name: "Unreal Engine" },
  { id: 403, name: "Godot" },
  { id: 404, name: "CryEngine" },
  { id: 405, name: "Phaser" },
  { id: 406, name: "SDL" },
  { id: 407, name: "LÖVE" },
  { id: 408, name: "Defold" },
  { id: 409, name: "Cocos2d" },
  { id: 410, name: "Pygame" },
  { id: 411, name: "Panda3D" },
  { id: 412, name: "Blender" },
  { id: 413, name: "Maya" },
  { id: 414, name: "3ds Max" },
  { id: 415, name: "ZBrush" },
  { id: 416, name: "Substance Painter" },
  { id: 417, name: "Adobe Creative Suite" },
  { id: 418, name: "AutoCAD" },
  { id: 419, name: "SketchUp" },
  { id: 420, name: "SolidWorks" },
  { id: 421, name: "Revit" },
  { id: 422, name: "Fusion 360" },
  { id: 423, name: "Vectorworks" },
  { id: 424, name: "Inventor" },
  { id: 425, name: "Rhino" },
  { id: 426, name: "CATIA" },
  { id: 427, name: "Creo" },
  { id: 428, name: "Ansys" },
  { id: 429, name: "COMSOL Multiphysics" },
  { id: 430, name: "MATLAB" },
  { id: 431, name: "Mathematica" },
  { id: 432, name: "LabVIEW" },
  { id: 433, name: "Simulink" },
  { id: 434, name: "OpenModelica" },
  { id: 435, name: "Scilab" },
  { id: 436, name: "Maxima" },
  { id: 437, name: "GNU Octave" },
  { id: 438, name: "SAS" },
  { id: 439, name: "SPSS" },
  { id: 440, name: "R" },
  { id: 441, name: "Python" },
  { id: 442, name: "JavaScript" },
  { id: 443, name: "TypeScript" },
  { id: 444, name: "Java" },
  { id: 445, name: "C#" },
  { id: 446, name: "C++" },
  { id: 447, name: "Python" },
  { id: 448, name: "Ruby" },
  { id: 449, name: "PHP" },
  { id: 450, name: "Swift" },
  { id: 451, name: "Kotlin" },
  { id: 452, name: "Go" },
  { id: 453, name: "Rust" },
  { id: 454, name: "Scala" },
  { id: 455, name: "Haskell" },
  { id: 456, name: "Perl" },
  { id: 457, name: "Lua" },
  { id: 458, name: "Dart" },
  { id: 459, name: "Groovy" },
  { id: 460, name: "Clojure" },
  { id: 461, name: "F#" },
  { id: 462, name: "Erlang" },
  { id: 463, name: "Julia" },
  { id: 464, name: "Prolog" },
  { id: 465, name: "Crystal" },
  { id: 466, name: "Ada" },
  { id: 467, name: "Fortran" },
  { id: 468, name: "COBOL" },
  { id: 469, name: "Lisp" },
  { id: 470, name: "Scheme" },
  { id: 471, name: "Racket" },
  { id: 472, name: "Smalltalk" },
  { id: 473, name: "Simula" },
  { id: 474, name: "ABAP" },
  { id: 475, name: "PL/I" },
  { id: 476, name: "CLIPS" },
  { id: 477, name: "Rexx" },
  { id: 478, name: "APL" },
  { id: 479, name: "COBOL" },
  { id: 480, name: "Elixir" },
  { id: 481, name: "Objective-C" },
  { id: 482, name: "ActionScript" },
  { id: 483, name: "Ada" },
  { id: 484, name: "Clojure" },
  { id: 485, name: "COBOL" },
  { id: 486, name: "Erlang" },
  { id: 487, name: "Fortran" },
  { id: 488, name: "Haskell" },
  { id: 489, name: "Julia" },
  { id: 490, name: "Kotlin" },
  { id: 491, name: "Lisp" },
  { id: 492, name: "Lua" },
  { id: 493, name: "Pascal" },
  { id: 494, name: "Perl" },
  { id: 495, name: "Prolog" },
  { id: 496, name: "Rust" },
  { id: 497, name: "Scala" },
  { id: 498, name: "Scheme" },
  { id: 499, name: "Swift" },
  { id: 500, name: "Visual Basic .NET" },
  { id: 501, name: "Material UI" },
  { id: 502, name: "Styled Components" },
  { id: 503, name: "Tailwind CSS" },
  { id: 504, name: "Figma" },
  { id: 505, name: "Gsap" },
  { id: 506, name: "Three.js" },
  { id: 507, name: "MySQL" },
  { id: 508, name: "PostgreSQL" },
  { id: 509, name: "SQLite" },
  { id: 510, name: "MariaDB" },
  { id: 513, name: "Cassandra" },
  { id: 514, name: "Couchbase" },
  { id: 515, name: "CouchDB" },
  { id: 516, name: "Neo4j" },
  { id: 517, name: "DynamoDB" },
  { id: 518, name: "Amazon RDS" },
  { id: 519, name: "Amazon Redshift" },
  { id: 520, name: "Amazon DynamoDB" },
  { id: 521, name: "Amazon DocumentDB" },
  { id: 522, name: "Amazon Keyspaces" },
  { id: 523, name: "Amazon QLDB" },
  { id: 524, name: "Amazon Timestream" },
  { id: 525, name: "Amazon Neptune" },
  { id: 526, name: "Amazon Managed Blockchain" },
  { id: 527, name: "Amazon ElastiCache" },
  { id: 528, name: "Amazon Elasticsearch Service" },
  { id: 529, name: "Amazon Redshift" },
  { id: 530, name: "Amazon DocumentDB" },
  { id: 531, name: "Amazon Keyspaces" },
  { id: 532, name: "Amazon QLDB" },
  { id: 533, name: "TRPC" },
  { id: 535, name: "Bootstrap" },
  { id: 536, name: "MUI" },
  { id: 537, name: "Bulma" },
  { id: 538, name: "Chakra UI" },
  { id: 539, name: "Ant Design" },
  { id: 540, name: "Semantic UI" },
  { id: 541, name: "Foundation" },
  { id: 542, name: "UIKit" },
  { id: 543, name: "Pure CSS" },
  { id: 544, name: "Shadcn UI" },
  { id: 545, name: "Framer Motion" },
  { id: 546, name: "Storybook" },
  { id: 547, name: "Redux" },
  { id: 548, name: "Visual Studio Code" },
  { id: 549, name: "Sublime Text" },
  { id: 550, name: "Atom" },
  { id: 551, name: "Postman" },
  { id: 552, name: "Adobe XD" },
  { id: 553, name: "Figma" },
  { id: 554, name: "Sketch" },
  { id: 555, name: "InVision" },
  { id: 556, name: "Jira" },
  { id: 557, name: "Trello" },
  { id: 558, name: "Asana" },
  { id: 559, name: "Monday.com" },
  { id: 560, name: "Basecamp" },
  { id: 561, name: "Slack" },
  { id: 562, name: "Postman" },
  { id: 563, name: "Notion" },
  { id: 564, name: "Airtable" },
  { id: 565, name: "ClickUp" },
  { id: 566, name: "Todoist" },
  { id: 567, name: "Firebase" },
  { id: 568, name: "MongoDB" },
  { id: 569, name: "Git" },
  { id: 570, name: "GitHub" },
  { id: 571, name: "Google" },
  { id: 572, name: "Youtube" },
  { id: 573, name: "HTML/CSS" },
  { id: 574, name: "T3 Stack" },
];

export default function MultiSelect({
  selectSkills,
  setSelectSkills,
  maxSkills = 3,
  placeholder = `Select Top ${maxSkills} Skills used in this company`,
  unlimited = false,
}: {
  selectSkills: ISkillsItem[];
  setSelectSkills: (skills: ISkillsItem[]) => void;
  maxSkills?: number;
  placeholder?: string;
  unlimited?: boolean;
}) {
  const [query, setQuery] = useState("");

  const refactoredSkills = skills
    .filter(
      (skill, index, self) =>
        index === self.findIndex((s) => s.name === skill.name),
    )
    .map((skill, index) => {
      return { ...skill, id: index + 1 };
    });

  const filteredSkills =
    query === ""
      ? refactoredSkills.filter((skill) => {
          return !selectSkills.some(
            (selectedSkill) => selectedSkill.id === skill.id,
          );
        })
      : refactoredSkills.filter((skill) => {
          return (
            skill.name.toLowerCase().includes(query.toLowerCase()) &&
            !selectSkills.some((selectedSkill) => selectedSkill.id === skill.id)
          );
        });

  return (
    <div className="w-full">
      <Combobox
        disabled={unlimited ? false : selectSkills?.length === maxSkills}
      >
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              placeholder={placeholder}
              displayValue={(skill: { id: number; name: string }) =>
                skill?.name
              }
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (filteredSkills.length > 0) {
                    if (!selectSkills.includes(filteredSkills[0])) {
                      setSelectSkills([...selectSkills, filteredSkills[0]]);
                    }
                  } else {
                    if (query !== "") {
                      setSelectSkills([
                        ...selectSkills,
                        { id: selectSkills.length + 1, name: query },
                      ]);
                      setQuery("");
                    }
                  }
                }
              }}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
              {filteredSkills.length === 0 && query !== "" ? (
                <div className="px-2 py-1.5 text-sm font-medium">{query}</div>
              ) : (
                filteredSkills.map((skill) => (
                  <Combobox.Option
                    key={skill.id}
                    className={({ active }) =>
                      `relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${
                        active ? "bg-gray-300 text-black" : "text-gray-600"
                      }`
                    }
                    value={""}
                    onClick={() => {
                      if (!selectSkills.includes(skill)) {
                        setSelectSkills([...selectSkills, skill]);
                      }
                    }}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {skill.name}
                        </span>
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>

      <div className="flex flex-wrap gap-2 mt-2">
        {selectSkills.map((skill) => (
          <div
            key={skill.id}
            className="flex items-center justify-center px-2 py-1 bg-accent rounded-md text-accent-foreground text-sm"
          >
            {skill.name}

            <button
              className="ml-2"
              onClick={() => {
                setSelectSkills(
                  selectSkills.filter((selectedSkill) => {
                    return selectedSkill.id !== skill.id;
                  }),
                );
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
