import { useNavigate } from 'react-router-dom'
const Blogcard = ({ info}) => {
 const navigate =  useNavigate()
  
  return (
<>
  <div onClick={() => (navigate(`/blog/${info.id}`))}  className='blog-card'>
        <img src={info.img} alt="" className="img" />
        <p>{info.title}</p>

    </div>
</>
  
  )
}

export default Blogcard