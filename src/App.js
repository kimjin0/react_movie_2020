import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

//** function component가 있는데 class component를 사용해야 하나?? >>> state 라고 불리는 녀석 때문이다.
class App extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };

    getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        this.setState({ movies, isLoading: false });
    };

    componentDidMount() {
        // setTimeout(()=>{
        // 	this.setState({isLoading : false});
        // }, 6000);

        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        console.log(movies);
        return (
            <section>
                {isLoading ? (
                    <div className="loader">
                        <span className="loaer_text">Loading..</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
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
