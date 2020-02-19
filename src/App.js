import React, { useState } from 'react';

import Flexbox from 'flexbox-react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="nav">
        <div>
          <a href="#" className="navbar">
            Navbar
          </a>
          <a href="#">Home</a>
          <a href="#">Links</a>
          <a href="#">Disabled</a>
          <a href="#">Dropdown</a>
        </div>

        <form>
          <label>
            <input type="text" name="Search" placeholder="Search" />
          </label>
          <button>Search</button>
        </form>
      </div>
      <div className="header">
        <div className="header-fontsize">Hello, world!</div>
        <div>
          This is a template for a simple marketing or informational website. It includes a large
          callout called a jumbotron and three supporting pieces of content. Use it as a starting
          point to create something more unique.
        </div>
        <div>
          <button className="header-button" href="#">
            Learn more »
          </button>
        </div>
      </div>
      <div className="body">
        <div>
          <h2>Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam
            porta sem malesuada magna mollis euismod. Donec sed odio dui.
          </p>
          <p>
            <button href="#">View details »</button>
          </p>
        </div>
        <div>
          <h2>Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam
            porta sem malesuada magna mollis euismod. Donec sed odio dui.
          </p>

          <p>
            <button href="#">View details »</button>
          </p>
        </div>
        <div>
          <h2>Heading</h2>
          <p>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam
            porta sem malesuada magna mollis euismod. Donec sed odio dui.
          </p>
          <p>
            <button href="#">View details »</button>
          </p>
        </div>
      </div>

      <div className="footer">© Company 2017-2018</div>
    </div>
  );
};

export default App;
