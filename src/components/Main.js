import{contents}from '../data'

const Main = () => {
  return (
          <>
           <div id = 'first-grid'>
            {contents.map((content)=>{
             const {id,heading,span,text,image}=content
             return(
             <>
               <div key= {id}>
               <h2 className="heading">{heading} <span>{span}</span></h2>
               <p className="about-text">{text}</p>
               </div>
               <img className="about-image"  src={image} alt="coffee-image"/> 
             </>
             )
            })}
           </div>
           </>
  )
}
export default Main