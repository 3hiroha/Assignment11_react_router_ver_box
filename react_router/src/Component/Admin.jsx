import React from 'react'
import { Navigate } from 'react-router-dom'

function Admin({Login,setLogin}) {
  const handleLogout = () => setLogin(false)
  

  if(!Login){
      return <Navigate to="/" replace />
  }
  return (
    <div>
      <img src="src/assets/blog.webp" width={500} height={300} alt="react"/>
      <h1>This is admin page</h1>
      <button onClick={handleLogout}
    style={ { borderRadius:"10px", height:"40px", width:"50", fontWeight:"bold",background:"linear-gradient(90deg, rgba(77,123,222,1) 0%, rgba(132,87,255,1) 100%)"} }>
                    Logout
    </button>
    </div>
  )
}

export default Admin