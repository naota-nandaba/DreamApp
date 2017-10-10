const React = require('react');
const storiesOf = require('@storybook/react').storiesOf;
import 'bootstrap/dist/css/bootstrap.css';
import '../public/css/app.css'

storiesOf('Footer', module)
.add('(Stateless) Default', () => (

  <div className="container foot_contain">

    <nav className="navbar navbar-bottom">
        <a className="navbar-brand footer-brand"
           href="#"> © Naota Nandaba 2017 </a>
    </nav>

</div>

))
