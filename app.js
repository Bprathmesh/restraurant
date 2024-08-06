import React from "react";
import ReactDOM from "react-dom/client"
import { jsx } from "react/jsx-runtime";

const FunctionalHeadingComponent=()=>{
    return (
        <div><FunctionalHeadingComponent2/>
    <h1> Namaste React from fc😇</h1></div>)
}
const FunctionalHeadingComponent2=()=> <h2>hi</h2> //can also be written this way 
const newFn=()=>{
    return(
    //    { FunctionalHeadingComponent()}
    <div>heyy</div>
)
}

const jsxHeading=(<h1>Namaste React using JSX 🥰</h1>);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalHeadingComponent/>);

// React Component 