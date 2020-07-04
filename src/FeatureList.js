import React from 'react';
import FeatureItem from "./FeatureItem";

function FeatureList(props) {
  return Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    return (
      <FeatureItem
        name={feature}
        updateFeature={props.updateFeature}
        key={featureHash}
        features={props.features}
        selectedFeatures={props.selectedFeatures}
        feature={feature}
      />
    );
  });
}

export default FeatureList;
