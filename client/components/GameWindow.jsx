import React from 'react';
import SubmitPage from './SubmitPage.jsx';

class GameWindow extends React.Component {
    constructor() {
        super();
        this.state = {
            currentScore: 0,
            topScore: 0,
            view: 'game',
            playing: false
        }
        this.buttonClicked = this.buttonClicked.bind(this);
        this.changeView = this.changeView.bind(this);
        this.gameReset = this.gameReset.bind(this);
        this.gameStart = this.gameStart.bind(this);
    }

    buttonClicked(event) {
        this.setState({
            currentScore: this.state.currentScore + 1
        });

        function moveElmRand(elm) {
            elm.style.position ='absolute';
            elm.style.top = Math.floor(Math.random()*90+5)+'%';
            elm.style.left = Math.floor(Math.random()*90+5)+'%';
        }

        moveElmRand(event.target)
    }
    
    gameReset() {
        setTimeout(
            function() {
                if (this.state.currentScore > this.state.topScore) {
                    this.setState({ topScore: this.state.currentScore })
                }
                this.setState({ currentScore: 0, playing: false });
            }
            .bind(this),
            10000
        );
    }

    gameStart() {
        this.setState({
            currentScore: 0,
            playing: true
        })
        this.gameReset();
    }

    changeView(option) {
        this.setState({
            view: option
        });
    }

    playingStarted() {
        return (
            this.state.playing === true
        )
    }

    renderView() {

        if (this.state.view === 'game') {
            return (
                <div className="gamewindow">
                    <div>
                        <button className="score-submit" onClick={() => this.changeView('submit')}>Submit My Score</button>
                    </div>
                    <div className="scoreholder">
                        <h1 className="currentscoretitle">
                        Current Score: {this.state.currentScore}
                        </h1>
                        <h1 className="topscoretitle">
                        Top Score this Round: {this.state.topScore}
                        </h1>
                    </div>
                        <button className="game-start" disabled={this.playingStarted()} onClick={this.gameStart}>Start</button>
                        <div className="game-instructions">
                            Press Start, You Will Have 10 Seconds To Click The Red Circle As Many Times As Possible Before The Time Runs Out. If Your Current Score Is Higher Than Your Top Score, It Will Replace The Top Score Which You Can Submit Using The Submit Page.
                        </div>
                        <br />

                        <button className="the-one-you-want" disabled={!this.playingStarted()} onClick={this.buttonClicked}>
                            {/* space holder for button name */}
                        </button>                    
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