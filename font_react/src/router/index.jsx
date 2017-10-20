import React from 'react'
import { Route,Router,IndexRoute } from 'react-router';
import App from '../components/App'

import Index from '../page';

import Article from "../page/article";
import NotFound from '../components/notfund';


function RouteMap (props) {
	return(
		<Router history={props.history}>
	        <Route path='/' component={App}>
	        	<IndexRoute component={Index} />
	        	<Route path="home" component={Index} />
	        	<Route path="/article" component={Article} />
	        	<Route path="*" component={NotFound} />
	        </Route>
	    </Router>
	)
}
export default RouteMap