import React from "react";
import { useParams } from "react-router-dom";

const Display = (props) => {
    const { str } = useParams();








    return (
        <>


            {isNaN(str) ? <h1>The Word is : {str}</h1> : <h1>The Number is : {str}</h1>}

        </>
    )
}
export default Display
