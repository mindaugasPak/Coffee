import React, { Component } from 'react';
import Product from "./Product";
import { CoffeeConsumer } from "../context";

export default class ProductList extends Component {
    render() {
        return (
            <div className="row">
                <CoffeeConsumer>
                    {(value) => {
                        return value.coffees.map( product => {
                            return <Product key={product.id} product={product}/>
                        })
                    }}
                </CoffeeConsumer>
            </div>
        );
    }
}
