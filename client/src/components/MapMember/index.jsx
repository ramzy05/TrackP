import { useState } from 'react'
import {TfiAngleRight} from 'react-icons/all'

const MemberItem = ({isCollapsed:showDetails})=>{
  const firstName ='John'
  const lastName ='Doe'
  const [isCollapsed, setIsCollapsed] = useState(showDetails)

  const handleCollapseClick =()=>{
    setIsCollapsed(!isCollapsed)
  }
  return(
    <div className={`
      border-y border-t-0 border-0
      flex flex-col
    `}>
      <div className={`flex items-center justify-between
      w-full
     
      
      `}>
        <div className={`w-3/4 flex gap-5 items-center`}>
          <div className={`w-10 h-10 rounded-ful`}>
              <img className='object-cover object-center h-full w-full'
              src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'/>
          </div>
          <span className={`text-body font-semibold`}>{firstName} {lastName}</span>
        </div>
        <span onClick={handleCollapseClick} className={`cursor-pointer 
        transition-transform duration-500
        ${isCollapsed?'rotate-0':'rotate-90'}`}><TfiAngleRight size={15} /></span>
     </div>
      <div
        className={`mt-2 transition-all duration-500 overflow-hidden origin-top  ${isCollapsed? 'h-0': 'h-24'}`}
      >
        Details
      </div>
    </div>
  )
}

const MapMember = () => {
  return (
    <div className={`
      flex flex-col gap-10
    `}>
      <div>
        <input className={`outline-none border-white text-body w-full pl-3 py-2 pr-2 rounded-md border-1 box-shadow  focus:border-primaryThin`} type="search" placeholder='Search agent' />
      </div>
      <div>
        <MemberItem isCollapsed={true}/>
      </div>
    </div>
  )
}

export default MapMember