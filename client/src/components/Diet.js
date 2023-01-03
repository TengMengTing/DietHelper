// import {BrowserRouter as Router, Link} from 'react-router-dom';
import balanced from '../images/balanced.jpg'
import high_fiber from '../images/high-fiber.jpg'
import high_protein from '../images/high-protein.jpg'
import low_carb from '../images/low-carb.jpg'
import low_fat from '../images/low-fat.jpg'
import low_sodium from '../images/low-sodium.jpg'
import './diet.css'

  // {images.map((image, i) => (
  //   <img 
  //     key={i} 
  //     src={image} 
  //     style={{width:"100%", display: "block"}}
  //     alt=""
  //   />
  // ))}
  
const Diet = () => {

  return (
    <div className="Diet">
      <a href="/balanced" rel="noreferrer"><img className="dietOption" src={balanced} key="1" alt=""/></a>
      <a href="/high-fiber" rel="noreferrer"><img className="dietOption" src={high_fiber} key="2" alt=""/></a>
      <a href="/high-protein" rel="noreferrer"><img className="dietOption" src={high_protein} key="3" alt=""/></a>
      <a href="/low-carb" rel="noreferrer"><img className="dietOption" src={low_carb} key="4" alt=""/></a>
      <a href="/low-fat" rel="noreferrer"><img className="dietOption" src={low_fat} key="5" alt=""/></a>
      <a href="/low-sodium" rel="noreferrer"><img className="dietOption" src={low_sodium} key="6" alt=""/></a>
    </div>
  )
}

export default Diet;
