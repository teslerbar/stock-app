import React from 'react';

import classes from './filterBit.css';


const filterBit = (props) => {

    return (
        <div className={classes.FilterBit}>
            <p className={classes.Label}>{props.label}</p>
            <img className={classes.RemoveIcon}
                 onClick={props.remove}
                 src={require(`../../../assets/icons/remove.svg`)}
                 alt='Remove icon'></img>
        </div>
    )
};


export default filterBit;