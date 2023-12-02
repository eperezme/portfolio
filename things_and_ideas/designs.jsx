// Thin vertical line
import React from "react";
import "./style.css";

export const Box = () => {
    return (
        <div className="box">
            <div className="div-home-campaign" />
            <div style={{width: 3, height: 257, background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #7C72FF 30%)', borderRadius: 6}} />
        </div>
    );
};



// Branch line
import React from "react";
import "./style.css";
export const GitBranch = () => {
return (
<div className="git-branch">
<div className="overlap-group">
<img className="vector" alt="Vector" src="vector.svg" />
<img className="group" alt="Group" src="group.png" />
</div>
</div>
);
};
