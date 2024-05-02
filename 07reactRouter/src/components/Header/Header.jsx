import { Link } from 'react-router-dom'


function Header() {
  return (
    <nav className='flex justify-center items-center p-10 bg-pink-400'>

        <ul className="flex justify-between flex-wrap w-73rem">
            <li><Link to="About">About </Link></li>
            <li><Link to="User">User </Link></li>
            <li><Link to="Github">Github </Link></li>
        </ul>
    </nav>
  )
}

export default Header