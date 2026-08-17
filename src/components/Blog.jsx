
import { useParams } from "react-router-dom"

import Header from './Header'
import blogs from "../data/blogdata";


const Blog = () => {
   const {id} = useParams();
   console.log(id);
   

   const data = blogs.find((blog) => (blog.id === Number(id)));
   
   
   
 
   
   
  return (
    <>
    <Header />
    <div  className="blog-container">
        <h1>{data.title}</h1>
    <div className="blog-inner-container">
        
            <img src={data.img} alt="" />
      
        <div >
            <p className="blog-info">{data.title}</p>
            <p className="blog-info">July 20 2026</p>
            <p className="blog-content">{data.content}</p>
            <p className="btn-para">
                 <button className="btn">Read More</button>
            </p>
            
        </div>
        
    </div>
    </div>
    </>
  )
}

export default Blog