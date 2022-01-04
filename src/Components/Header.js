import {FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'


function Header () {
    return (
        <header>
            <img src={require('./headshot.jpg')} alt='sara kuenzi' className='header-img'/>
            <h1 className='header-title'>Sara Kuenzi</h1>
            <p className='header-subtitle'>Frontend Developer</p>
            <div className='header-links'>
                <small ><a className='website' href='skuenzi.github.io'>skuenzi.github.io</a></small>
                <div className='header-links__buttons'>
                    <button className='header-links__button email'>
                        <MdEmail className='button-icon'/>
                        Email
                    </button>
                    <button className='header-links__button linkedin'>
                        <FaLinkedin className='button-icon'/>
                        LinkedIn
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header