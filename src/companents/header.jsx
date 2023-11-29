import LogoImg from "../image/pixer-logo.png";

const Header = () => {
    const handlyFunc = () => {
        alert("Salom hello")
    }

    return (
        <div className='header'>
            <div className='header__menu container'>
                <div className='header__logo'>
                    <img src={LogoImg} alt='logo image' />
                </div>
                <div className='header__all'>
                    <ul className='header__list'>
                        <li>
                            <a href='#' className='header__link'>
                                Bosh sahifa
                            </a>
                        </li>
                        <li>
                            <a href='#' className='header__link'>
                                Xizmatlar
                            </a>
                        </li>
                        <li>
                            <a href='#' className='header__link'>
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href='#' className='header__link'>
                                Jamoa
                            </a>
                        </li>
                        <li>
                            <a href='#' className='header__link'>
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href='#' className='header__link'>
                                kantaktlar
                            </a>
                        </li>
                    </ul>
                    <button className='btn' onClick={handlyFunc}>+998 94 315 56 66</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
