interface NavItemProps {
  label: string;
  scholarLink: string;
}

function NavItem(props: NavItemProps): JSX.Element {
  return (
    <>
      <span> | </span>
      <a href={props.scholarLink}><u>{props.label}</u></a>
    </>
  );
}

export default NavItem;
