import React from 'react';

export default function PizzaOrder(props){
    return(
        <div>
        <h1>Order Form</h1>
        <form id='pizza-form'>
            <div>
                <label>Name</label>
            </div>
            <div>
                <input 
                    type='text'
                    id='name-input'
                    name='name'
                    value=''
                />
            </div>
            <div>
                <label>Size</label>
            </div>
            <div>
                <select
                    value=''
                    id='size-dropdown'
                    name='size'
                >
                    <option value=''>--Select Size--</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            </div>
            <div>
                <label>Choose Toppings</label>
            </div>
            <div>
                <label>Pepperoni</label>
                <input
                type='radio'
                name='pepperoni'
                value=''
                />
            </div>
            <div>
                <label>Mushroom</label>
                <input
                type='radio'
                name='mushroom'
                value=''
                />
            </div>
            <div>
                <label>Sausage</label>
                <input
                type='radio'
                name='Sausage'
                value=''
                />
            </div>
            <div>
                <label>Bell pepper</label>
                <input
                type='radio'
                name='bellpepper'
                value=''
                />
            </div>
            <div>
                <label>Special Instructions?</label>
            </div>
            <div>
                <input 
                    type='text'
                    id='special-text'
                    name='special'
                    value=''
                />
            </div>
            <button id='order-button'>Submit</button>
        </form>
        </div>
    )
}