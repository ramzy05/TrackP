import { Link } from "react-router-dom";
import { HeaderContext } from "../AdminLayout"
import { useContext } from "react"
import { getIcon } from "./utils"

const MenuItem = ({type, link, text,activeMenu, setActiveMenu, isCollapsed, setIsCollapsed}) => {
  const {title, setTitle, subTitles, setSubTitles} =  useContext(HeaderContext)
  const Icon = getIcon(type)
  const active = (activeMenu === type)
  const handleOnClick = () => {
    if(isCollapsed === true){
      setIsCollapsed(!isCollapsed)
    }
    setActiveMenu(type)
    setTitle(text[0].toUpperCase()+text.slice(1))
    setSubTitles([{label:'Home', link:'#'}])
  }
	return (
    <Link  to={link} onClick={e=> handleOnClick()}
    title={isCollapsed ? text[0].toUpperCase()+text.slice(1):''}
    className={`menu-link flex items-center ${!isCollapsed && 'pl-4 py-4 gap-2 font-medium text-base rounded-2xl'}
    ${active && !isCollapsed?'text-white bg-accent':` ${active?'text-accent':'text-primary'}`}
    ${isCollapsed && 'justify-center'}
  `} >
    
      <div className={`flex  items-center justify-center `}>
        <Icon size={22} />
      </div>
      <span className={`capitalize ${isCollapsed && 'hidden'}`}>{text}</span>
    </Link>
	
	)
}

export default MenuItem