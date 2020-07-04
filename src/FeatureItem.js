import React from 'react';
import slugify from 'slugify';
import FeatureOptionList from "./FeatureOptionList";


function FeatureItem(props) {
  return (
    <fieldset className="feature" key={slugify(props.name) + 'child'}>
      <legend className="feature__name">
        <h3>{props.name}</h3>
      </legend>
      <FeatureOptionList
        features={props.features}
        feature={props.feature}
        selectedFeatures={props.selectedFeatures}
        updateFeature={props.updateFeature}
      />
    </fieldset>
  );
}

export default FeatureItem;
