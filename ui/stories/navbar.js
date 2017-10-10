const React = require('react');
const storiesOf = require('@storybook/react').storiesOf;
import 'bootstrap/dist/css/bootstrap.css';
import '../public/css/app.css'

storiesOf('NavBar', module)
.add('(Stateless) Default', () => (

  <div className="container nav_contain">

    <nav className="navbar">

        <div className="navbar-header">

        <ul className="nav nav-pills" role="tablist">
          <li role="presentation" className="1 active"><a href="#">My Mu</a></li>
          <li role="presentation" className="unactive"><a href="#">Interpret</a></li>
          <li role="presentation" classname="3"><a href="#">Why Mu?</a></li>
        </ul>

        </div>

    </nav>

</div>

))
