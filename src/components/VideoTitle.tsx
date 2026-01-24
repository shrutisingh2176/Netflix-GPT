type VideoTitleProps = {
  title: string;
  overview: string;
};
const VideoTitle = ({title,overview}:VideoTitleProps) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="py-6  hidden md:inline-block text-lg  w-1/4">{overview}</p>
      <div className="">
        <button
          className="bg-white mx-2 text-black p-4 md:px-12 py-1 md:py-4 px-3 text-xl my-2 md:my-0 rounded-md hover:bg-opacity-70
        "
        >
          ▶ Play
        </button>
        <button
          className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-md  hidden md:inline-block"
        >
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
