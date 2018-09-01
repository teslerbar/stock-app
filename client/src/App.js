import React, {Component} from 'react';

import './App.css';
import StockManager from './StockManager/StockManager';

class App extends Component {

    render() {
        return (
            <div className="App">
                <StockManager/>
            </div>
        );
    }
}

export default App;