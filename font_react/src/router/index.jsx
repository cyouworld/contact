import React from 'react'
import { Route,Router,IndexRoute } from 'react-router';
import App from '../components/App'

import ArticleList from '../page/articleList';
import Article from "../page/article";

import VideoList from "../page/videoList";
import Video from "../page/video";

import NotFound from '../components/notfund';


function RouteMap (props) {
	return(
		<Router history={props.history}>
	        <Route path='/' component={App}>
	        	<IndexRoute component={ArticleList} />
	        	<Route path="home" component={ ArticleList } />
	        	<Route path="/article/:id" component={Article} />
	        	<Route path="/videoList" component={VideoList} />
	        	<Route path="/video/:id" component={Video} />
	        	<Route path="*" component={NotFound} />
	        </Route>
	    </Router>
	)
}
export default RouteMap