import React from 'react';
import SubmitPage from './SubmitPage.jsx'

class GameWindow extends React.Component {
    constructor() {
        super();
        this.state = {
            currentScore: 0,
            topScore: 0,
            view: 'game'
        }
        this.buttonClicked = this.buttonClicked.bind(this);
        this.changeView = this.changeView.bind(this);
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

    changeView(option) {
        this.setState({
            view: option
        });
    }

    renderView() {
        if (this.state.view === 'game') {
            return (
                <div>
                    <div>
                        <button className="score-submit" onClick={() => this.changeView('submit')}>Submit My Score</button>
                    </div>
                    <div>
                        Current Score: {this.state.currentScore}
                        <br></br>
                        Top Score this Round: {this.state.topScore}
                        <br></br>
                        <button className="game-start" onClick={this.gameStart} >Start</button>
                        <button className="the-one-you-want" onClick={this.buttonClicked} >Click</button>
                    </div>
                </div>
            )
        } else if (this.state.view === 'submit') {
            return (
                <div>
                    <button className="back-to-game" onClick={() => this.changeView('game')}>Back To Game</button>
                    <br></br>
                    <SubmitPage topScore={this.state.topScore}/>
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