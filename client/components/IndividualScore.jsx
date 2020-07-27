import React from 'react';

const IndividualScores = (props) => {

    var eachScore = props.score.map((eachScore) => 
        <li className="score-list">
            {eachScore.name} with an impressive score of {eachScore.topScore}!
        </li>
    )

    return (
        <ol>{eachScore}</ol>
    )
}

export default IndividualScores;