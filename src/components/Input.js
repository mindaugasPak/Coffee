import React, { Component } from 'react';
import { CoffeeConsumer } from "../context";

export default class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            price: ''
        }
    }

    handleChange(event) {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <CoffeeConsumer>
                {(values) => (
                    <div className="billboard">
                        <input type="text"
                               name="name"
                               placeholder="Name your coffee"
                               value={this.state.name}
                               onChange={(e) => this.handleChange(e)}
                        />
                        <input type="text"
                               name="price"
                               placeholder="Enter the price"
                               value={this.state.price}
                               onChange={(e) => this.handleChange(e)}
                        />
                        <button type="submit"
                                onClick={() => values.moreCoffee(this.state.name, this.state.price)}
                        >
                            Submit
                        </button>
                    </div>
                )}
            </CoffeeConsumer>
        )
    }
}