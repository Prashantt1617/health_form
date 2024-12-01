import React from "react";
import "./../styles/ques.css";
const Previous = ({ handlePreviousQuestion, disabled }) => {
    return (
        <span
            onClick={handlePreviousQuestion}
            className={`cursor-pointer text-2xl text-blue-600 ${disabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
            title="Previous"
        >
            <i class="ri-arrow-left-circle-line" style={{ fontSize: "24px", color: "red" }}></i>
        </span>
    );
};

export default Previous;
