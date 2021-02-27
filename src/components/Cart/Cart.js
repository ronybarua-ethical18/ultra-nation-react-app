import React from 'react';

const Cart = (props) => {
    const country = props.cart;
    const totalPopulation = country.reduce((sum, totalPopulation) => sum + totalPopulation.population , 0)
    return (
        <div>
            <h1>Country length: {totalPopulation}</h1>
        </div>
    );
};

export default Cart;