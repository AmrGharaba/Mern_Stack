import React from "react";
import { useParams } from "react-router-dom";

const Word = (props) => {
    const { text, textColor, backColor } = useParams();




    return (
        <>
            <h1 style={{ color: textColor, backgroundColor: backColor }}>{text}</h1>

        </>
    )
}
export default Word