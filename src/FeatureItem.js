import React from 'react';
import slugify from 'slugify';


function FeatureItem(props) {
  return (
    <fieldset className="feature" key={slugify(props.name) + 'child'}>
      <legend className="feature__name">
        <h3>{props.name}</h3>
      </legend>
      {props.children}
    </fieldset>
  );
}

export default FeatureItem;
