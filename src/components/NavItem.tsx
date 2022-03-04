interface NavItemProps {
  label: string;
  scholarLink: string;
}

function NavItem(props: NavItemProps): JSX.Element {
  return (
    <>
      <span> | </span>
      <a href={props.scholarLink}>~{props.label}</a>
    </>
  );
}

export default NavItem;
