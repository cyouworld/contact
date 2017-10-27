import React from 'react';
import Card from '../components/Card';
import {hashHistory} from 'react-router';

function openVideo(videoId){
  hashHistory.push('/video/'+videoId)
}

class VideoList extends React.Component{
	render(){
		return(
			<div>
				<Card
					onclickFun = {openVideo}
					itemId="1"
					itemTitle="容县沙田柚丰收庆典系列活动"
					itemTxt = "主办单位：容县自良镇人民政府承办单位：自良沙田柚协会
								冠名单位：惠州市银农科技股份有限公司"
					itemImg = "http://www.agrising.cn/uploads/app/resources/e07092b90c0447b98241e1e999aab9e9.jpg"
				/>
			</div>
		)
	}
}


export default VideoList