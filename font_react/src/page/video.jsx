import React from 'react';
import VideoPlayer from '../components/Video'
import Jsonp from 'jsonp';

function test(){
	console.log(1);
	Jsonp('http://localhost:3000/api/read/1',null,(err,data)=>{
		console.log(2)
		console.log(data)
	})
}




const Video = () => {
	test();
	return(
		<div>
			<VideoPlayer
			video_name="容县沙田柚丰收庆典系列活动"
			video_url = "http://1251844216.vod2.myqcloud.com/9d667741vodgzp1251844216/81b6f7019031868223406631293/playlist.m3u8"
			video_intro="主办单位：容县自良镇人民政府承办单位：自良沙田柚协会"
			/>
		</div>
	)
}
export default Video