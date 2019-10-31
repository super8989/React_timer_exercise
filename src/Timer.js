import React, { Component } from "react";

class Timer extends Component {
	constructor(props) {
		super(props);
		console.log("In constructor");
	}

	componentDidMount() {
		console.log("In component did mount");
	}

	render() {
		console.log("In render");
		return <h1>Timer</h1>;
	}
}

export default Timer;
