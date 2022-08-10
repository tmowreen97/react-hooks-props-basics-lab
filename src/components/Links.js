import React from "react";

function Links(props){
  return (
    <div id="links">
      <h3>Links</h3>
      <a href={props.github}>https://github.com/liza</a>
      <a href={props.link}>https://www.linkedin.com/in/liza/</a>
    </div>
  )
}

export default Links;