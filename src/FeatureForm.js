import React from 'react';
import FeatureList from "./FeatureList";

function FeatureForm(props) {
  if (!props.features) return <></>;

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      <FeatureList features={props.features} selectedFeatures={props.selectedFeatures} updateFeature={props.updateFeature}/>
    </form>
  );
}

export default FeatureForm;
