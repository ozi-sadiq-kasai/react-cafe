import{lowerContents}from '../data'

const Lower = () => {
  return (
    <>
     <div id = 'second-grid'>
            {lowerContents.map((lower)=>{
             const {id,heading,span,text,image}= lower
             return(
             <>
              <div key= {id}>
               <h2 className="heading">{heading} <span>{span}</span></h2>
               <p className="lower-text">{text}</p>
             </div>
              <img className="about-image"src={image} alt="coffee-image"/> 
             </>
             )
            })}
           </div>
    </>
  )
}
export default Lower
