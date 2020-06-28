import React from 'react';
import FeatureItem from "./FeatureItem";
import FeatureOptionList from "./FeatureOptionList";

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

function FeatureForm(props) {
  if (!props.features) return null;

  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;

    return (
      <FeatureItem name={feature} key={featureHash}>
        <FeatureOptionList features={props.features} selectedFeatures={props.selectedFeatures} feature={feature}/>
      </FeatureItem>
    );
  });

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
}

export default FeatureForm;
