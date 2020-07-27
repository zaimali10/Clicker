import React from 'react';
import $ from 'jquery';
import IndividualScores from './IndividualScore.jsx'

class Scoreboard extends React.Component {
    constructor() {
        super();
        this.state = {
            scores: []
        };
    }


    componentDidMount() {
        serverCommunicator.getScores()
            .done(data => {
                this.setState({
                    scores: data
                })
            });
        };


    render() {
        return (
            <div className="scoreboard">
                <h1 className="scoreboard-title">Scoreboard</h1>
                <IndividualScores className="scores" score={this.state.scores}/>
            </div>
        )
    }
}

var serverCommunicator = {
    getScores: () => {
      console.log('getScores was invoked...');
      return $.ajax({
        url: `http://localhost:3020/scores/retrieve`,
        method: 'GET',
        success: (data) => {
          console.log('We got the Scores', data);   
          return data;
        },
        error: (err) => {
          console.log('Failed to GET from server', err);
        }
      });
    }
  };


export default Scoreboard;