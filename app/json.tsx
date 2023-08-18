import Image from 'next/image'
import Footer from './footer'
import "tailwindcss/tailwind.css";
import NavBar from './navBar';
import Home from './home';
import Service from './service'
import Offer from './offer'
import Menu from './menu';

export default function Page() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <Service/>
      <Offer/>
      <Menu/>
      <Footer/>
    </div>
  )
}
