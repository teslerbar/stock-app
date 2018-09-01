import React, {Component} from 'react';

import subscribeToStock from '../api/subscribeToStock';
import classes from './StockManager.css';
import StockRow from './stockRow/stockRow';
import StockFilterField from './stockFilterField/StockFilterField';


class StockManager extends Component {

    constructor() {
        super();

        this.state = {
            stocks: new Map(),
            filters: [],
        };


        subscribeToStock((data) => {

            const stocksCopy = new Map(this.state.stocks);

            data.forEach((stock) => {
                stocksCopy.set(stock.id, stock);
            });

            this.setState({stocks: stocksCopy});
        });
    }


    onFilterChangeHandler = (filters) => {
        this.setState({
            filters: [...this.state.filters, ...filters],
        });
    };


    onFilterRemove = (id) => {
        if (id === undefined) return;
        const filters = this.state.filters.filter((f) => f !== id);

        this.setState({filters: filters});
    };


    genStockList = () => {
        const stockList = [];
        const filters = this.state.filters;

        this.state.stocks.forEach((val) => {

            if (filters.length > 0) {
                if (filters.indexOf(val.id.toLowerCase()) !== -1) {
                    stockList.push(<StockRow {...val} key={val.id}></StockRow>);
                }
            } else {
                stockList.push(<StockRow {...val} key={val.id}></StockRow>);
            }
        });

        return stockList;
    };


    render() {

        const stockList = this.genStockList();

        return (
            <div className={classes.StockManager}>
                <StockFilterField filters={this.state.filters}
                                  onChangeHandler={this.onFilterChangeHandler}
                                  remove={this.onFilterRemove}/>

                <table className={classes.Table}>
                    <tbody>
                    <tr className={classes.TableHeader}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>

                    {stockList}

                    </tbody>
                </table>
            </div>
        );
    }
}


export default StockManager;