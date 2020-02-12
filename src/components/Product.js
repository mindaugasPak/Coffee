import React, { Component } from 'react';
import { CoffeeConsumer } from "../context";
import './Product.scss';

class Product extends Component {
    render(){
        const { id, title, img, price } = this.props.product;
        return(
            <div className="productList">
                <div className="card">
                    <CoffeeConsumer>
                        {(value) =>(
                            <div className="imageContainer">
                                <img src={img} id={id} alt="coffee" className="product-img"/>
                                <button className="close" onClick={() => value.removeItem(id)}>X</button>
                            </div>
                        )}
                    </CoffeeConsumer>
                    <div className="card-footer">
                        <span>{title}</span>
                        <span>{price}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;