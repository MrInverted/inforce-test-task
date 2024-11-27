import { FadeLoader } from "react-spinners";



function Spinner() {
  return (
    <div className="w-full min-h-40 flex flex-col justify-center items-center">
      <FadeLoader />
    </div>
  )
}

export default Spinner