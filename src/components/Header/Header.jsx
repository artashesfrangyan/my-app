import React from 'react'
import logo from '../../logo.svg'
import "./Header.sass"

const Header = () => {
  return (
    <div>
        <header className="header">
            <ul className='header-list'>
                <li className="header__item">
                    <a>
                        <img className="logo" src={logo} alt="LOGO" />
                    </a>
                </li>
                <li className="header__item">
                    <a>
                        Новости
                    </a>
                </li>
                <li className="header__item">
                    <a>
                        Вход/Выход
                    </a>
                </li>
            </ul>
        </header>
    </div>
  )
}

export default Header