import React from "react";
import { useParams } from "react-router-dom";


const StyledString = () => {
    const { text, textColor, backColor } = useParams();




    return (
        <>
            <h1 style={{ color: textColor, backgroundColor: backColor }}>{text}</h1>

        </>
    )
}
export default StyledString