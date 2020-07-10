import React from 'react';
import RenderCustomizeLaptopForm from './RenderCustomizeLaptopForm';
import RenderSummaryCart from './RenderSummaryCart';

function RenderMainLaptopFormAndSummaryCart (props) {
    const { features, summary, total } = props;
    return (
        <main>
          <RenderCustomizeLaptopForm features={features} />
          <RenderSummaryCart summary={summary} total={total} />
        </main>
    )
}

export default RenderMainLaptopFormAndSummaryCart;