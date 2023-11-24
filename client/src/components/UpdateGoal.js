import { useState, useEffect } from 'react';

function UpdateGoal(props) {

    const [goalId, setGoalId] = useState('');
    const [status, setStatus] = useState('');
    const [userGoals, setUserGoals] = useState([]);

    useEffect(() => {

        const queryStr = `?userId=${props.user._id}&status=Created`;

        const requestOptions = {
            method: 'GET',
            headers: {"Content-Type": "application/json"},
        };

        fetch(`${process.env.REACT_APP_URL}/api/goals${queryStr}`, requestOptions)
        .then(response => response.json())
        .then(result => {setUserGoals(result);})
        .catch(error => console.log('error', error));
        
    }, [props.user._id, props.toggleUpdate]);

    const fetchUpdateGoal = () => {

        const data = {
            goalId: goalId,
            userId: props.user._id,
            status: status,
        };

        const requestOptions = {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        };

        fetch(`${process.env.REACT_APP_URL}/api/goals/`, requestOptions)
        .then(response => response.text())
        .then(result => props.setToggleUpdate(!props.toggleUpdate))
        .catch(error => console.log('error', error));
    }

    return (
        <div className="updateGoal">
            <h2>Update Goal</h2>
            <select onChange={(e) => setGoalId(e.target.value)} value={goalId}> 
                <option>Select a goal...</option>
                {userGoals.map(goal => {return <option key={goal._id} value={goal._id}>{goal.title}</option>})}
            </select>
            <div>
                <label>Succeeded
                    <input type="radio" name="status" onChange={(e) => {setStatus(e.target.value)}} value="Succeeded"/>
                </label>
                <label>Failed
                    <input type="radio" name="status" onChange={(e) => {setStatus(e.target.value)}} value="Failed"/>
                </label>
            </div>
            <button onClick={fetchUpdateGoal}>Update Goal</button>
        </div>
    )
}

export default UpdateGoal;