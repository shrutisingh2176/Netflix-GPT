import Header from "./Header"
import useNowPlayingMovies from   "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  useNowPlayingMovies();
  

  // const getNowPlayingMovies = async () => {
  //   const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',
  //     API_OPTIONS
  //   );
  //   const json = await data.json();
  //   console.log(json.results);
  //   dispatch (addNowPlayingMovies(json.results));


  // };

  // useEffect(()=> {
  // getNowPlayingMovies();  
  // },[])
  return (
    <div>
      <Header/>
        <MainContainer />
          <SecondaryContainer />
    </div>
  )
}

export default Browse
