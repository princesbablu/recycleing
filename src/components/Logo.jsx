import { Link } from 'react-scroll'
import logo from '../assets/img/logo.png'
import favicon from '../assets/img/favicon.png'

export default function Logo() {
  return (
    <Link className="logo" to="banner" spy={true} smooth={true} duration={600} offset={0}>
      <img src={logo} alt="site-logo" className='d-none d-md-block d-lg-none d-xl-block' />
      <img src={favicon} className='d-md-none d-lg-block d-xl-none' alt="site-logo" />
    </Link>
  )
}
