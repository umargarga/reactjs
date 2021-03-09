import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='bg-light text-center text-lg-start'>
            <p>Copyright &copy; 2021</p>
            <Link to='/about'>About</Link>
        </footer>
    )
}

export default Footer
