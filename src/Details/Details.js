import React from 'react';

const details = ( props ) => {

  return (
    
      <div className="col-12">
        <ul>
          <li><strong> Availability: {props.availability} </strong></li>
          <li><a href={"mailto:" + props.email}>{props.email}</a></li>
          <li>{props.mobile}</li>
          <li>{props.phone}</li>
          <li><a href={"/documents/chris_stevens_webdev_contract_DOC_" + props.cvlink + ".docx"} target="_blank" rel="noopener noreferrer">{props.cvtext}</a></li>
        </ul>
      </div>
   
  )
};

export default details;