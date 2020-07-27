import React from 'react';

class SubmitPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topScore: props.topScore,
            name: ''
        };
    }

    newName(e) {
        this.setState({
          name: e.target.value
        });
    }

    submitScore(e) {
        serverCommunicator.submitScore(this.state)
    }

    render() {
        return(
            <div>
                <form id='form'>
                    <input className="user-name" type="text" placeholder="Enter Name" value={this.name} onChange={this.newName.bind(this)}></input>
                    <br></br>
                    <button className="submit-button" type="submit" onClick={this.submitScore.bind(this)}>Submit Score</button>
                </form>
            </div>
        )
    }
}

var serverCommunicator = {
    submitScore: (data) => {
        $.ajax({
          url: 'http://localhost:3020/scores/submit',
          method: 'POST',
          data: data,
          success: (res) => {
            console.log('POST request was made', res);
          },
          error: (err) => {
            console.log('POST Req Failed ', err);
        }
      });
    }
};

export default SubmitPage;