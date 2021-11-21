import React from "react";

const Card = ({ title, hasPadding = true, bodyClass, children }) => {
    return (
        <div className="card">
            {title && <div className="card-title">{title}</div>}
            <div className={`card-body ${hasPadding ? "" : "full"} ${bodyClass ? bodyClass : ""}`}>
                {children}
            </div>
        </div>
    )
};

export default Card;