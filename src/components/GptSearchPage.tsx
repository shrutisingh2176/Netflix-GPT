import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"
import { BgImg } from "../utils/constants"


const GptSearch = () => {
  return (
    <div>
      <div className="fixed  -z-10">

    <img className="object-cover min-h-screen " src={BgImg} alt="bg-img " />
         </div >

      <div className="">
      <GptSearchBar/>
      <GptMovieSuggestions/>
      </div>
    </div>
  )
}

export default GptSearch
