function Header(): JSX.Element {
  return (
    <header id="top">
      <h1>Nobeen's Favourite Places</h1>
      <nav>
        <a href="#Medina">
          <u>The Prophet's Mosque</u>
        </a>{" "}
        |
        <a href="#Mecca">
          {" "}
          <u>The Grand Mosque</u>
        </a>
      </nav>
    </header>
  );
}

export default Header;
