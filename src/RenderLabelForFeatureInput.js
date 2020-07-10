import React from 'react';
import CurrencyFormat from './CurrencyFormat';

function RenderLabelForFeatureInput(props) {
    const { itemHash, itemName, itemCost } = props;
    return (<label htmlFor={itemHash} className="feature__label">
    {itemName} <CurrencyFormat amount={itemCost} />
  </label>

    )
}

export default RenderLabelForFeatureInput;