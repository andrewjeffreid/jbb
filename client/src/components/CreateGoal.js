import { useState } from 'react';

function CreateGoal(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const fetchCreateGoal = () => {
        const data = {
            userId: props.user._id,
            username: props.user.username,
            title: title,
            description: description,
        };

        const requestOptions = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        };

        fetch(`${process.env.REACT_APP_URL}/api/goals/`, requestOptions)
        .then(response => response.text())
        .then(result => {props.setToggleUpdate(!props.toggleUpdate)})
        .catch(error => console.log('error', error));
    }

    return (
        <div className="createGoal">
            <h2>Create Goal</h2>
            <label>Title:
                <input onChange={(e) => setTitle(e.target.value)} type="text" />
            </label>
            <label>Description:
                <textarea onChange={(e) => setDescription(e.target.value)} />
            </label>
            <button onClick={fetchCreateGoal}>Create Goal</button>
        </div>
    )
}

export default CreateGoal;