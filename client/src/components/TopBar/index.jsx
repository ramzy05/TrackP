import { FiSearch } from 'react-icons/fi'

const TopBar = ({title, subTitles}) => {
  return (
    <div className={`topbar flex flex-col justify-between items-start   pl-0 sticky top-0 `}>
      <div className={`flex w-full justify-between items-center   bg-bgColor`}>
        <h2 className={`text-2xl font-bold text-heading`}>{title}</h2>
        <div className={`flex justify-end  items-center w-1/2 gap-x-4 py-3 px-3`}>
          <div className={`flex h-12 w-1/2 bg-white rounded-lg  relative box-shadow`}>
              <input className={`outline-none border-white text-body w-full pl-3 pr-14 rounded-md border-1  focus:border-primaryThin`} type="search" 
              placeholder='Search'
              />
              <button className={`flex justify-center items-center
                bg-accent rounded-lg
                w-12 h-full absolute -right-0 
              `}>
                <FiSearch size={22} className='text-white' />
              </button>
          </div>
          <div className={`flex justify-center items-center w-12 h-12  bg-white rounded-lg  relative box-shadow`}>
            <div className={`w-10 h-10`}>
              <a href="#">
                <img className='object-cover object-center h-full w-full'
                src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='text-accent'>
          {subTitles.map((sub, index)=>{
            let link='' 
            subTitles.slice(0,index+1).forEach(st => {
              link += st.link+'/'
            });
            link = link.slice(0, link.length-1)
            return <span key={index}>
              <a href={link}> {sub.label}</a>
              {index===subTitles.lenght-1 ? '':' /'}
            </span>
          })}

        </div>
    </div>
   
  )
}

export default TopBar