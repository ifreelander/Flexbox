import React, { useState } from 'react';
import Flexbox from 'flexbox-react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="nav" id="myNav">
        <a href="#" className="active">
          Navbar
        </a>

        <a href="#">Home</a>

        <a href="#">Links</a>

        <a href="#">Disabled</a>

        <a href="#">Dropdown</a>
      </div>

      <div className="header">
        <h1 className="header-title">Hello, world!</h1>
        <p>
          This is a template for a simple marketing or informational website. It includes a large
          callout called a jumbotron and three supporting pieces of content. Use it as a starting
          point to create something more unique.
        </p>
        <button className="header-button" href="#">
          Learn more »
        </button>
      </div>

      <div className="body">
        <div className="body-div">
          <h2 className="header-title-body">Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam
            porta sem malesuada magna mollis euismod. Donec sed odio dui.
          </p>
          <button className="body-button" href="#">
            View details »
          </button>
        </div>
        <div className="body-div">
          <h2 className="header-title-body">Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam
            porta sem malesuada magna mollis euismod. Donec sed odio dui.
          </p>
          <button className="body-button" href="#">
            View details »
          </button>
        </div>
        <div className="body-div">
          <h2 className="header-title-body">Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam
            porta sem malesuada magna mollis euismod. Donec sed odio dui.
          </p>
          <button className="body-button" href="#">
            View details »
          </button>
        </div>
      </div>
      <hr className="hr" />

      <div className="footer">© Company 2017-2018</div>
    </div>
  );
};

export default App;
