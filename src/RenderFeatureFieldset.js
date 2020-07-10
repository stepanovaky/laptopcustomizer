import React from 'react';
import RenderFeatureLegend from './RenderFeatureLegend';

function RenderFeatureFieldset(props) {
    const { featureHash, feature, options } = props;
    return (
        <fieldset className="feature" key={featureHash}>
          <RenderFeatureLegend feature={feature} />
          {options}
        </fieldset>
      );
}

export default RenderFeatureFieldset;