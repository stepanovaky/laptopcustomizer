import React from 'react';

function RenderFeatureLegend(props) {
    const { feature } = props;
    return (
        <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
    )
}

export default RenderFeatureLegend;