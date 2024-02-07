import React, { useState } from 'react';

const PersonCard = (props) => {
    const { firstName, lastName, hairColor, age } = props;
    const ageNumber = parseInt(age);
    const [currentAge, setCurrentAge] = useState(ageNumber);
    const IncrementAge = () => {
        setCurrentAge(currentAge + 1);
    };
    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button type="button" className="btn btn-primary" onClick={IncrementAge}>Click Me</button>
        </div>
    );
}

export default PersonCard;
