import React from 'react';
import {hashHistory} from 'react-router';

import Carousel from '../components/Carousels';
import Card from '../components/Card';

function read(articleId){
  hashHistory.push('/article/'+articleId)
}

const ArticleList =() => {
	return (
		<div>
			<Carousel />
			<Card
			onclickFun = {read}
			itemId="1"
			itemTitle="水浒传"
			itemTxt = "《水浒传》，全书描写北宋末年以宋江为首的108位好汉在梁山聚义，以及聚义之后接受招安、四处征战的故事。"
			itemImg = "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=3e940701bc003af34dbadb660d11a161/d50735fae6cd7b899616dd8b052442a7d9330ebb.jpg"
			/>
			<Card
			onclickFun = {read}
			itemId="2"
			itemTitle="水浒传"
			itemTxt = "《水浒传》，全书描写北宋末年以宋江为首的108位好汉在梁山聚义，以及聚义之后接受招安、四处征战的故事。"
			itemImg = "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=3e940701bc003af34dbadb660d11a161/d50735fae6cd7b899616dd8b052442a7d9330ebb.jpg"
			/>
		</div>
	)
}
export default ArticleList