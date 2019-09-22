// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const buttonText = { text: "Click on Me!" };
    const labelText = "Enter name: "

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            {/* <button style="background-color: blue; color: white;">Submit</button> */}
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText.text}
            </button>
        </div>
    );
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);