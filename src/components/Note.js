import React from "react"

function Note(props) {

console.log(props)
    return (
        <div>
            <h1>{props.match.params.text}</h1>
        </div>
    )
}

export default Note