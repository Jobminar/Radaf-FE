import React from 'react'
import error from '../Home/Images/errors.png'
const Error = () => {
  return (
    <div style={{width:"100%",height:"100%",marginLeft:"10%"}}>
 <img  style={{width:"80%", height:"80%",padding:"0px",margin:"0px",textAlign:'center',display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center"}}  src={error} alt='error' width="100%" height="100%"/>
    </div>
  )
}

export default Error
