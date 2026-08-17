import React from 'react'
import blogs from '../data/blogdata'
import Blogcard from './Blogcard'

const DataScience = () => {
  const filter = blogs.filter(data => data.domain === "Data Science")
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

export default DataScience