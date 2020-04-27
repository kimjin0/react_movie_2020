import React from 'react';

function Song({title, src, image}){
	return (
		<div>
			<h2>{title}</h2>
			<span>{src}</span>
			<hr/>
		</div>			
		)
}

const songList = [
	{
		title	: "우리는",
		src		: "https://vod.watv.org/watv_media_newsong/_definst_/mp4:202003/2020_03_06_175126_068.m4a/playlist.m3u8",
		image	: "https://watvnewsong.org/VNewsongThumbNail/%EA%B2%BD%EC%9D%8C%EC%95%852019(%EA%B3%B5%EC%9A%A9).jpg"
	},
	{
		title	: "그리운 어머니 음성",
		src		: "https://vod.watv.org/watv_media_newsong/_definst_/mp4:201907/2019_07_29_140357_537.m4a/playlist.m3u8",
		image	: "https://watvnewsong.org/VNewsongThumbNail/%EA%B2%BD%EC%9D%8C%EC%95%852019(%EA%B3%B5%EC%9A%A9).jpg"
	},
	{
		title	: "생며의 기도",
		src		: "https://vod.watv.org/watv_media_newsong/_definst_/mp4:201907/2019_07_29_135843_082.m4a/playlist.m3u8",
		image	: "https://watvnewsong.org/VNewsongThumbNail/%EA%B2%BD%EC%9D%8C%EC%95%852019(%EA%B3%B5%EC%9A%A9).jpg"
	}		
]

function App() {
	return (
		<div>
			{songList.map(item=> (
				<Song title={item.title} src={item.src} image={item.image} />
			))}
		</div>
  )
}
export default App;
