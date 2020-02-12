import React, {Component} from 'react';
import { preloadedCoffees } from "./data";

const CoffeeContext = React.createContext();

class CoffeeProvider extends Component {
    state = {
        coffees: [],
    }

    componentDidMount() {
        this.setCoffees();
    }

    setCoffees = () => {
        let coffees = [];
        preloadedCoffees.forEach(item => {
            const singleItem = {...item};
            coffees = [...coffees, singleItem];
        })

        this.setState(()=>{
            return { coffees }
        })
    }

    moreCoffee = (name, price) => {
        let coffees = [...this.state.coffees];
        coffees.push({title: name, id: coffees.length, price: price, img: 'img/coffee_1.png'})
        this.setState({
            coffees: coffees
        })
    }

    removeItem = (id) => {
        let filtered = this.state.coffees.filter((el) => {return el.id !== id})
        this.setState({
            coffees: filtered
        })
    }

    render() {
        return (
            <CoffeeContext.Provider value={{
                ...this.state,
                moreCoffee: this.moreCoffee,
                removeItem: this.removeItem,
            }}
            >
                {this.props.children}
            </CoffeeContext.Provider>
        );
    }
}

const CoffeeConsumer = CoffeeContext.Consumer;

export { CoffeeProvider, CoffeeConsumer };