import React from "react";
import profileImage from "../../assets/small/portraits/4.jpg";

function About() {
   return (
      <section className="my-5">
         <div className="my-2">
            <div className="profile-img my-6">
                  <img src={profileImage} alt="Picture of me"></img>
            </div>
            <p>
               Ambitious full stack web developer with a large spectrum of
               knowledge in both front and backend languages and procedures. My
               goal is to continue building my portfolio with new and exciting
               projects that can fully capture my passion for this field, as
               well as allow me to continue learning along the way.
            </p>
            <p>
               Recieved my certificate in full stack web devolopment from
               Rutgers University Bootcamp and have been coding ever since!
            </p>
            <p>
               Thank you so much for viewing my profile and please enjoy taking
               a look at some of my deployed project! 🙂
            </p>
         </div>
      </section>
   );
}

export default About;
