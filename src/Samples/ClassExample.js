import React, {useEffect} from "react";

export default class ClassExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};

    }


    render() {
        return <div>
            <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            <h2>I am a {this.props.model}!</h2>;
        </div>

    }
}