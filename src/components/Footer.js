import {socials} from '../data'
const Footer = () => {
  return (
    <>
      <footer>
        <ul class="footer-links">
         {socials.map((social) =>{
           const{id,color,name} = social
           return(
            <>
            <li key={id}><a href="#"><box-icon type='logo' name={name} animation='tada'  color={color}></box-icon></a></li>
            </>
           )
         })}
         
        </ul>
        </footer>
    </>
  )
}
export default Footer

// const Footer = () => {
//   return (
//     <div>
//       <footer>
//         <ul class="footer-links">
//          <li><a href="#"><box-icon type='logo' name='twitter' animation='tada'  color='#92441d'></box-icon></a></li>
//          <li><a href="#"><box-icon type='logo' name='facebook-circle' animation='tada'color='#92441d'></box-icon></a></li>
//          <li><a href="#"><box-icon name='instagram' type='logo' animation='tada'color='#92441d'></box-icon></a></li>
//         </ul>
//         </footer>
//     </div>
//   )
// }
// export default Footer