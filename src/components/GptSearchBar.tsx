import { RootState } from "../utils/appStore";
import { useSelector, useDispatch } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {

   const langKey = useSelector((store: RootState) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input type="text" 
        className="col-span-9 p-4 m-4 text-black"
         placeholder={lang[langKey as keyof typeof lang].gptSearchPlaceholder} />
        <button className="col-span-3 m-4 bg-red-600 text-white rounded-lg" >
            {lang[langKey as keyof typeof lang].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
