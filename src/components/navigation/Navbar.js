import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header, Button, Dropdown, Modal, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/authActions';
import logo from '../../logo.svg';

import * as ROUTES from '../../constants/routes';

class Navbar extends Component {
  render(){
    return(
      <div>
        {this.props.auth.uid ? <NavAuth profile={this.props.profile} logout={this.props.logout}/> : <NavNonAuth/>}
      </div>
    )
  }
}

class NavNonAuth extends Component {

  state = {
    modalOpen: false
  }

  handleOpen = () => this.setState({
    modalOpen: true
  })

  handleClose = () => this.setState({
    modalOpen: false
  })

  render(){

    const betaDetails = (
      <Modal
        trigger={<Button basic color='pink' style={{ marginLeft: 10, marginBottom: 40, fontSize: '10px' }}
         onClick={this.handleOpen}>
          BETA
        </Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='bug' content='What this means' />
        <Modal.Content>
          <p>Beta Products may contain unknown defects and bugs.</p>
          <p>For more info:{' '}
            <a style={{ color: '#E03997' }} href="https://en.wikipedia.org/wiki/Software_release_life_cycle#Beta">Beta</a>,{' '}
            <a style={{ color: '#E03997' }} href="https://m.signalvnoise.com/software-has-bugs-this-is-normal-f64761a262ca">Bugs</a>
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )

    return(
      <Menu secondary style={{ paddingTop: 20, paddingBottom: 50, paddingLeft: 50, paddingRight: 50 }} stackable>
        <Menu.Item>
          <Image as={Link} to={ROUTES.LANDING} src={logo} size='small'/>
          { betaDetails }
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
              <Button as={Link} to={ROUTES.REGISTER} content='Register' basic color='black'/>
          </Menu.Item>
          <Menu.Item>
              <Button as={Link} to={ROUTES.LOGIN} content='Login' secondary/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

class NavAuth extends Component {

  state = {
    modalOpen: false
  }

  handleOpen = () => this.setState({
    modalOpen: true
  })

  handleClose = () => this.setState({
    modalOpen: false
  })

  render(){

    const betaDetails = (
      <Modal
        trigger={<Button basic color='pink' style={{ marginLeft: 10, marginBottom: 40, fontSize: '10px' }}
         onClick={this.handleOpen}>
          BETA
        </Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='bug' content='What this means' />
        <Modal.Content>
          <p>Beta Products may contain unknown defects and bugs.</p>
          <p>For more info:{' '}
            <a style={{ color: '#E03997' }} href="https://en.wikipedia.org/wiki/Software_release_life_cycle#Beta">Beta</a>,{' '}
            <a style={{ color: '#E03997' }} href="https://m.signalvnoise.com/software-has-bugs-this-is-normal-f64761a262ca">Bugs</a>
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )

    return(
      <Menu secondary style={{ paddingTop: 20, paddingBottom: 50, paddingLeft: 50, paddingRight: 50 }} stackable>
        <Menu.Item>
          <Image as={Link} to={ROUTES.LANDING} src={logo} size='small'/>
          { betaDetails }
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item as={Link} to={ROUTES.HOME} name='Tournaments'/>
          <Menu.Item as={Link} to='' name='Players'/>
          <Menu.Item>
            <Dropdown pointing='top right' text={this.props.profile.name || '👤'}>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to={ROUTES.PROFILE} icon='user' text='Your Profile'/>
                <Dropdown.Item text='Logout' icon='power' onClick={() => this.props.logout()} />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
