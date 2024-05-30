import { Link } from "react-router-dom";


function Header(){
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid navbar">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="aboutus">About Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="cart">Cart</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="login">Login</Link>
        </li>
        <li class="nav-item1">
          <Link class="nav-link" to="form">Form</Link>
        </li>
        <li class="nav-item1">
          <Link class="nav-link" to="one">One</Link>
        </li>
        <li class="nav-item1">
          <Link class="nav-link" to="two">Two</Link>
        </li>
        <li class="nav-item1">
          <Link class="nav-link" to="error">Error</Link>
        </li>
        <li class="nav-item1">
          <Link class="nav-link" to="main">Main</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}
export default Header;