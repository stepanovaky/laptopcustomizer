import React from 'react';
import RenderLabelForFeatureInput from './RenderLabelForFeatureInput';
import RenderFeatureInput from './RenderFeatureInput';
import slugify from 'slugify';

function AddKeyAndRenderFeatureOptions(props) {
    const { feature, itemName, selectedItemName, updateFeature, itemCost, item } = props;
    const itemHash = slugify(JSON.stringify(item));
    return (
      <div key={itemHash} className="feature__item">
        <RenderFeatureInput 
        itemHash={itemHash} 
        feature={feature} 
        itemName={itemName}
        selectedItemName={selectedItemName}
        updateFeature={updateFeature}
        item={item} />
        <RenderLabelForFeatureInput 
        itemHash={itemHash} 
        itemName={itemName} 
        itemCost={itemCost} />
      </div>
    );
}

export default AddKeyAndRenderFeatureOptions;