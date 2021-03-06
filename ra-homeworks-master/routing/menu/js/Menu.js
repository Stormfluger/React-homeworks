class Menu extends React.Component {
  constructor({ className, activeClassName, ...props }) {
    super(props);
    this.className = className;
    this.activeClassName = activeClassName;
  }
  render() {
    return (
      <nav className="menu">
        <NavLink to="/" exact className={this.className} activeClassName={this.activeClassName}>Главная</NavLink>
        <NavLink to="/drift" className={this.className} activeClassName={this.activeClassName}>Дрифт-такси</NavLink>
        <NavLink to="/timeattack" className={this.className} activeClassName={this.activeClassName}>Time Attack</NavLink>
        <NavLink to="/forza" {...this.props}>Forza Karting</NavLink>
      </nav>
    );
  }
}
