import React from "react";

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type:'salad' },
    { label: 'Cheese', type:'cheese' },
    { label: 'Bacon', type:'bacon' },
    { label: 'Meat', type:'meat' }
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <b>${props.price.toFixed(2)}</b></p>
            <button>Reset the ingredients</button>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button
                className={classes.OrderButton}
                disabled={!props.purchaseable}
                onClick={props.ordered}
                >ORDER NOW
            </button>
        </div>
    );
};

export default buildControls;