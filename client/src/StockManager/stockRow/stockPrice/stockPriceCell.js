import React from 'react';

import classes from './stockPriceCell.css';


const stockPriceCell = (props) => {

    const {price, status = ''} = props;
    const imgSrc = require(`../../../assets/icons/${status.toLowerCase()}.png`);
    const addedClasses = [classes.Price, status.toLowerCase() === 'up' ? classes.Up : classes.Down];

    return (
        <div className={classes.Status}>
            <span className={addedClasses.join(' ')}>{price}</span>
            <img src={imgSrc} className={classes.StatusIcon} alt={`Stock Arrow ${status}`}></img>
        </div>
    )
};


export default stockPriceCell;