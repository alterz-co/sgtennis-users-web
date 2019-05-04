import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Grid, Header, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { editProfile } from '../../redux/actions/userActions';

import * as ROUTES from '../../constants/routes';

class ProfileEditForm extends Component {

  state = {
    name: this.props.user.name,
    gender: this.props.user.gender,
    age: this.props.user.age,
    nationality: this.props.user.nationality,
    phone: this.props.user.phone
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = event => {
    event.preventDefault();

    const userId = this.props.userId;

    const editProfile = {
      name: this.state.name,
      gender: this.state.gender,
      age: this.state.age,
      nationality: this.state.nationality,
      phone: this.state.phone
    }

    this.props.editProfile(userId, editProfile);
  }

  render(){
    return(
      <Container>
        <Grid centered>
          <Grid.Column style={{ maxWidth: 800 }}>
            <Button
              as={Link} to={ROUTES.PROFILE}
              content='Back' icon='chevron circle left' labelPosition='left' basic color="black"
            />
            <Header as='h2' icon color='black' textAlign='center'>Edit Profile</Header>
            <Form size='large' onSubmit={this.onSubmit}>
              <Form.Field>
                <label>Name</label>
                <input
                  fluid='true'
                  name='name'
                  type='text'
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Gender</label>
                <select className="ui fluid dropdown" name="gender" value={this.state.gender} onChange={this.onChange}>
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </Form.Field>
              <Form.Field>
                <label>Age</label>
                <input
                  fluid='true'
                  name='age'
                  type='text'
                  value={this.state.age}
                  onChange={this.onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Nationality</label>
                <input
                  fluid='true'
                  name='nationality'
                  type='text'
                  value={this.state.nationality}
                  onChange={this.onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Phone number</label>
                <input
                  fluid='true'
                  name='phone'
                  type='text'
                  value={this.state.phone}
                  onChange={this.onChange}
                />
              </Form.Field>
              <Button color='black' fluid size='large'>Save</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editProfile: (userId, profile) => dispatch(editProfile(userId, profile))
  }
}

export default connect(null, mapDispatchToProps)(ProfileEditForm);
