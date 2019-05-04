import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, Grid, Header, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import UserTournaments from './tournaments/UserTournaments';

import * as ROUTES from '../../constants/routes';

class Profile extends Component {

  render(){
    const { auth, profile } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    return(
      <Container style={{ width: 800 }}>
        <Grid>
          <Grid.Column width={13}>
            <Header as='h2'>{profile.name}</Header>
          </Grid.Column>
          <Grid.Column width={3}>
            <Button color='black' fluid as={Link} to={`/profile/${auth.uid}`} style={{ marginBottom: 10 }}>
              Edit
            </Button>
          </Grid.Column>
        </Grid>
        <hr/>
        <div>
          <Header as='h4' style={{ color: '#bdbdbd' }}>Basic Info</Header>
          <p>Gender: {profile.gender}</p>
          <p>Age: {profile.age}</p>
          <p>Nationality: {profile.nationality}</p>
          <Header as='h4' style={{ color: '#bdbdbd' }}>Contact Info</Header>
          <p>Email: {profile.email}</p>
          <p>Phone: {profile.phone}</p>
        </div>
        <UserTournaments/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Profile);
