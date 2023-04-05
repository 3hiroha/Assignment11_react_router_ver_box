    import React from 'react'
    import { useParams } from 'react-router-dom'
    function Profile() {
      let {id} = useParams()
      return (
        <div>
          
          <h1>This student ID of user is {id}</h1> 
        
        </div>
      )
    }
    
    export default Profile