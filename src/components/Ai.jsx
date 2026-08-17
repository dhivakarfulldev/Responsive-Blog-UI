import React from 'react'
import blogs from '../data/blogdata'
import Blogcard from './Blogcard'

const Ai = () => {
    const filter = blogs.filter( data => data.domain === "AI")
  return (
   <>
   <div className="image-container">
      {
        filter.map(data => <Blogcard key={data.id}  info={data}/>)
      }
    </div>
   </>
  )
}

export default Ai