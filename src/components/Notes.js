import React from "react"


class Note extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>{this.props.text}}</h1>
            </div>
        )
    }
}