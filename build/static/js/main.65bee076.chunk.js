(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(13),r=a.n(i),o=(a(76),a(77),a(5)),c=a(6),l=a(8),m=a(7),u=a(9),p=(a(78),a(33)),d=a.n(p),h=a(32),b=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"nav"},s.a.createElement("div",{className:"button-box"},s.a.createElement(h.Link,{to:"about-section",activeClass:"active",spy:!0,smooth:!0,offset:-70,duration:500},s.a.createElement(d.a,{size:"large"},s.a.createElement("h3",null,"About"))),s.a.createElement(h.Link,{to:"portfolio-section",activeClass:"active",spy:!0,smooth:!0,offset:-70,duration:500},s.a.createElement(d.a,{size:"large"},s.a.createElement("h3",null,"Projects"))),s.a.createElement(h.Link,{to:"resume-section",activeClass:"active",spy:!0,smooth:!0,offset:-70,duration:500},s.a.createElement(d.a,{size:"large"},s.a.createElement("h3",null,"Resume")))))}}]),t}(n.Component),g=a(67),f=a.n(g),E=a(68),y=a.n(E),v=a(69),j=a.n(v),w=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"landing-page"},s.a.createElement("div",{className:"avatar-box"},s.a.createElement(f.a,{src:"../../../images/your_face.jpg",className:"avatar"})),s.a.createElement("div",{className:"landing-info"},s.a.createElement("h1",null,"Walter Benson"),s.a.createElement("p",null,"Web Developer building applications in React and Node"),s.a.createElement("div",{className:"header-line"},s.a.createElement("p",null,s.a.createElement(y.a,null)),s.a.createElement("p",null," 612-615-8252")),s.a.createElement("div",{className:"header-line"},s.a.createElement("p",null,s.a.createElement(j.a,null)),s.a.createElement("p",null," waltkbenson@gmail.com"))))}}]),t}(n.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"content-box",id:"about-section"},s.a.createElement("h2",null,"About"),s.a.createElement("p",null,"I cut my teeth in coding by making games in Visual Basic for a high school elective course. During my undergrad at Macalester College, I learned basic Python in an Environmental Science course and R as a statistical analysis tool. Ultimately, I pursued biology as my main course of study but picked up Javascript while doing some database management at Mississippi Mushrooms, a start-up urban farm in Minneapolis, where I\u2019ve worked for two years. As is the case at any start-up, I\u2019ve had a wide-range of responsibilities but ultimately wanted to focus on software bringing me to Prime Digital Academy."),s.a.createElement("p",null,"I\u2019m a transplant from Amherst, MA and have lived happily in the Twin Cities for seven years.I enjoy exploring the parks, breweries, and farmer\u2019s markets of the cities with my girlfriend and my dog. I\u2019ve been enjoying diversifying my skill set and outlook on tech by attending meetups and conferences such as React Minneapolis, Minnebar and Hackers and Founders."),s.a.createElement("p",null,"I\u2019m currently searching for a job in web development, my main areas of experience are in React and node but I\u2019m looking forward to expanding my skill set with Python and additional back end technologies in the near future."))}}]),t}(n.Component),O=[{name:"Shroom Assist",description:"Shroom Assist is the first module for a farm management concept, inspired by my time working at Mississippi Mushroom. This is my biggest project to date, see the github for details.",github:"https://github.com/wabens/shroom-assist",images:["../../../images/shroom_assist/login.png","../../../images/shroom_assist/task_create.png","../../../images/shroom_assist/task_view.png"]},{name:"Pet Hotel: Python REST API",description:"Python REST API made for a React front-end. Big thanks to my collaborators Brad, Lili and Jarvis.",github:"https://github.com/wabens/pet_hotel_python",images:["../../../images/pet_hotel/add_pet.png","../../../images/pet_hotel/manage_owners.png","../../../images/pet_hotel/pet_dashboard.png"]},{name:"Feedback Form",description:"A basic survey application using React, Node and PostgreSQL. Features a hash router to curry users between steps with an admin view for results.",github:"https://github.com/wabens/feedback_form",images:["../../../images/feedback_form/screenshot1.png","../../../images/feedback_form/screenshot2.png","../../../images/feedback_form/admin.png"]}],N=a(70),_=a.n(N);a(65);var I=function(e){var t=e.project;return console.log("props",e),s.a.createElement("div",{className:"project-box"},s.a.createElement("h4",null,t.name),s.a.createElement("div",{className:"project-images"},t.images.map(function(e,a){return s.a.createElement("div",{className:"img-div"},s.a.createElement("img",{key:a,src:e,alt:t.name+" screenshot",height:"auto%",width:"100%"}))})),s.a.createElement("p",null,t.description),s.a.createElement("a",{href:t.github},s.a.createElement(_.a,null),"Github"))},A=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log("projectlist ",O),s.a.createElement("section",{className:"content-box",id:"portfolio-section"},s.a.createElement("h2",null,"Projects"),s.a.createElement("div",null,O.map(function(e,t){return s.a.createElement(I,{project:e,key:t})})))}}]),t}(n.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"content-box",id:"resume-section"},s.a.createElement("h2",null,"Resume"),s.a.createElement("div",{className:"resume-div"},s.a.createElement("object",{width:"100%",height:"100%",data:"../../../images/resume.pdf"})))}}]),t}(n.Component),R=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"footer",id:"contact-section"},s.a.createElement("div",{className:"footer-line"},s.a.createElement("h4",null,"Contact"),s.a.createElement("p",{className:"small-p"}," 612-615-8252"),s.a.createElement("p",{className:"small-p"},"waltkbenson@gmail.com")),s.a.createElement("div",{className:"footer-line"},s.a.createElement("h4",null,"Made with"),s.a.createElement("p",{className:"small-p"},"React"),s.a.createElement("p",{className:"small-p"},"React-scroll"),s.a.createElement("p",{className:"small-p"},"Material-UI")))}}]),t}(n.Component);var M=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(b,null),s.a.createElement(w,null),s.a.createElement(k,null),s.a.createElement(A,null),s.a.createElement(C,null),s.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},65:function(e,t,a){},71:function(e,t,a){e.exports=a(177)},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.65bee076.chunk.js.map