import React from 'react'
interface Companies{
    nameOfCompany?: string,
    NumOfEmployee?:number,
    Years?:number
};


function Companies(props:Companies) {
  return (
    <div className='continerCompanies'>
        
        {props.nameOfCompany}<br></br>
        {props.NumOfEmployee}<br></br>
        {props.Years}<br></br>


    </div>
  )
}

export default Companies