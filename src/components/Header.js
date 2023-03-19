import Menu from '../assets/img/hamburger.png'
import Logo from '../assets/img/Youtubelogo.png'
import { CiSearch } from 'react-icons/ci';
import { MdOutlineAccountCircle } from 'react-icons/md';



const Header = () =>{
    return(
        <div className='flex m-4 shadow-md'>
            <div className='flex '>
                <img className='h-14 px-2 py-3' alt='hamburger' src={Menu}  />
                <img  className='h-14 ' alt='logo'  src={Logo}/>

            </div>
            <div className='items-center px-48 '>
                <input 
                    placeholder='Search'
                    className='bg-gray-100 h-10 w-96 rounded-l-full '
                />
                <button className='bg-gray-200 h-10 w-12 rounded-r-full  items-center'><CiSearch /></button>
            </div>
            <div className='h-10'><MdOutlineAccountCircle /></div>
            
        </div>
    )
}

export default Header;