import FavouritePlace from "./components/FavouritePlace";

function App(): JSX.Element {
  return (
    <FavouritePlace
      imagePath={"images/masjidNabawi.jpg"}
      caption={"The Prophet's Mosque"}
      location={{
        city: "Medina",
        country: "Saudi Arabia",
        mapLink:
          "https://www.google.co.uk/maps/place/Al+Masjid+an+Nabawi/@24.4675866,39.6085361,18z/data=!4m9!1m2!2m1!1sMasjid+Nabawi!3m5!1s0x15bdbfaa728d4c15:0x39c9cca9e8b98e2f!8m2!3d24.467197!4d39.6111545!15sCg1NYXNqaWQgTmFiYXdpWg8iDW1hc2ppZCBuYWJhd2mSAQZtb3NxdWWaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTnphblJFVVhCUlJSQUI",
      }}
      description={
        "This is the Prophet Muhammad's (Peace be Upon him) mosque. It's a lot bigger than it used to be due to development by the various ruling empires of the time. I went there near the end of November, and it was the most beautiful place I've ever been."
      }
    />
  );
}

export default App;
