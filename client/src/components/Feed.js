import { useState, useEffect } from 'react';

function Feed(props) {

    const [goals, setGoals] = useState([]);

    useEffect(() => {

        const requestOptions = {
            method: 'GET',
            headers: {"Content-Type": "application/json"},
        };

        fetch(`${process.env.REACT_APP_URL}/api/goals`, requestOptions)
        .then(response => response.json())
        .then(result => setGoals(result))
        .catch(error => console.log('error', error));
    }, [props.toggleUpdate]);

    return (
        <div className="feed">
            <h2>Feed</h2>
            {goals.map(goal => {return (
            <div key={goal._id}> 
                {goal.username + " "}
                <span className={goal.status.toLowerCase()}>{goal.status.toLowerCase() + " "}</span>
                {goal.title+ " "}
                <span className="date">{new Date(goal.updatedAt).toDateString()}</span>
            </div>)
            })}
        </div>
    )
}

export default Feed;
