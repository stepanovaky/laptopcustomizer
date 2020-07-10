import React from 'react';

function RenderCustomizeLaptopForm(props) {
    const { features } = props;
    return(
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
    )
}

export default RenderCustomizeLaptopForm;