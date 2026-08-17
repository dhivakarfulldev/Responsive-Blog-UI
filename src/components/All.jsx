import blogs from "../data/blogdata"
import Blogcard from "./Blogcard"


const All = () => {
 
  
  return (
    <>
  <div className="image-container">
     
   {
    blogs.map((data) => (
      <Blogcard key={data.id}  info={data}/>
    ))
   }
  </div>
   
    </>
  )
}

export default All