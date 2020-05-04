import React, { Component } from 'react';
import '../styles/home.scss';
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				name: 'Izabayo Blaise',
				email: 'izabayoblaise@gmail.com'
			},
			Plan: ''
		};
	}
	componentDidMount() {
		if (!localStorage.getItem('user')) {
			localStorage.setItem('user', JSON.stringify(this.state.user));
		}
	}
	handleClick = (name) => {
		localStorage.removeItem('user');
		const UpdatedUser = { data: this.state.user, plan: name };
		localStorage.setItem('user', JSON.stringify(UpdatedUser));
		window.location.href = `/dashboard`;
	};
	render() {
		return (
			<div>
				<div class="pricing-plan-list">
					<div class="pricing-plan">
						<h2 class="pricing-plan__name">Bronze</h2>
						<h1 class="pricing-plan__price">$9</h1>
						<small class="pricing-plan__disclosure">charged on a monthly basis</small>
						<ul class="pricing-plan__feature-list">
							<li class="pricing-plan__feature">1 account</li>
							<li class="pricing-plan__feature">Up to 10,000 followers</li>
							<li class="pricing-plan__feature">Basic analytics reports</li>
							<li class="pricing-plan__feature">5 reports per month</li>
						</ul>
						<div
							class="btn_wrap btn color1"
							name="Bronze"
							price="9"
							onClick={() => this.handleClick('Bronze')}
						>
							Choose Plan
						</div>
					</div>
					<div class="pricing-plan pricing-plan--featured">
						<h2 class="pricing-plan__name">Silver</h2>
						<h1 class="pricing-plan__price">$29</h1>
						<small class="pricing-plan__disclosure">charged on a monthly basis</small>
						<ul class="pricing-plan__feature-list">
							<li class="pricing-plan__feature">10 accounts</li>
							<li class="pricing-plan__feature">Up to 100,000 followers</li>
							<li class="pricing-plan__feature">Standard analytics report</li>
							<li class="pricing-plan__feature">100 reports per month</li>
						</ul>
						<div
							class="btn_wrap btn color2"
							name="Silver"
							price="29"
							onClick={() => this.handleClick('Silver')}
						>
							Choose Plan
						</div>
					</div>
					<div class="pricing-plan">
						<h2 class="pricing-plan__name">Gold</h2>
						<h1 class="pricing-plan__price">$99</h1>
						<small class="pricing-plan__disclosure">charged on a monthly basis</small>
						<ul class="pricing-plan__feature-list">
							<li class="pricing-plan__feature">Unlimited accounts</li>
							<li class="pricing-plan__feature">Unlimited followers</li>
							<li class="pricing-plan__feature">Advanced analytics reports</li>
							<li class="pricing-plan__feature">Unlimited reports</li>
						</ul>
						<div
							class="btn_wrap btn color3"
							name="Gold"
							price="99"
							onClick={() => this.handleClick('Gold')}
						>
							Choose Plan
						</div>
					</div>
				</div>
			</div>
		);
	}
}
