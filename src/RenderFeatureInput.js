import React from 'react';
import slugify from 'slugify';

function RenderFeatureInput(props) {
    const { itemHash, feature, itemName, selectedItemName, item, updateFeature} = props;
    return (
        <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={itemName === selectedItemName}
              onChange={e => updateFeature(feature, item)}
            />

    )
}

export default RenderFeatureInput;