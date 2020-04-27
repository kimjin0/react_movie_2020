import React from 'react';
import PropTypes from "prop-types";


//** function component가 있는데 class component를 사용해야 하나?? >>> state 라고 불리는 녀석 때문이다.
class App extends React.Component{
	state = {
		count:0
	};
	add = () => {
		console.log("add");
		this.setState(current => ({count : current.count + 1}))
	};
	minus = () => {
		console.log("minus");
		this.setState(current => ({count : current.count - 1}))
	}
	componentDidMount(){
		console.log('Component Did Mount');
	}
	componentDidUpdate() {
		console.log("I just updated");
	}
	componentWillUnmount() {
		console.log("Goodbye, cruel world");
	}	
	render(){
		console.log('render');
		return (
			<div>
				<h1>The number is : {this.state.count}</h1>
				<button onClick={this.add}>Add</button>
				<button onClick={this.minus}>Minus</button>
			</div>
		)
	}
}



//#### 아래코드는 state 작업 전 코드 입니다.
//### 주석을 잡아 class componet로 작성합니다.
// function Song({title, src, image}){
// 	return (
// 		<div>
// 			<h2>{title}</h2>
// 			<span>{src}</span>
// 			<img src={image} alt={title} />
// 			<hr/>
// 		</div>			
// 	)
// }

// Song.propTypes  = {
// 	title	: PropTypes.string.isRequired,
// 	src		: PropTypes.string.isRequired,
// 	image	: PropTypes.string
// }

// function renderSong(item){
// 	console.log(item);
// 	return <Song key={item.id} title={item.title} src={item.src} image={item.image} />
// }

// const songList = [
// 	{	id		: 1,
// 		title	: "우리는",
// 		src		: "https://vod.watv.org/watv_media_newsong/_definst_/mp4:202003/2020_03_06_175126_068.m4a/playlist.m3u8",
// 		image	: "https://watvnewsong.org/VNewsongThumbNail/%EA%B2%BD%EC%9D%8C%EC%95%852019(%EA%B3%B5%EC%9A%A9).jpg"
// 	},
// 	{	id		: 2,
// 		title	: "그리운 어머니 음성",
// 		src		: "https://vod.watv.org/watv_media_newsong/_definst_/mp4:201907/2019_07_29_140357_537.m4a/playlist.m3u8",
// 		image	: "https://watvnewsong.org/VNewsongThumbNail/%EA%B2%BD%EC%9D%8C%EC%95%852019(%EA%B3%B5%EC%9A%A9).jpg"
// 	},
// 	{	
// 		id		: 3,
// 		title	: "생며의 기도",
// 		src		: "https://vod.watv.org/watv_media_newsong/_definst_/mp4:201907/2019_07_29_135843_082.m4a/playlist.m3u8",
// 		image	: "https://watvnewsong.org/VNewsongThumbNail/%EA%B2%BD%EC%9D%8C%EC%95%852019(%EA%B3%B5%EC%9A%A9).jpg"
// 	}		
// ]

// function App() {
// 	return (
// 		<div>
// 			{
// 				songList.map(item=> (
// 					<Song
// 						key={item.id}		
// 						title={item.title} 
// 						src={item.src} 
// 						// image={item.image} 
// 					/>
// 				))
// 				//songList.map(renderSong)
// 			}
// 		</div>
// 	);
// }
export default App;
