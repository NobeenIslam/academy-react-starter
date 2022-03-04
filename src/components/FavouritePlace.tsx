interface FavouritePlaceProps {
  imagePath: string;
  caption: string;
  location: { city: string; country: string; mapLink: string };
  description: string;
}

function FavouritePlace(props: FavouritePlaceProps): JSX.Element {
  return (
    <div>
      <img src={props.imagePath} alt="" />
      <h1>{props.caption}</h1>
      <h2>
        {props.location.city}, {props.location.country} (
        <a href={props.location.mapLink}>map link</a>)
      </h2>
      <p>{props.description}</p>
    </div>
  );
}

export default FavouritePlace;
