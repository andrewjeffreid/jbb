import { useState } from 'react';

import Feed from './Feed';
import CreateGoal from './CreateGoal';
import UpdateGoal from './UpdateGoal';

function Home(props) {

    const [toggleUpdate, setToggleUpdate] = useState([false]);

    return (
        <div>
            <Feed user={props.user} toggleUpdate={toggleUpdate} setToggleUpdate={setToggleUpdate} />
            <div className="cuGoal">
                <CreateGoal user={props.user} toggleUpdate={toggleUpdate} setToggleUpdate={setToggleUpdate} />
                <UpdateGoal user={props.user} toggleUpdate={toggleUpdate} setToggleUpdate={setToggleUpdate} />
            </div>
        </div>
    )
}

export default Home;
