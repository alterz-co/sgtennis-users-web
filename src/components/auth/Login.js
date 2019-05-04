import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Grid, Header, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/authActions';

import * as ROUTES from '../../constants/routes';

class Login extends Component {

  state = {
    email: '',
    password: '',
    error: ''
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  isFormValid = () => {
    if(this.isFormEmpty(this.state)){
      this.setState({ error: 'Fill in all fields' });
      return false;
    } else {
      return true;
    }
  }

  isFormEmpty = ({ email, password }) => {
    return email === '' || password === '';
  }

  onSubmit = event => {
    event.preventDefault();
    if(this.isFormValid()){
      this.props.login(this.state);
      this.setState({
        email: '',
        password: '',
        error: ''
      });
    }
  }

  render(){
    if(this.props.auth.uid){
      return <Redirect to={ROUTES.HOME}/>
    }

    return(
      <Grid centered>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' icon color='black' textAlign='center' style={{ marginBottom: 50 }}>
            Login to Alterz
          </Header>
          {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
          {this.props.authError && <p style={{ color: 'red' }}>{this.props.authError}</p>}
          <Form size='large' onSubmit={this.onSubmit}>
            <Form.Field>
              <label>Email Address</label>
              <input
                fluid='true'
                name='email'
                type='email'
                value={this.state.email}
                onChange={this.onChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                fluid='true'
                name='password'
                type='password'
                value={this.state.password}
                onChange={this.onChange}
              />
            </Form.Field>
            <Button color='black' fluid size='large'>Login</Button>
            {this.state.error && <p>{this.state.error.message}</p>}
          </Form>
          <p style={{ marginTop: 20, textAlign: 'center' }}>
            Not registered with us yet?{' '}
            <Link to={ROUTES.REGISTER} style={{ color: '#acacac', fontWeight: 'bold' }}>Register</Link>
          </p>
          <p style={{ marginTop: 20, textAlign: 'center' }}>
            Forgot your password?{' '}
            <Link to={ROUTES.PASSWORD_RESET} style={{ color: '#acacac', fontWeight: 'bold' }}>Reset Password</Link>
          </p>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (creds) => dispatch(login(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
