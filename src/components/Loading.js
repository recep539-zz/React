import React from 'react' //racf
import loading from "./loading.gif"
export const Loading = () => {
    return (
        <React.Fragment>
            <img src={`/${loading}`} alt="Loading..." style={{ width: "200px", display: "block", margin: "auto" }}></img>
        </React.Fragment>
    )
}
export default Loading;