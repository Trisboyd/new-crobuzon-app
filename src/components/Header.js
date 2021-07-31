import React from 'react';

function Header() {
    return (
        <header className="header">
            <nav>
                <ul className="menu">
                    <li className="menu__item"><a src="#">Map</a></li>
                    <li className="menu__item"><a src="#">Races</a></li>
                    <li className="menu__item"><a src="#">Characters</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;