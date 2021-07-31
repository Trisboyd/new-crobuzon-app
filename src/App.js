import React from 'react';
import './Styles.css';
import {perdidoInfo, brockMarchInfo, bonetownInfo} from './utilities/constants';
import Header from './components/Header';
import Lead from './components/Lead';
import Map from './components/Map';
import PopupPlace from './components/PopupPlace';

function App() {

  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const [selectedPlace, setSelectedPlace] = React.useState();

  const openPopup = () => {
    setIsPopupOpen(true);
  }

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedPlace();
  }

  const handlePlaceClick= (place) => {
    setSelectedPlace(place);
    openPopup();
  }

  return (
    <div className="page">
      <Header />
      <Lead />
      <Map onPlaceClick={handlePlaceClick}/>
      {/* <PopupPlace place={selectedPlace} isOpen={isPopupOpen} closePopup={closePopup}/> */}

    </div>
  )
}

export default App;
