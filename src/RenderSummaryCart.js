import React from 'react';
import CurrencyFormat from './CurrencyFormat';

function RenderSummaryCart(props) {
    const { summary, total } = props;
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                <CurrencyFormat amount={total} />
              </div>
            </div>
          </section>
    )
}

export default RenderSummaryCart;