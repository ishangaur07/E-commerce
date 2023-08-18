import React from 'react'
import CurrencyFormat from 'react-currency-format';
import "./Subtotal.css";
function Subtotal() {
  return (
    <div className='substotal'>
      <CurrencyFormat
      renderText={(value)=>(
        <>
        <p>
            {/* Part of homework */}
            Subtotal (0 items):
            <strong>0</strong>
        </p>
        <small className='subtotal_gift'>
            <input type="checkbox" />This order contains a gift
        </small>
        </>
      )}
      decimalScale={2}
      value={0} // Part of the homework
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
      >

      </CurrencyFormat>
        <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal
