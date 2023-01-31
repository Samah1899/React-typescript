
import React from 'react'
interface programes1{
    name: string,
    Languages:string,
    Company:string,
    YearsExperience:number
};


function Programers(props:programes1) {
  return (
    <div className='continerPrograming'>

        {props.name}<br></br>
        {props.Languages}<br></br>
        {props.Company}<br></br>
        {props.YearsExperience}


        </div>
  )
}

export default Programers