
import './App.css'
import  Programers from "./Component/Programers"
import Companies from './Component/Companies'
import Services from './Component/Services'

function App() {

  return (
    <nav className='all'>
      <h4>Programming Names :</h4>
<div className='continer1'>
  
<Programers name={"Samah "} Languages={ " js,php "} Company={"   Apple  "} YearsExperience={  2}/>
<br></br>
<Programers name={"Lila  "} Languages={" js,php,AI  "} Company={" Amazon  "} YearsExperience={ 3}/><br></br>
<Programers name={"Nora  "} Languages={" js,php,IOT "} Company={"  Tuwaiq   "} YearsExperience={ 6}/>

</div>
<h4>Company Information :</h4>
<div className='continer2'>

<Companies  nameOfCompany={ "TUWAIQ  "} NumOfEmployee={1000 } Years =  {   2019 }/>
</div>
<h4>Services the Company </h4>
<div className='continer3'>
 
<Services   TypeOfServices= {` 1- Web Application Development 2- Mobile Application Development 2-Software Prototyping `} Price={200}/>
</div>

</nav>
)
}

export default App
