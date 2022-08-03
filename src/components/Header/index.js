import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function Header(props) {
   return (
      <header className="flex-row justify-content-top px-1">
         <h1>Patrick Ciongoli</h1>
         <img src={coverImage} alt="wooden background"></img>
         {props.children}
      </header>
   );
}

export default Header;
