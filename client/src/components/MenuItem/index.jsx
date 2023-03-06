import { getIcons } from "./utils"

const MenuItem = ({type, link, text,isActive, setIsActive, isCollapsed, setIsCollapsed}) => {
  const Icon = getIcons(type)
  const active = (isActive === type)
  const handleOnClick = () => {
    if(isCollapsed === true){
      setIsCollapsed(!isCollapsed)
    }
    setIsActive(type)
  }
	return (
		<a href={link} onClick={e=> handleOnClick()}
      title={isCollapsed && text[0].toUpperCase()+text.slice(1)}
      className={`menu-link flex items-center ${!isCollapsed && 'pl-4 py-4 gap-2 font-medium text-base rounded-2xl'}
      ${active && !isCollapsed?'text-white bg-accent':'text-primary'}
      ${isCollapsed && 'justify-center'}
    `}

    >
      <div className={`flex  items-center justify-center `}>
        <Icon size={22} />
      </div>
      <span className={`capitalize ${isCollapsed && 'hidden'}`}>{text}</span>
    </a>
	)
}

export default MenuItem