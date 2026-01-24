import { RootState } from "../utils/appStore";
 import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
const MainContainer = () => {
  const movies = useSelector((state: RootState) => state.movies?.nowPlayingMovies);

 if (!movies) return null;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  //console.log(mainMovie);
  return ( 
    <div className="pt-[30%] bg-black md:pt-0 ">
      <VideoTitle title ={original_title} overview={overview} />
      <VideoBackground movieId={id}/> 
    </div>
  )
}

export default MainContainer
