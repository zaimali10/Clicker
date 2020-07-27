import React from 'react';
import GameWindow from './GameWindow.jsx';
import Scoreboard from './Scoreboard.jsx';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className ="wholething">
                <Scoreboard />
                <GameWindow />
            </div>
        )
    }

};

export default App;