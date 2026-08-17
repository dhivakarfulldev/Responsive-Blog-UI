import React from 'react'
import blogs from '../data/blogdata'
import Blogcard from './Blogcard'

const Career = () => {
    

  return (
   <>
    <div className="image-container">
      {
        blogs.map(data => <Blogcard key={data.id} info={data} />)
      }
    </div>
   
   </>
  )
}

export default Career