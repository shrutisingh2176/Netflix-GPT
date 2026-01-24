import { RootState } from "../utils/appStore";
import { useSelector, useDispatch } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";


const GptSearchBar = () => {


   const langKey = useSelector((store: RootState) => store.config.lang);

  const searchText = useRef<HTMLInputElement>(null);
   const dispatch = useDispatch();


  //  const handleGptSearchClick =  async() => {
    //console.log(searchText.current?.value)

    //Make API Call 


  const searchMovieTMDB = async (movie: string) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

     
    const callGroq = async (query: string) => {
  const res = await fetch("https://api.groq.com/openai/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_GROQ_KEY}`,
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-20b",
      input: query,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Groq Error:", err);
    return null;
  }

  const data = await res.json();
  return data.output_text || data.output?.[0]?.content?.[0]?.text;
};


const handleGptSearchClick = async () => {
    const userQuery = searchText.current?.value;
    if (!userQuery) return;

 const gptQuery = `
Give exactly 5 movie titles related to:"${userQuery}"
Rules:
- Suggest exactly 5 movies.
- Output only movie titles.
- Use comma separation.
`;
   const result = await callGroq(gptQuery);
     console.log("GPT Movies:", result);

     const aiText = await callGroq(gptQuery);
    if (!aiText) return;

    const gptMovies = aiText.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

     dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );

   };

  

  

  return (
    <div className="pt-[10%] flex justify-center">

      <form className="w-1/2 bg-black grid grid-cols-12"
       onSubmit ={(e) => e.preventDefault()}>

        <input
        ref={searchText} 
        type="text" 
        className="col-span-9 p-4 m-4 text-black"
         placeholder={lang[langKey as keyof typeof lang].gptSearchPlaceholder} />

        <button className="col-span-3 m-4 bg-red-600 text-white rounded-lg"
        onClick = {handleGptSearchClick} >
            {lang[langKey as keyof typeof lang].search}
        </button>

      </form>
    </div>
  )
}

export default GptSearchBar;
