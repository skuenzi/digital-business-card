import {FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare} from 'react-icons/fa'

function Socials () {
    return (
        <footer className='socials'>
            <button className='socials-btn' onClick={() => window.open('https://www.facebook.com/thekwenz24')}><FaFacebookSquare className='socials-icon'/></button>
            <button className='socials-btn' onClick={() => window.open('https://www.instagram.com/thekwenz24/')}><FaInstagramSquare className='socials-icon'/></button>
            <button className='socials-btn'onClick={() => window.open('https://github.com/skuenzi')}><FaGithubSquare className='socials-icon'/></button>
        </footer>
    )
}

export default Socials