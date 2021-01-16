import React from "react";

import classes from './BuildControl.css'

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button 
                className={classes.Less}
                onClick={props.removed}
                disabled={props.disabled.less}
                >Less
            </button>
            <button 
                className={classes.More}
                onClick={props.added}
                disabled={props.disabled.more}
                >More
            </button>
        </div>
    );
};

export default buildControl;