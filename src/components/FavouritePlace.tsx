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
      <p>{props.caption}</p>
      <p>
        {props.location.city}, {props.location.country} (
        <a href={props.location.mapLink}>map link</a>
      </p>
    </div>
  );
}

export default FavouritePlace;
