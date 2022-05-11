import React from 'react';
import './Styles.css';
import { Header } from './components/Header';
import { Lead } from './components/Lead';
import { Map } from './components/Map';
import { Races } from './components/Races';
import { Books } from './components/Books';
import { Footer } from './components/Footer';
import { PopupPlace } from './components/PopupPlace';
import { PopupRace } from './components/PopupRace';
import { raceList } from './utilities/constants';
import { Location } from './utilities/constants';
import { RaceType } from './utilities/constants';

function App() {

  // state variables for popups

  const [isPlacePopupOpen, setIsPlacePopupOpen] = React.useState<boolean>(false);

  const [isRacePopupOpen, setIsRacePopupOpen] = React.useState<boolean>(false);

  const [selectedPlace, setSelectedPlace] = React.useState<Location | null>(null);

  const [selectedRace, setSelectedRace] = React.useState<RaceType | null>(null);

  const openPlacePopup = () => {
    setIsPlacePopupOpen(true);
  }

  const openRacePopup = () => {
    setIsRacePopupOpen(true);
  }

  const closePopup = () => {
    setIsPlacePopupOpen(false);
    setIsRacePopupOpen(false);
    setSelectedPlace(null);
    setSelectedRace(null);
  }

  // functions for opening popups and placing relevant info into modules
  const handlePlaceClick = (place: Location) => {
    setSelectedPlace(place);
    openPlacePopup();
  }

  const handleRaceClick = (race: RaceType) => {
    setSelectedRace(race);
    openRacePopup();
  }

  return (
    <div className="page">
      <Header />
      <Lead />
      <Map
        onPlaceClick={handlePlaceClick}
      />
      <Races
        races={raceList}
        onRaceClick={handleRaceClick} />
      <Books />
      <Footer />
      <PopupPlace
        place={selectedPlace!}
        isOpen={isPlacePopupOpen}
        closePopup={closePopup} />
      <PopupRace
        race={selectedRace!}
        isOpen={isRacePopupOpen}
        closePopup={closePopup} />

    </div>
  )
}

export default App;
