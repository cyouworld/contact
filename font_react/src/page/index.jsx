import React from 'react';
import {hashHistory} from 'react-router';

import Carousel from '../components/Carousels';
import Card from '../components/Card';


const Index =() => {
	return (
		<div>
			<Carousel />
			<Card
			articleId="1"
			txtTitle="水浒传"
			txt = "《水浒传》，是中国四大名著之一，全书描写北宋末年以宋江为首的108位好汉在梁山聚义，以及聚义之后接受招安、四处征战的故事。"
			img = "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=3e940701bc003af34dbadb660d11a161/d50735fae6cd7b899616dd8b052442a7d9330ebb.jpg"
			/>
			<Card
			articleId="2"
			txtTitle="水浒传"
			txt = "《水浒传》，是中国四大名著之一，全书描写北宋末年以宋江为首的108位好汉在梁山聚义，以及聚义之后接受招安、四处征战的故事。"
			img = "https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=3e940701bc003af34dbadb660d11a161/d50735fae6cd7b899616dd8b052442a7d9330ebb.jpg"
			/>
		</div>
	)
}
export default Index