import React from 'react';
import { bookLinks } from '../utilities/constants';
import iron from '../images/iron.jpg';

function Books() {
    return (
        <section className="books" id="books">
            <h3 className="section-title">Learn more with these novels by China Mieville</h3>
            <ul className="books__cards">
                <li className="books__book">
                    <a className="books__link" href={bookLinks.perdido} target="_blank">
                        <img className="books__image" src="https://neverwasmag.com/wp-content/uploads/2020/08/Perdido-Street-Station-cover.jpg" alt='book' />
                    </a>
                </li>
                <li className="books__book">
                    <a className="books__link" href={bookLinks.scar} target="_blank">
                        <img className="books__image" src="https://nekoplz.com/wp-content/uploads/2020/02/the-scar-china-mieville.jpg" alt='book' />
                    </a>
                </li>
                <li className="books__book">
                    <a className="books__link" href={bookLinks.iron} target="_blank">
                        <img className="books__image" src={iron} alt='book' />
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Books;