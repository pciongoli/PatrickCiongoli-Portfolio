(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/cover-image.9708ab59.jpg"},function(e,t,n){e.exports=n.p+"static/media/4.a404b54b.jpg"},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},,function(e,t,n){var a={"./PC-MVC-TechBlog.jpg":14,"./deep-thoughts.jpg":15,"./pc-BudgetTracker.jpg":16,"./silver-giggle.jpg":17,"./zookeeper.jpg":18};function l(e){var t=r(e);return n(t)}function r(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}l.keys=function(){return Object.keys(a)},l.resolve=r,e.exports=l,l.id=13},function(e,t,n){e.exports=n.p+"static/media/PC-MVC-TechBlog.732b1c9a.jpg"},function(e,t,n){e.exports=n.p+"static/media/deep-thoughts.22ddfceb.jpg"},function(e,t,n){e.exports=n.p+"static/media/pc-BudgetTracker.5117a5da.jpg"},function(e,t,n){e.exports=n.p+"static/media/silver-giggle.a68ddfe6.jpg"},function(e,t,n){e.exports=n.p+"static/media/zookeeper.d389fc97.jpg"},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),c=n.n(r),o=(n(11),n(1)),i=n(4),u=n.n(i);var m=function(e){return l.a.createElement("header",{className:"flex-row justify-content-top px-1"},l.a.createElement("h1",null,"Patrick Ciongoli"),l.a.createElement("img",{src:u.a,alt:"wooden background"}),e.children)};function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}function p(e){return e.replace(/-/g," ").replace(/(^\w|\s\w)/g,function(e){return e.toUpperCase()})}var E=function(e){var t=e.pages,n=void 0===t?[]:t,r=e.setCurrentPage,c=e.currentPage;return Object(a.useEffect)(function(){document.title=s(c.name)},[c]),l.a.createElement("nav",null,l.a.createElement("ul",{className:"flex-row"},n.map(function(e){return l.a.createElement("li",{className:"mx-5 ".concat(c.name===e.name&&"navActive"),key:e.name},l.a.createElement("span",{onClick:function(){return r(e)}},s(e.name)))})))},g=function(e){return l.a.createElement("div",null,e.children)},d=n(5),f=n.n(d);var h=function(){return l.a.createElement("section",{className:"my-5"},l.a.createElement("div",{className:"my-2"},l.a.createElement("div",{className:"profile-img my-6"},l.a.createElement("img",{src:f.a,alt:"Picture of me"})),l.a.createElement("p",null,"Hello and wecome to my website!"),l.a.createElement("p",null,"My name is Patrick, I am a full stack web developer specializing in the MERN stack."),l.a.createElement("p",null,"My goal is to continue building my portfolio with new and exciting projects that can fully capture my passion for this field, as well as allow me to continue learning along the way."),l.a.createElement("p",null,"Recieved my certificate in full stack web devolopment from Rutgers University Bootcamp and have been coding ever since!"),l.a.createElement("p",null,"Thank you so much for viewing my profile and please enjoy taking a look at some of my deployed projects! \ud83d\ude42")))};var v=function(e){var t=e.project,a=t.name,r=t.repo,c=t.link,o=t.description;return l.a.createElement("div",{className:"project",key:a},l.a.createElement("img",{src:n(13)("./".concat(a,".jpg")),alt:p(a),className:"project-bg"}),l.a.createElement("div",{className:"project-text"},l.a.createElement("h3",null,l.a.createElement("a",{href:c},p(a))," ",l.a.createElement("a",{href:r},l.a.createElement("i",{className:"fab fa-github"}))),l.a.createElement("p",null,o)))};var k=function(){var e=Object(a.useState)([{name:"silver-giggle",description:"REACT, MERN Stack",link:"https://fathomless-peak-27221.herokuapp.com/",repo:"https://github.com/ChristanFox/silver-giggle"},{name:"PC-MVC-TechBlog",description:"Model-View-Controller TechBlog",link:"https://secret-falls-79420.herokuapp.com/",repo:"https://github.com/pciongoli/PC-MVC-TechBlog"},{name:"pc-BudgetTracker",description:"MERN Stack",link:"https://gentle-hamlet-11355.herokuapp.com/",repo:"https://github.com/pciongoli/pc-BudgetTracker"},{name:"zookeeper",description:"REACTT",link:"https://serene-eyrie-17311.herokuapp.com/",repo:"https://github.com/pciongoli/zookeeper"}]),t=Object(o.a)(e,1)[0];return l.a.createElement("div",null,l.a.createElement("div",{className:"flex-row"},t.map(function(e,t){return l.a.createElement(v,{project:e,key:"project"+t})})))};var w=function(){return l.a.createElement("div",null,l.a.createElement("p",null),l.a.createElement("p",null,"Phone: 201-881-6804 | \xa0Email: patrick.ciongoli@gmail.com"),l.a.createElement("p",null,"LinkedIn:",l.a.createElement("a",{href:"https://www.linkedin.com/in/patrick-ciongoli-231a32165/"},"linkedin.com/in/patrick-ciongoli"),"| GitHub:",l.a.createElement("a",{href:"https://github.com/pciongoli"},"github.com/pciongoli"),"\xa0"))};var b=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Ambitious full stack web developer with a large spectrum of knowledge in both front and backend languages and procedures. I received my bachelor's degree in economics with a minor in psychology. After graduation, I continued my education through Rutgers University Web Development Boot Camp in which I received my Certificate in Full Stack Web Development. I am seeking opportunities in which I can fully embrace my passion as a full stack web developer.\xa0"),l.a.createElement("p",null),l.a.createElement("p",null,l.a.createElement("strong",null,"TECHNICAL SKILLS")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Frontend"),": HTML5, AJAX, Handlebars, JSX, CSS, JQuery, JavaScript, Bootstrap, Foundation, SEO"),l.a.createElement("li",null,l.a.createElement("strong",null,"Backend"),": MERN, MongoDB, Express.js, React.js, Node, APIs, REST, OOP, ORM, Jest, TDD, MVC, User Authentication, Stripe, IndexDB")),l.a.createElement("p",null),l.a.createElement("p",null,l.a.createElement("strong",null,"SKILLS")),l.a.createElement("ul",null,l.a.createElement("li",null,"Excellent verbal and written communication skills"),l.a.createElement("li",null,"Flexible, quick learner, focused, dependable, self-motivated, and detail-oriented"),l.a.createElement("li",null,"Strong problem solving skills"),l.a.createElement("li",null,"Able to effectively self manage while completing individual projects, as well as collaborate and contribute in a team setting\xa0"),l.a.createElement("li",null,"Proficiency in Git and Microsoft Office")),l.a.createElement("p",null),l.a.createElement("p",null,l.a.createElement("strong",null,"EDUCATION")),l.a.createElement("p",null,l.a.createElement("strong",null,"Rutgers University - \xa0"),"NJ",l.a.createElement("strong",null,"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",l.a.createElement("em",null,"2022"))),l.a.createElement("ul",null,l.a.createElement("li",null,"Full Stack Web Development Bootcamp Certificate \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0\xa0 \xa0\xa0 \xa0 \xa0")),l.a.createElement("p",null,l.a.createElement("strong",null,"Rutgers University -\xa0")," Newark, NJ",l.a.createElement("strong",null,"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",l.a.createElement("em",null,"2021"))),l.a.createElement("ul",null,l.a.createElement("li",null,"Bachelor of Arts, Economics \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"),l.a.createElement("li",null,"Minor, Psychology")),l.a.createElement("p",null),l.a.createElement("p",null,l.a.createElement("strong",null,"AWARDS")),l.a.createElement("p",null,l.a.createElement("strong",null,"Rutgers University Coding Bootcamp \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa02022")),l.a.createElement("ul",null,l.a.createElement("li",null,'"Wiz with the Front-End Skills"')),l.a.createElement("p",null),l.a.createElement("p",null,l.a.createElement("strong",null,"WORK EXPERIENCE")),l.a.createElement("p",null,l.a.createElement("strong",null,"Corporate Tax Coordinator \xa0\u2022 \xa0August 2018 - Present\xa0")),l.a.createElement("p",null,l.a.createElement("em",null,"First Citizen Bank \xa0- \xa0CIT Group Inc., Morristown, NJ")),l.a.createElement("ul",null,l.a.createElement("li",null,"Preparation of corporate state and local income and franchise tax returns"),l.a.createElement("li",null,"Produce annual reports, estimates and extensions for each entity\xa0"),l.a.createElement("li",null,"Responsible for resolving state notices and processing refunds\xa0"),l.a.createElement("li",null,"Involved with all necessary procedures to ensure subsidiaries receive proper tax clearance\xa0"),l.a.createElement("li",null,"Work closely with legal team to advance the dissolution and withdrawal of entities in business activities ceased\xa0")),l.a.createElement("ul",null,l.a.createElement("li",null,"Mentor and train new tax coordinators to develop technical and leadership skills"),l.a.createElement("li",null,"Working knowledge of requisite software and internal work flow/procedures")),l.a.createElement("p",null,l.a.createElement("br",null)))};var y=function(e){var t=e.currentPage;return l.a.createElement("section",null,l.a.createElement("h2",null,s(t.name)),l.a.createElement(g,null,function(){switch(t.name){case"about me":return l.a.createElement(h,null);case"portfolio":return l.a.createElement(k,null);case"contact":return l.a.createElement(w,null);case"resume":return l.a.createElement(b,null);default:return l.a.createElement(h,null)}}()))};var j=function(){return l.a.createElement("footer",{className:"flex-row px-1"},[{name:"fab fa-github",link:"https://github.com/pciongoli"},{name:"fab fa-linkedin",link:"https://www.linkedin.com/in/patrick-ciongoli-231a32165/"},{name:"fab fa-stack-overflow",link:"https://stackoverflow.com/users/19273851/patrick-ciongoli"}].map(function(e){return l.a.createElement("a",{href:e.link,key:e.name,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:e.name}))}))};var C=function(){var e=Object(a.useState)([{name:"about me"},{name:"portfolio"},{name:"resume"},{name:"contact"}]),t=Object(o.a)(e,1)[0],n=Object(a.useState)(t[0]),r=Object(o.a)(n,2),c=r[0],i=r[1];return l.a.createElement("div",null,l.a.createElement(m,null,l.a.createElement(E,{pages:t,setCurrentPage:i,currentPage:c})),l.a.createElement("main",null,l.a.createElement(y,{currentPage:c})),l.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}],[[6,2,1]]]);
//# sourceMappingURL=main.64433d25.chunk.js.map