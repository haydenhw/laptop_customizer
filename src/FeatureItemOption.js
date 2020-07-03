import React from 'react';
import slugify from 'slugify';


function FeatureItemOption(props) {
  return (
    <div key={slugify(props.feature) + 'abc'} className="feature__item">
      <input
        type="radio"
        id={props.itemHash}
        className="feature__option"
        name={slugify(props.feature)}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label htmlFor={props.itemHash} className="feature__label">
        {props.itemName} ({props.itemCost})
      </label>
    </div>
  );
}

export default FeatureItemOption;
