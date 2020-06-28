import React from 'react';

function SummaryItem(props) {
  return (
    <div className="summary__option" key={props.featureHash}>
      <div className="summary__option__label">{props.feature} </div>
      <div className="summary__option__value">{props.selectedOptionName}</div>
      <div className="summary__option__cost">
        {props.selectedOptionCost}
      </div>
    </div>
  )
}

export default SummaryItem;
