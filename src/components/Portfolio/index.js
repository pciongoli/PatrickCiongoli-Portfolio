import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
   // Replace links with deployed projects and GitHub repos
   const [projects] = useState([
      {
         name: "Tic-Tac-Code",
         description: "Multiplayer Tic-Tac-Toe Game",
         link: "https://tic-tac-code.herokuapp.com/",
         repo: "https://github.com/pciongoli/tic-tac-code",
      },
      // {
      //    name: "PC-MVC-TechBlog",
      //    description: "Model-View-Controller TechBlog",
      //    link: "https://secret-falls-79420.herokuapp.com/",
      //    repo: "https://github.com/pciongoli/PC-MVC-TechBlog",
      // },
      {
         name: "silver-giggle",
         description: "REACT, MERN Stack",
         link: "https://fathomless-peak-27221.herokuapp.com/",
         repo: "https://github.com/ChristanFox/silver-giggle",
      },
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
