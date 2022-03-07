import FavouritePlace from "./FavouritePlace";

function MainContent(): JSX.Element {
  return (
    <main>
      <FavouritePlace
        id={"Medina"}
        imagePath={"images/masjidNabawi.jpg"}
        caption={"The Prophet's Mosque"}
        city={"Medina"}
        country={"Saudi Arabia"}
        mapLink={
          "https://www.google.co.uk/maps/place/Al+Masjid+an+Nabawi/@24.4675866,39.6085361,18z/data=!4m9!1m2!2m1!1sMasjid+Nabawi!3m5!1s0x15bdbfaa728d4c15:0x39c9cca9e8b98e2f!8m2!3d24.467197!4d39.6111545!15sCg1NYXNqaWQgTmFiYXdpWg8iDW1hc2ppZCBuYWJhd2mSAQZtb3NxdWWaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTnphblJFVVhCUlJSQUI"
        }
        description={
          "This is the Prophet Muhammad's (Peace be Upon him) mosque. Medina became known as the Prophet's city after his migration towards it from Mecca in order to escape persecution. The migration marks the beginning of the Islamic calendar I went there near the end of November, and it was the most beautiful place I've ever been."
        }
      />
      <FavouritePlace
        id={"Mecca"}
        imagePath={"images/mecca.jpg"}
        caption={"The Grand Mosque"}
        city={"Mecca"}
        country={"Saudi Arabia"}
        mapLink={
          "https://www.google.co.uk/maps/place/Masjid+al-Haram/@21.4160428,39.8263333,14.93z/data=!4m9!1m2!2m1!1sgrand+mosque+makkah!3m5!1s0x15c204b74d3fb493:0x55d1f94f8e094785!8m2!3d21.4228714!4d39.8257347!15sChNncmFuZCBtb3NxdWUgbWFra2FoWhUiE2dyYW5kIG1vc3F1ZSBtYWtrYWiSAQZtb3NxdWWaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTnpkMDlJYm1KbkVBRQ"
        }
        description={
          "This is the Grand Mosque, with the Ka'bah. The holiest site in the world for Muslims. This is the direction that all Muslims pray towards and was built by Prohet Abraham and Ishmael (peace be upon them both)."
        }
      />
    </main>
  );
}

export default MainContent;
