import SideStyles from "./components.module.css";
import {MdOutlineMenu} from 'react-icons/md'
import {BsWhatsapp, BsInstagram, BsTwitter} from 'react-icons/bs'

export const Sidebar = () => {
  return (
    <div className={SideStyles[`side-container`]}>
        <div className={SideStyles[`side-top-menu`]}>
              <MdOutlineMenu size={40}/>  
              <h3 className={SideStyles[`side-top-text`]}>Menu</h3>
        </div>
        <div className={SideStyles[`side-middle-menu`]}>
            <BsWhatsapp size={25} /> 
            <BsInstagram size={25} /> 
            <BsTwitter size={25} /> 
        </div>
    </div>
  )
}
