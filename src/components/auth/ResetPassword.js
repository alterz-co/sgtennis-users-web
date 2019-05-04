import React, { Component } from 'react';
import { Grid, Header, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { resetPassword } from '../../redux/actions/authActions';

class ResetPassword extends Component {

  state = {
    email: '',
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

  isFormEmpty = ({ email }) => {
    return email === '';
  }

  onSubmit = event => {
    event.preventDefault();
    if(this.isFormValid()){
      this.props.resetPassword(this.state.email)
      this.setState({
        email: '',
        error: ''
      });
    }
  }

  render(){
    return(
      <Grid centered>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' icon color='black' textAlign='center' style={{ marginBottom: 50 }}>
            Reset Password
          </Header>
          {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
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
            <Button color='black' fluid size='large'>Send</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetPassword: (email) => dispatch(resetPassword(email))
  }
}

export default connect(null, mapDispatchToProps)(ResetPassword);
