import React from 'react';

import classes from './stockRow.css';
import StockPrice from './stockPrice/stockPriceCell';


const stockRow = (props) => {

    const {id, name} = props;

    return (
        <tr>
            <th className={classes.Th}>{id}</th>
            <th className={classes.Th}>{name}</th>
            <th className={classes.Th}><StockPrice {...props}/></th>
        </tr>
    )
};


export default stockRow;