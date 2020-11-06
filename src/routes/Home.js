import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    // 배열로만들고 그 안에 객체들 넣기
    movies: [],//key: key value
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },// (movies.data.data.movies)을 구조분해할당으로 표시해 바로 사용
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count');
    // console.log(movies.data.data.movies);
    this.setState( { movies, isLoading: false } ); //키: 키값 이름이 동일하면 { movies: movies } -> { movies }으로 표현!
  }

  // render 실행된 다음 바로 실행되는 함수!
  componentDidMount() {
    // setTimeout( () => {
    //   this.setState( { isLoading : false } ); // setState로 값을 바꾸면 render 다시 실행!-->바뀐내용이 화면에 나옴
    // },6000 )
    this.getMovies();
    
  }

  render() {
    const { isLoading, movies } = this.state; // 구조분해 할당 모양(값 받아와서 저장해서 사용)

    return (
      <section className="container">
        { isLoading ? 
          (<div className='loader'><span className='loader_text'>'Loading...'</span></div>) : 
          (<div className="movies">
            {movies.map( movie => ( <Movie 
                                    id = {movie.id}
                                    year = {movie.year}
                                    title = {movie.title}
                                    summary = {movie.summary}
                                    poster = {movie.medium_cover_image}
                                    genres = {movie.genres}
                                      /> ) )}
          </div>)
        }{/* 삼항연산자 */}
       
      </section>
    );
  }
}

export default Home;
