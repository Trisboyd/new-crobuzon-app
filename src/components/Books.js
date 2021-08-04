import React from 'react';

function Books() {
    return (
        <section className="books" id="books">
            <h3 className="books-title">Learn more with these novels by China Mieville</h3>
                <ul className="book-cards">
                    <li className="book">
                        <a className="book__link"><img className="book__image" src="https://th.bing.com/th/id/R.184492a3c4955387657a4ee518c98702?rik=DoIevAAJqSVRUw&riu=http%3a%2f%2fimg1.fantasticfiction.co.uk%2fimages%2fn4%2fn22663.jpg&ehk=NJ9ct%2bOdHRrcM75ZpIe%2f4g3%2fh826xWBUNgSunGuaaiA%3d&risl=&pid=ImgRaw&r=0"/></a>
                    </li>
                    <li className="book">
                        <a className="book__link"><img className="book__image" src="https://nekoplz.com/wp-content/uploads/2020/02/the-scar-china-mieville.jpg"/></a>
                    </li>
                    <li className="book">
                        <a className="book__link"><img className="book__image" src="https://i.ebayimg.com/images/g/MrUAAOSwGuJfGdpD/s-l640.jpg"/></a>
                    </li>
                </ul>
        </section>
    )
}

export default Books;