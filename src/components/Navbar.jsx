import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo2 from '../assets/logo2.png'
import { navItems } from '../constants'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [mobileDrawer, setMobileDrawer] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawer(!mobileDrawer);
    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => setMobileDrawer(false), 100); // Close drawer after scroll
        }
    };

    return (
        <nav className="top-0 z-50 sticky backdrop-blur-lg py-3 border-neutral-700/80 border-b">
            <div className="relative mx-auto px-4 text-sm container">
                <div className="flex justify-between items-center">
                    <div className="flex flex-shrink-0 items-center">
                        <img className='mr-2 w-10 h-10' src={logo2} alt="logo" />
                        <span className='text-xl tracking-tight'>Flowsync</span>
                    </div>
                    <ul className='hidden lg:flex space-x-4 ml-14'>
                        {navItems.map((item, index) => (
                            <li key={index} >
                                <button onClick={() => scrollToSection(item.href)} className="cursor-pointer">{item.label}</button>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center items-center space-x-12">
                        <Link to="/login" className='px-3 py-2 border rounded-md hover:bg-teal-700 transition-all duration-300'>Sign In</Link>
                        <Link to="/signup" className='bg-gradient-to-r from-teal-600 to-teal-950 px-3 py-2 rounded-md text-white font-medium hover:from-teal-950 hover:to-teal-600 transition-all duration-300'>Create an Account</Link>
                    </div>
                    <div className='lg:hidden md:flex flex-col justify-end' >
                        <button onClick={toggleNavbar}>
                            {mobileDrawer ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawer && (
                    <div className='lg:hidden right-0 z-20 fixed flex flex-col justify-center items-center bg-neutral-900 p-12 w-full' >
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className='py-4' >
                                    <button onClick={() => scrollToSection(item.href)} className="cursor-pointer">{item.label}</button>
                                </li>
                            ))}
                        </ul>
                        <div className='flex space-x-6'>
                            <Link to="/login" className='px-3 py-2 border rounded-md'>Sign In</Link>
                            <Link to="/signup" className='bg-gradient-to-r from-teal-600 to-teal-950 px-3 py-2 rounded-md'>Create an Account</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
export default Navbar