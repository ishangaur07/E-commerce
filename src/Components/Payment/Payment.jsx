import React, { useEffect, useState } from 'react'
import "./Payment.css";
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getBasketTotal } from '../StateProvider/Reducer';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios.post(
                `/payments/create?total=${getBasketTotal(basket) * 100}`
            );
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)
    console.log('👱', user)

    const handleSubmit = async (e) => {
        // Do all the fancy stripe...
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // Payment intent = payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type:'EMPTY_BASKET'
            })
            navigate('/orders')
        })

    }

    const handleChange = (e) => {
        // Do all the fancy stripe...
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }
    return (
        <div className='payment'>
            <div className='payment_container'>
                {/* Payment section - delivery address */}
                <h1>
                    Checkout {<Link to="/checkout">{basket?.length} Items</Link>}
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                        <div className="payment_address">
                            <p>{user?.email}</p>
                            <p>1-C Royal, Shipra Suncity</p>
                            <p>Ghaziabad</p>
                        </div>
                    </div>
                </div>
                {/* Payment section -Review Items */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            ></CheckoutProduct>
                        ))}
                    </div>
                </div>
                {/* Payment section - Payment method */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/* Stipe Magic will */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}></CardElement>

                            <div className='substotal'>
                                <div className="totalPrice">
                                    <p> Subtotal ({basket.length} Items): <strong>{getBasketTotal(basket)}</strong></p>
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>
                            </div>
                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
