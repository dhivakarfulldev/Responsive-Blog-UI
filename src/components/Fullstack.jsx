
import Blogcard from './Blogcard'
import blogs from '../data/blogdata'

const Fullstack = () => {

  const filter = blogs.filter( data => data.domain === "Full Stack Development")
  return (
    <>
     <div className="image-container">
       {
    filter.map((data) => (
      <Blogcard key={data.id}  info={data}/>
    ))
   }
     </div>
    </>
  )
}

export default Fullstack