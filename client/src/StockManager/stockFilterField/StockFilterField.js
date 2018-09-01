import React, {Component} from 'react';

import classes from './StockFilterField.css';
import FilterBit from './filterBit/filterBit';

const debounce = require('lodash/debounce');


class stockFilterField extends Component {

    constructor() {
        super();

        this.state = {
            input: '',
        };

        this.onFilterChangeHandler = debounce(this.onFilterChangeHandler, 600);
    }


    onFilterChangeHandler = (event) => {
        let input = (event.target.value || '').toLowerCase();
        let filters = input.split(',').map((f) => f.trim()).filter((f) => f !== '');

        this.props.onChangeHandler(filters);

        // Remove the string from the input after it is shown as a bit
        this.setState({input: ''});
    };


    onFilterChange = (event) => {
        event.persist();
        this.setState({input: event.target.value});
        this.onFilterChangeHandler(event);
    };


    onKeyDown = (event) => {
        if (event.keyCode === 8 && this.props.filters.length > 0) {

            // Remove the last filter in filters arr.
            this.props.remove(this.props.filters[this.props.filters.length - 1]);
        }
    };


    render() {

        let filterBit = [];
        if (this.props.filters !== '') {
            filterBit = this.props.filters.map((filter, idx) => (
                <FilterBit label={filter}
                           key={`filter__${idx}`}
                           remove={this.props.remove.bind(null, filter)}/>
            ));
        }


        return (
            <div className={classes.FilterBitWrapper}>

                <div className={classes.BitList}>
                    {filterBit}
                </div>

                <input className={classes.Input}
                       onKeyDown={this.onKeyDown}
                       type='text'
                       value={this.state.input}
                       onChange={this.onFilterChange}
                       placeholder={`Filter by Stock Id(use ',' as separator)`}/>
            </div>
        )
    }
};

export default stockFilterField;