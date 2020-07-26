import React from 'react';

class GameWindow extends React.Component {
    constructor() {
        super();
        this.state = {
            currentScore: 0,
            topScore: 0,
            view: 'game'
        }
        this.buttonClicked = this.buttonClicked.bind(this);
        this.gameReset = this.gameReset.bind(this);
        this.gameStart = this.gameStart.bind(this);
    }

    buttonClicked(event) {
        this.setState({
            currentScore: this.state.currentScore + 1,
        });
    }
    
    gameReset() {
        setTimeout(
            function() {
                if (this.state.currentScore > this.state.topScore) {
                    this.setState({ topScore: this.state.currentScore })
                }
                this.setState({ currentScore: 0 });
            }
            .bind(this),
            10000
        );
    }

    gameStart() {
        this.setState({
            currentScore: 0
        })
        this.gameReset();
    }

    renderView() {
        if (this.state.view = 'game') {
            return (
                <div>
                    Current Score: {this.state.currentScore}
                    <br></br>
                    Top Score this Round: {this.state.topScore}
                    <br></br>
                    <button className="game-start" onClick={this.gameStart} >Start</button>
                    <button className="the-one-you-want" onClick={this.buttonClicked} >Click</button>
                </div>
            )
        } else if (this.state.view = 'submit') {
            return (
                <div>
                    This is submit page
                </div>
            )
        }
    }

    render() {
        return(
            <div>
                {this.renderView()}
            </div>
        );
    }
}

export default GameWindow;