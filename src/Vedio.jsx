
import React,{useState , useRef} from 'react'
import VIDEO from "./082475036-woman-holding-red-smoke-white-.mp4"

const Vedio = () => {
  let [video , setVideo] = useState(VIDEO)
  let [loading , setLoading] = useState(false)
  let videoRef = useRef()
  let playOrPause = ()=>{
    if(!loading)
    {
      setLoading(true)
      videoRef.current.play()
    }
    else
    {
      setLoading(false)
      videoRef.current.pause()
    }

  }

  return (
    <div>
      <video src={video} onClick={playOrPause}ref={videoRef}></video>
    </div>
  )
}

export default Vedio