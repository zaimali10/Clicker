import React from 'react';
import $ from 'jquery';

class SubmitPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topScore: props.topScore,
            name: '',
            password: ''
        };
        this.validInputs = this.validInputs.bind(this)
        this.submitScore = this.submitScore.bind(this)
    }

    newName(e) {
        this.setState({
          name: e.target.value
        });
    }

    newPassword(e) {
        this.setState({
          password: e.target.value
        });
    }

    validInputs() {
        return (
          this.state.name.length < 8 && this.state.name.length > 2 && this.state.password.length > 1
        )
      }

    submitScore(e) {
        if (!this.validInputs()) {
            return
        }
        serverCommunicator.submitScore(this.state);
    }

    render() {
        return(
            <div>
                <form id='form'>
                    <br />
                    <input className="user-name" type="text" placeholder="Two to Eight Character Name" value={this.name} onChange={this.newName.bind(this)}></input>
                    <br></br>
                    <input className="user-password" type="text" placeholder="Password (feature coming soon!)" value={this.password} onChange={this.newPassword.bind(this)}></input>
                    <br></br>
                    <br />
                    <button className="submit-button" disabled={!this.validInputs()} onClick={this.submitScore.bind(this)}>Submit Score</button>
                </form>
            </div>
        )
    }
}

var serverCommunicator = {
  submitScore: (data) => {
      $.ajax({
        url: '/scores/submit',
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