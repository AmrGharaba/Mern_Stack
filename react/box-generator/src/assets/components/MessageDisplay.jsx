import react, { useState } from 'react';


const MessageDisplay = (props) => {
    const colorArray = props.colorArray;


    return (
        <>
            <ul style={{ listStyle: 'none' }}>
                {colorArray.map((item, i) =>
                    <li key={i}>{item}
                        <div style={{
                            height: "20px",
                            width: "20px",
                            backgroundColor: item,

                        }}>
                        </div>
                    </li>)}
            </ul>
        </>
    );
};

export default MessageDisplay;

