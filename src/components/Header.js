import {pageLinks} from '../data.js'
const Header = () => {
  return (
    <>
     <header>
      <nav>
       <div className="container-nav">
        <div className="logo">COFFEE</div>
         <ul className="pages primary-nav"data-visible ='false'>
          {pageLinks.map((link) =>{
           const{id,href,text} = link
            return(
             <>
              <li key={id}><a href={href}>{text}</a></li>
             </>
            )
          })}
         </ul>
          <span className="span">BAR</span>
       </div>
      </nav>
     </header>
    </>
  )
}
export default Header