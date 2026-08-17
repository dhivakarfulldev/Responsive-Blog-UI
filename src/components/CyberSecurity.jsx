import React from 'react'
import Blogcard from './Blogcard'
import blogs from '../data/blogdata'

const CyberSecurity = () => {
   const filter = blogs.filter( data => data.domain === "Cyber Security")
  return (
    <>
    <div className="image-container">
      {
        filter.map(data => <Blogcard key={data.id}  info={data} />)
      }
    </div>
    </>
  )
}

export default CyberSecurity