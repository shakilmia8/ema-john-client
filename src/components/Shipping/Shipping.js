import React from 'react';
import { useForm } from "react-hook-form";
import './Shipping.css';
import useAuth from '../../hooks/useAuth';
import { getStoredCart, clearTheCart } from '../../utilities/fakedb';

const Shipping = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;
        console.log(data)

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Order Processed Successfully')
                    clearTheCart();
                    reset();
                }
            })
    };
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="Phone" defaultValue="" {...register("phone")} />
                {errors.email && <span className='error'>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;