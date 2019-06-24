import React from 'react';

const Home = (props) => {
    return (
        <div>
            {console.log(props)}
            <p>{props._texto}</p>
        </div>
    );
};

export default Home;