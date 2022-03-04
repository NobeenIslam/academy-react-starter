interface FavouritePlaceProps{
    imagePath: string;
    caption: string;
    location: {city: string; country: string; link:string};
    description: string;
}


function FavouritePlace(props: FavouritePlaceProps): JSX.Element{
    return (
        <div>
            <img src = {props.imagePath} alt =""/>
            <p>{props.caption}</p>
            <p>{props.location.city}, {props.location.country} (<a href = {props.location.link}>map link</a></p>
        </div>
    )
}

export default FavouritePlace