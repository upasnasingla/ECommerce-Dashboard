import React from 'react'

const Notification = () => {
  return (
    <>
    <div className='notificationBox'>
    <h1 style={{marginLeft:250,paddingTop:25}}>Notifications</h1>
    <br/>
    <div style={{height:60, width:600, backgroundColor:"whitesmoke" ,marginLeft:46,marginTop:20}}> <h3 style={{marginLeft:160,paddingTop:20}}>Order Id 2048 has been delivered</h3>
    </div>
    <br/>
    <div style={{height:60, width:600, backgroundColor:"whitesmoke",marginLeft:46}}> <h3 style={{marginLeft:160,paddingTop:20}}>USA has more number of orders.</h3>
    </div>
    </div>
    </>
  )
}

export default Notification;