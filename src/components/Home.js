import React from 'react'
import Home1 from './Home1'


const Home = () => {
  return (
    <>
      <div className="mainbody">
      <h1 className='firstcomponent'>Earnings</h1><br/>
      <h2 className='firstprice'>$14,000000000000</h2>
      <button className="firstbutton" style={{fontSize:25}}>DOWNLOAD</button>
      <img className='firstimage'  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5YJaxMhQYuujWtisIzf8A1kRsnyh9fldprg&usqp=CAU'} />
      </div>
      
      <Home1 />
       
      <div className='thirdcomponent'><h1>Revenue Updates</h1></div>
      <div className='thirdbackground'>
        <h1 className='thirdprice'>$93,438</h1>
        <div className='thirddiscount'>23%</div>
        <h2 className='thirdwriting'>Budget</h2>
        <h1 className='fourthprice'>$48,438</h1>
        <h2 className='fourthwriting'>Expense</h2>
        <button className='fourthbutton'>Download Report</button>
        <img  className="fouthimage" src="https://i0.wp.com/ieltspracticeonline.com/wp-content/uploads/2020/12/ielts-writing-task-1-line-chart-19-average-monthly-temperatures-three-cities.png?resize=1064%2C670&ssl=1"/>
          
         <img style={{marginLeft:130,paddingBottom:60}} src="http://images.topperlearning.com/topper/questions/197140_image001.gif"/>

      </div>
    </>
  )
}

export default Home
