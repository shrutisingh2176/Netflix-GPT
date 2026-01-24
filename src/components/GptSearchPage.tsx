import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"
import { BgImg } from "../utils/constants"


const GptSearch = () => {
  return (
    <div>
      <div className="fixed  -z-10">

    <img src={BgImg} alt="bg-img" />
      </div>
     
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
