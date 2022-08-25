import React from "react";
import profileImage from "../../assets/small/portraits/4.jpg";

function About() {
   return (
      <section className="my-5">
         <div className="my-2">
            <div className="profile-img my-6">
               <img src={profileImage} alt="Picture of me"></img>
            </div>
            <p>Hello and wecome to my website!</p>
            <p>
               My name is Patrick, I am a full stack web developer specializing
               in the MERN stack.
            </p>
            <p>
               Recieved my Certificate in Full Stack Web Devolopment from
               Rutgers University Bootcamp!
            </p>
            <p>
               My goal is to continue building my portfolio with new and
               exciting projects that can fully capture my passion for this
               field, as well as allow me to continue learning and making
               connections along the way!
            </p>
            <p>
               Thank you so much for viewing my profile and please enjoy taking
               a look at some of my deployed projects and dont hesitate to reach
               out! 🙂
            </p>
         </div>
      </section>
   );
}

export default About;
