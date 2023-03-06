import { getIcon } from "../MenuItem/utils"

const TopCard = ({id, icon, texts, color}) => {
  const Icon = getIcon(icon)
  // the trackend have an index of 2
  const isTracked = id === 2;
  return (
    <div className={`box-shadow bg-cardColor${id} h-48 rounded-3xl
    transition-all duration-500
       p-5  flex flex-1
       flex-col  justify-between items-center
       text-white
       cursor-pointer
       hover:scale-95  
    `}>
      <div className={`flex items-center justify-center rounded-xl text-cardColor${id} bg-white h-10 w-10 relative`}>
        <Icon size={24} />
        {isTracked && (
          <div className={`w-3 h-3 rounded-full top-0 -right-1 
           bg-success absolute toast-tracked`}></div>
        )}
      </div>
      <span className={`text-xl`}>{texts[0]}</span>
      <span className={`text-4xl`}>
        {texts[1]}
        </span>
    </div>
  )
}

export default TopCard