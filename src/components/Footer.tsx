import NavItem from "./NavItem";

function Footer(): JSX.Element{
    return(
        <footer>
            <NavItem label = {"Abdul"} scholarLink = {"https://my-fav-places.netlify.app/"}/>
            <NavItem label = {"Laura"} scholarLink = {"https://hardcore-northcutt-fafb4e.netlify.app/"}/>
            <NavItem label = {"Owen"} scholarLink = {"https://owen-fav-places.netlify.app/"}/>
        </footer>
    )
}

export default Footer;
