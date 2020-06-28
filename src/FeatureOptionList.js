import React from 'react';
import slugify from "./FeatureForm";
import FeatureItemOption from "./FeatureItemOption";

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

function FeatureOptionList(props) {

  return props.features[props.feature].map(item => {
    const itemHash = slugify(JSON.stringify(item));
    return (
      <FeatureItemOption
        feature={props.feature}
        key={itemHash}
        onChange={(e) => props.updateFeature(props.feature, item)}
        checked={item.name === props.selectedFeatures[props.feature].name}
        itemName={item.name}
        itemCost={USCurrencyFormat.format(item.cost)}
      />
    );
  });
}

export default FeatureOptionList;
