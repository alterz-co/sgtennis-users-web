import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Grid, Header, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/authActions';

import * as ROUTES from '../../constants/routes';

class Register extends Component {

  state = {
    name: '',
    gender: '',
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
      this.setState({ error: 'Fill in all fields with asterisk' });
      return false;
    } else {
      return true;
    }
  }

  isFormEmpty = ({ name, gender, email, password }) => {
    return name === '' || gender === '' || email === '' || password === '';
  }

  onSubmit = event => {
    event.preventDefault();
    if(this.isFormValid()){
      this.setState({ error: '' });
      const newUser = {
        name: this.state.name,
        gender: this.state.gender,
        email: this.state.email,
        password: this.state.password
      }
      this.props.register(newUser);
      this.setState({
        name: '',
        gender: '',
        email: '',
        password: ''
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
            Register for Alterz
          </Header>
          <p style={{ marginTop: 20 }}>Hello! <span role="img" aria-label="wave">👋</span></p>
          <p style={{ marginBottom: 20 }}>Before you proceed there are a couple of things you need to be aware of.
          We are currently in beta mode: this means that the product is not very stable at the moment.
          There may be crashes, data loss and speed/performance issues.
          </p>
          {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
          {this.props.authError && <p style={{ color: 'red' }}>{this.props.authError}</p>}
          <Form size='large' onSubmit={this.onSubmit}>
            <Form.Field>
              <label>Name <span style={{ color: 'red' }}>*</span></label>
              <input
                fluid='true'
                name='name'
                type='text'
                placeholder='Your name'
                value={this.state.name}
                onChange={this.onChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Gender <span style={{ color: 'red' }}>*</span></label>
              <select className="ui fluid dropdown" name="gender" value={this.state.gender} onChange={this.onChange}>
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </Form.Field>
            <Form.Field>
              <label>Email Address <span style={{ color: 'red' }}>*</span></label>
              <input
                fluid='true'
                name='email'
                type='email'
                placeholder='your@email.com'
                value={this.state.email}
                onChange={this.onChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Password <span style={{ color: 'red' }}>*</span></label>
              <input
                fluid='true'
                name='password'
                type='password'
                value={this.state.password}
                onChange={this.onChange}
              />
            </Form.Field>
            <p>
              By creating an account, you agree to our
              <Link to={ROUTES.TERMS} style={{ color: '#acacac' }}> terms</Link>.
            </p>
            <Button color='black' fluid size='large'>Register</Button>
            {this.state.error && <p>{this.state.error.message}</p>}
          </Form>
          <p style={{ marginTop: 20, textAlign: 'center' }}>
            Already have an account?{' '}
            <Link to={ROUTES.LOGIN} style={{ color: '#acacac', fontWeight: 'bold' }}>Login</Link>
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
    register: (newUser) => dispatch(register(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
