import React from 'react'
interface Services{
   TypeOfServices: string,
   Price:number
};
function Services(props:Services) {
  return (
    <div className='continerServices'>
         {props.TypeOfServices}<br></br>
        {props.Price}<br></br>

    </div>
  )
}

export default Services