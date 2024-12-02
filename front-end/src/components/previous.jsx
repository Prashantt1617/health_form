import React from "react";
import "./../styles/ques.css";
import { backarrow } from "./svg";
const Previous = ({ handlePreviousQuestion, disabled }) => {
    return (
        <span
            onClick={handlePreviousQuestion}
            className={`cursor-pointer text-2xl text-blue-600 ml-5 ${disabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
            title="Previous"
        >
            {backarrow}
        </span>
    );
};

export default Previous;
