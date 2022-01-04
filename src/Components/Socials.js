import {FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare} from 'react-icons/fa'

function Socials () {
    return (
        <footer className='socials'>
            <button className='socials-btn'><FaTwitterSquare className='socials-icon'/></button>
            <button className='socials-btn'><FaFacebookSquare className='socials-icon'/></button>
            <button className='socials-btn'><FaInstagramSquare className='socials-icon'/></button>
            <button className='socials-btn'><FaGithubSquare className='socials-icon'/></button>
        </footer>
    )
}

export default Socials