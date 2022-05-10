import React from 'react';
import { bookLinks } from '../utilities/constants';
import iron from '../images/iron.jpg';
import perdido from '../images/perdido.jpg';
import scar from '../images/scar.jpg';

export const Books: React.FC = () => {
    return (
        <section className="books" id="books">
            <h3 className="section-title">Learn more with these novels by China Mieville</h3>
            <ul className="books__cards">
                <li className="books__book">
                    <a
                        className="books__link"
                        href={bookLinks.perdido}
                        target="_blank"
                        rel="noreferrer" >
                        <img className="books__image" src={perdido} alt='book' />
                    </a>
                </li>
                <li className="books__book">
                    <a
                        className="books__link"
                        href={bookLinks.scar}
                        target="_blank"
                        rel="noreferrer" >
                        <img className="books__image" src={scar} alt='book' />
                    </a>
                </li>
                <li className="books__book">
                    <a
                        className="books__link"
                        href={bookLinks.iron}
                        target="_blank"
                        rel="noreferrer" >
                        <img className="books__image" src={iron} alt='book' />
                    </a>
                </li>
            </ul>
        </section>
    )
};