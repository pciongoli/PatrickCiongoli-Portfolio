import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
   // Replace links with deployed projects and GitHub repos
   const [projects] = useState([
      {
         name: "PC-MVC-TechBlog",
         description: "Model-View-Controller TechBlog",
         link: "https://secret-falls-79420.herokuapp.com/",
         repo: "https://github.com/pciongoli/PC-MVC-TechBlog",
      },
      {
         name: "pc-BudgetTracker",
         description: "MERN Stack",
         link: "https://gentle-hamlet-11355.herokuapp.com/",
         repo: "https://github.com/pciongoli/pc-BudgetTracker",
      },
      {
         name: "deep-thoughts",
         description: "MERN Stack",
         link: "https://desolate-tundra-35458.herokuapp.com/",
         repo: "https://github.com/pciongoli/deep-thoughts",
      },
      {
         name: "zookeeper",
         description: "REACTT",
         link: "https://serene-eyrie-17311.herokuapp.com/",
         repo: "https://github.com/pciongoli/zookeeper",
      },
      // {
      //    name: "photo-port",
      //    description: "MERN Stack",
      //    link: "https://github.com",
      //    repo: "https://github.com/pciongoli/photo-port",
      // },
   ]);

   return (
      <div>
         <div className="flex-row">
            {projects.map((project, idx) => (
               <Project project={project} key={"project" + idx} />
            ))}
         </div>
      </div>
   );
}

export default Portfolio;
