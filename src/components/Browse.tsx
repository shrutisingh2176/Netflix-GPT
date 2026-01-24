import Header from "./Header"
import useNowPlayingMovies from   "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearchPage";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";


const Browse = () => {
   const showGptSearch = useSelector(
    (store: RootState) => store.gpt.showGptSearch,
  );

  useNowPlayingMovies();
  usePopularMovies();

  
  return (
    <div>
      <Header/>
      { showGptSearch ? (
        <GptSearch/>
      ): (<> 
          <MainContainer />
          <SecondaryContainer />
          </>)}
       </div>
  )
}

export default Browse
