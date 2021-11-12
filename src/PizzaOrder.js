import React from 'react';

export default function PizzaOrder(props){
    const {
        values,
        change,
        submit
    } = props

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue)
      }
    
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    return(
        <div>
        <h1>Order Form</h1>
        <form id='pizza-form' onSubmit={onSubmit}>
            <div>
                <label>Name</label>
            </div>
            <div>
                <input 
                    type='text'
                    id='name-input'
                    name='name'
                    value={values.name}
                    onChange={onChange}
                />
            </div>
            <div>
                <label>Size</label>
            </div>
            <div>
                <select
                    id='size-dropdown'
                    name='size'
                    value={values.size}
                    onChange={onChange}
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
                value='pepperoni'
                onChange={onChange}
                checked={values.pepperoni === 'pepperoni'}
                />
            </div>
            <div>
                <label>Mushroom</label>
                <input
                type='radio'
                name='mushroom'
                value='mushroom'
                onChange={onChange}
                checked={values.mushroom === 'mushroom'}
                />
            </div>
            <div>
                <label>Sausage</label>
                <input
                type='radio'
                name='sausage'
                value='sausage'
                onChange={onChange}
                checked={values.sausage === 'sausage'}
                />
            </div>
            <div>
                <label>Pineapple</label>
                <input
                type='radio'
                name='pineapple'
                value='pineapple'
                onChange={onChange}
                checked={values.pineapple === 'pineapple'}
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
                    value={values.special}
                    onChange={onChange}
                />
            </div>
            <button id='order-button'>Submit</button>
        </form>
        </div>
    )
}