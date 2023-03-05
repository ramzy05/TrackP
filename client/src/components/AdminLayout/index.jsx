import { Outlet } from 'react-router-dom'
import { SideBar, TopBar } from '../'

const AdminLayout = () =>{
  return (
    <div className='overflow-auto w-full mx-auto flex bg-bgColor'>
      <SideBar />
      <div className='mt-1 mx-9 flex-1'>
        <TopBar />
        <div className=' max-h-screen overflow-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout