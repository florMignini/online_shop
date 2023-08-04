
import {MdOutlineMenu} from 'react-icons/md'
import {BsWhatsapp, BsInstagram, BsTwitter} from 'react-icons/bs'

export const Sidebar = () => {
  return (
    <div className="h-full flex flex-col pt-2 px-1 bg-white">
        <div className='p-5'>
              <MdOutlineMenu size={40}/>  
              <h3 className="">Menu</h3>
        </div>
        <div className="flex flex-col">
            <BsWhatsapp size={25} /> 
            <BsInstagram size={25} /> 
            <BsTwitter size={25} /> 
        </div>
    </div>
  )
}
