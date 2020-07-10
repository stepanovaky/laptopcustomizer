import React from 'react';
import CurrencyFormat from './CurrencyFormat';

function RenderSummary(props) {
    const { featureHash, feature, selectedOptionName, selectedOptionCost } = props;
    return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOptionName}</div>
          <div className="summary__option__cost">
            <CurrencyFormat amount={selectedOptionCost} />
          </div>
        </div>
      );
}

export default RenderSummary;
