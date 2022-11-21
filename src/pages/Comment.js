import React from 'react'

const Comment = () => {
  return (
    <>
    <div className='commentBox'>
    <h1 style={{marginLeft:200}}>Chat Box</h1>
    <div style={{height:60, width:600, backgroundColor:"whitesmoke",marginLeft:45,marginTop:40}}> <h3 style={{paddingLeft:20,paddingTop:5}}>Michael</h3> <h4 style={{paddingLeft:20}}>Hi! Good Morning.When Will I receive my parcel?</h4>
    </div>
    <br/>
    <div style={{height:60, width:600, backgroundColor:"whitesmoke",marginLeft:45}}> <h3 style={{paddingLeft:20,paddingTop:5}}>Hazel</h3> <h4 style={{paddingLeft:20}}>Can you please place my order?</h4>
    </div>
    <br/>
    <div style={{height:60, width:600, backgroundColor:"whitesmoke",marginLeft:45}}> <h3 style={{paddingLeft:20,paddingTop:5}}>Jack</h3> <h4 style={{paddingLeft:20}}>Hey, Where I have to deliver the parcel today?</h4>
    </div>
   

    </div>
    </>
  )
}

export default Comment