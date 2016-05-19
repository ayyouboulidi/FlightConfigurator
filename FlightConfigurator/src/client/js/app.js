import trace from './debug';
import readConfig from './config';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import Connect from './container/connect'
import SelectorConf from './container/selectorConf'
import CustomerCare from './container/customerCare'
import WelcomeConfig from './container/welcomeConfig'
import Cabin from './container/cabin'
import Systems from './container/systems'
import Livery from './container/livery'
import Summary from './container/summary'

// Read global configuration
$(document).ready(function() {
	trace("Reading configuration", 'info');
	readConfig(
		function success(config) {
			trace("Configuration read", 'info');
			// initialize the application
			trace("Initialize React App", 'info');
			const App = React.createClass({
			  render() {
			    return (
			      <div>
			        {this.props.children}
			      </div>
			    )
			  }
			})

			render(
				<Router history={hashHistory}>
						<Route path="/" component={App}>
							<IndexRoute component={Connect} />
							<Route path="Connect" component={Connect} />
							<Route path="Cabin" component={Cabin} />
							<Route path="Systems" component={Systems} />
							<Route path="SelectorConf" component={SelectorConf} />
							<Route path="CustomerCare" component={CustomerCare} />
							<Route path="WelcomeConfig" component={WelcomeConfig} />
							{<Route path="Livery" component={Livery} />}
							<Route path="Summary" component={Summary} />
						</Route>
					</Router>,
				document.getElementById('react-container')
			);
		},
		function failure() {
			trace( "Unable to read configuration", 'error');
		}
	);

})
