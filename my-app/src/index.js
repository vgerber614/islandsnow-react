import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.png';
import { Container, Header, Menu, Icon, Dropdown, Image } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
            <Menu.Item fitted><Icon name="twitter"/></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest p"/></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="search"/></Menu.Item>
            <Menu.Item fitted><Icon name="home"/></Menu.Item>
            <Menu.Item fitted><Icon name="user"/></Menu.Item>
            <Dropdown item text="MY CART 0" icon="cart">
              <Dropdown.Menu>
                <Dropdown.Item>Your cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image src={logo} centered/>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Header as="h1">MiddleMenu</Header>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Header as="h1">FullWidthImage</Header>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Header as="h1">FooterMenu</Header>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));