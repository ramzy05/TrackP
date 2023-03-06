import { useState } from 'react'
import {MenuItem} from '../'
import { RiMenu5Line } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import {menus} from './utils'
import { notify } from '../../utils'

const SideBar = ({activeMenu, setActiveMenu}) => {
	const [isCollapsed, setIsCollapsed] = useState(false)
	return (
		<div
			className={`side-bar transition-all duration-500 ${isCollapsed?'w-14':'w-60'}
			${isCollapsed?'py-3 ' :'py-1'}  bg-white box-shadow  h-full min-h-full overflow-y-auto
				sticky top-0 left-0 bottom-0

			`}
			>
				<div className={`flex flex-col
					${isCollapsed? 'mx-1':'mx-5'}
				
				`}
				>
					<div className={`flex justify-center items-start
					 h-24 ${!isCollapsed && 'border-b-2 border-bodyThin'}
					`}
					>
						<div className={`flex items-center w-full ${!isCollapsed?'justify-between':'justify-center'} sticky top-7  left-0`}>
							<a href="#" onClick={e=>notify('Hello world', 'success')}>
							<img className={`${isCollapsed && 'hidden'}`} src={logo} alt="logo TrackP"  />
							</a>
							<div onClick={e => setIsCollapsed(!isCollapsed) }
								className='cursor-pointer'
							>
								<RiMenu5Line size={30} className='text-primary' />
							</div>
						</div>
					</div>
					<div className={`mt-16 flex min-h-full flex-col gap-y-8 overflow-hidden`}>
						{menus.map((m, index)=> {
							return(
								<MenuItem 
								key={index}
								type={m.type}
								link={m.link} 
								text={m.text}
								activeMenu={activeMenu}
								setActiveMenu={setActiveMenu}
								isCollapsed = {isCollapsed}
								setIsCollapsed = {setIsCollapsed}
								
								/>
							)
						})}
					</div>
				</div>
				
		</div>
	)
}

export default SideBar