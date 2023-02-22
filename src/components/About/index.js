import React from "react";
import profileImage from "../../assets/small/portraits/4.jpg";

function About() {
   return (
      <section className="my-5">
         <div className="my-2">
            <div className="profile-img my-6">
               <img src={profileImage} alt="Picture of Patrick Ciongoli"></img>
            </div>
            <p>
               Hey there, I'm Patrick - a passionate Full Stack Web Developer
               who loves working with the MERN stack! I graduated from the
               intensive Full Stack Web Development program at Rutgers
               University Bootcamp and I am thrilled to share my skills with the
               world.
            </p>
            <p>
               Web development is more than just a job to me; it's a creative
               outlet that allows me to build something amazing from nothing. I
               love nothing more than designing and developing stunning,
               responsive applications that captivate users and provide them
               with exceptional experiences.
            </p>

            <p>
               If you're looking for a skilled and dedicated Full Stack Web
               Developer who is passionate about delivering top-notch solutions,
               then look no further! I am excited to discuss how I can help take
               your project to the next level. Let's connect and bring your
               vision to life!
            </p>
         </div>
      </section>
   );
}

export default About;
