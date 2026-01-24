import { IMG_CDN } from "../utils/constants"
import { MovieCardProps } from "../utils/Types"


const MovieCard = ({posterPath}:MovieCardProps) => {
    if (!posterPath) return null;
  return (
    <div  className="  w-36 md:w-48 pr-4">
      <img alt="Movie Card" src={IMG_CDN + posterPath}/>
    </div>
  )
}

export default MovieCard
