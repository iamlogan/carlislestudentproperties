'use strict';

const e = React.createElement;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav class="navbar navbar-expand-md fixed-top navbar-dark darkbgcolour">
        <a class="navbar-brand mb-0" id="brand" href="index.html">Carlisle Student Properties</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Properties
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="bowman-42.html">42 Bowman Street</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="oswald-106.html">106 Oswald Street</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="alexander-50.html">50 Alexander Street</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="alexander-42.html">42 Alexander Street</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="lindisfarne-21.html">21 Lindisfarne Street</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="linton-45.html">45 Linton Street</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="sybil-20.html">20 Sybil Street</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">About</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const domContainer = document.querySelector('#nav_bar_container');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(NavBar));
