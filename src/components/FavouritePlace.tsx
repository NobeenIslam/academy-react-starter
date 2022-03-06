import FavouritePlaceProps from "./interface";

function FavouritePlace(props: FavouritePlaceProps): JSX.Element {
  return (
    <section className="FavouritePlace">
      <img src={props.imagePath} alt="" />
      <h1>{props.caption}</h1>
      <h2>
        {props.city}, {props.country} (<a href={props.mapLink}>map link</a>)
      </h2>
      <p>{props.description}</p>
    </section>
  );
}

export default FavouritePlace;
