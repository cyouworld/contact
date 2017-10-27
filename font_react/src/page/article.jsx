import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Carousel from '../components/Carousels';
import Axio from 'axios';
import jsonpAdapter from 'axios-jsonp';

class Show extends React.Component{
	constructor(props) {
		super();
	}
	state = {
		data: '',
	};

	getArticleById = (id) => {
		var that = this;
		Axio.get({
			url:'http://localhost:3000/api/read/1',
			adapter: jsonpAdapter,
			withCredentials:true
		}).then((res) => {
			 console.log(res)
			}
			// function (response) {
			// 	if(that.state.data==="")
			// 		that.setState({data:response.data})
			// }
		).catch(function (error) {
			console.log(error);
		});
	}

	render(){
		console.log(this.props.articleId)
		if (""===this.state.data) {
			this.getArticleById(this.props.articleId)
			return(
				<div></div>
			)
		}
		const Articles = this.state.data;
		console.log(Articles)
		const listItems = Articles.map((Article,i) =>
	    	<div key={i}>
				<h1>{Article.title}</h1>
				<p>{Article.content}</p>
			</div>
		);
		return(
			<div>
				{listItems}
			</div>
		)
	}
}

const Article = (match) => {

	return(
		<Show
		articleId = {match.params.id}
		/>
	)
}

export default Article