import React from 'react';
import SummaryItem from "./SummaryItem";

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

function SummaryList(props) {
  return Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selected[feature];

    return (
      <SummaryItem
        key={featureHash}
        feature={feature}
        selectedOptionName={selectedOption.name}
        selectedOptionCost={USCurrencyFormat.format(selectedOption.cost)}
      />
    );
  });
}

export default SummaryList;
