import React from 'react';

const IndividualScores = (props) => {

    var eachScore = props.score.map((eachScore) => 
        <li>
            {eachScore.name} with an impressive score of {eachScore.topScore}!
        </li>
    )

    return (
        <ol className="score-list">{eachScore}</ol>
    )
}

export default IndividualScores;