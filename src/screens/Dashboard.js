import React, { Component } from 'react';

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {},
			plan: ''
		};
	}
	async componentDidMount() {
		const InUser = await JSON.parse(localStorage.getItem('user'));
		if (InUser.plan === '') {
			return (window.location.href = `/`);
		}
		this.setState({ user: InUser.data, plan: InUser.plan });
		console.log(this.state);
	}
	render() {
		return (
			<div>
				<h1>Welcome {this.state.user.name} </h1>
				<h4>Plan: {this.state.plan}</h4>
				<div class="btn_wrap btn color2">Change plan</div>
			</div>
		);
	}
}
