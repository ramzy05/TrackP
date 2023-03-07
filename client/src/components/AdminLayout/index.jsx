import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SideBar, TopBar, Modal } from '../';
import { menus } from '../SideBar/utils';

export const ModalContext = createContext('');
export const HeaderContext = createContext('');

export const AdminLayout = () => {
	const [isOpen, setIsOpen] = useState(!false);
	const [activeMenu, setActiveMenu] = useState(menus[0].type);
	const [title, setTitle] = useState('Dashboard');
	const [subTitles, setSubTitles] = useState([{ label: 'Home', link: '#' }]);
	const [modalContent, setModalContent] = useState('');
	return (
		<ModalContext.Provider
			value={{
				isOpen,
				setIsOpen,
				modalContent,
				setModalContent,
			}}
		>
			<HeaderContext.Provider
				value={{
					title,
					setTitle,
					subTitles,
					setSubTitles,
				}}
			>
				<Modal />
				<div className=" w-full h-screen min-h-screen mx-auto flex bg-bgColor">
					<SideBar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
					<div className="mt-1 min-h-full  mx-9 flex-1 flex flex-col ">
						{activeMenu === 'map' ? (
							<></>
						) : (
							<TopBar title={title} subTitles={subTitles} />
						)}
						<div className="h-full main-container mt-4  overflow-auto ">
							<Outlet />
						</div>
					</div>
				</div>
			</HeaderContext.Provider>
		</ModalContext.Provider>
	);
};
