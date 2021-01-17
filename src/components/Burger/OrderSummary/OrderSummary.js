import React, { Component } from "react";

import Container from '../../../hoc/Container';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    
    componentWillUpdate() {
        console.log('[OrderSummary] willUpdate');
    }
    
    
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(ingKey => {
            return (
                <li key={ingKey}>
                    <span style={{transform: 'capitalize'}}>{ingKey}</span>: {this.props.ingredients[ingKey]}
                </li>
            );
        });

        return (
            <Container>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><b>Total Price: ${this.props.price.toFixed(2)}</b></p>
            <p>Continuous to Checkout?</p>
            <Button
                btnType='Danger'
                clicked={this.props.purchaseCancelled}
                >CANCEL
            </Button>
            <Button
                btnType='Success'
                clicked={this.props.purchaseContinued}
                >CONTINUE
            </Button>
        </Container>
        );
    }
}

export default OrderSummary;