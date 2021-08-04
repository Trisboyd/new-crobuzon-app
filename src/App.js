import React from 'react';
import './Styles.css';
import Header from './components/Header';
import Lead from './components/Lead';
import Map from './components/Map';
import Races from './components/Races';
import Books from './components/Books';
import Footer from './components/Footer';
import PopupPlace from './components/PopupPlace';
import PopupRace from './components/PopupRace';
import { raceList } from './utilities/constants';

function App() {

  const [isPlacePopupOpen, setIsPlacePopupOpen] = React.useState(false);

  const [isRacePopupOpen, setIsRacePopupOpen] = React.useState(false);

  const [selectedPlace, setSelectedPlace] = React.useState();

  const [selectedRace, setSelectedRace] = React.useState();

  const openPlacePopup = () => {
    setIsPlacePopupOpen(true);
  }

  const openRacePopup = () => {
    setIsRacePopupOpen(true);
  }

  const closePopup = () => {
    setIsPlacePopupOpen(false);
    setIsRacePopupOpen(false);
    setSelectedPlace();
    setSelectedRace();
  }

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    openPlacePopup();
  }

  const handleRaceClick = (race) => {
    setSelectedRace(race);
    openRacePopup();
  }

  return (
    <div className="page">
      <Header />
      <Lead />
      <Map onPlaceClick={handlePlaceClick} />
      <Races races={raceList}
        onRaceClick={handleRaceClick} />
      <Books />
      <Footer />
      <PopupPlace place={selectedPlace}
        isOpen={isPlacePopupOpen}
        closePopup={closePopup} />
      <PopupRace race={selectedRace}
        isOpen={isRacePopupOpen}
        closePopup={closePopup} />

    </div>
  )
}

export default App;
