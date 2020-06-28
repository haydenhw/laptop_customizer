import React from 'react';


function FeatureItem(props) {
  return (
    <fieldset className="feature" key={props.hash}>
      <legend className="feature__name">
        <h3>{props.name}</h3>
      </legend>
      {props.children}
    </fieldset>
  );
}

export default FeatureItem;
