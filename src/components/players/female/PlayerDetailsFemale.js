import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, Grid, Header, Button, Divider, Icon } from 'semantic-ui-react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import LoaderComponent from '../../LoaderComponent';
import TournamentsFemale from './tournaments/TournamentsFemale';

import * as ROUTES from '../../../constants/routes';

class PlayerDetailsFemale extends Component {

  render(){
    const { auth, userId, user } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    if(!user){
      return <LoaderComponent/>
    }

    return(
      <Container style={{ width: 800 }}>
        <Button
          as={Link} to={ROUTES.PLAYERS}
          content='Back' icon='chevron circle left' labelPosition='left' basic color="black"
          style={{ marginBottom: 50 }}
        />
        <Grid>
          <Grid.Column width={13}>
            <Header as='h2'>{user.name}</Header>
          </Grid.Column>
          <Grid.Column width={3}>
            <Button as={Link} to={ROUTES.PROFILE} color='black' style={{ marginBottom: 10 }}>
              Your Profile
            </Button>
          </Grid.Column>
        </Grid>
        <hr/>
        <div>
          <Header as='h4' style={{ color: '#bdbdbd' }}>Basic Info</Header>
          <p>Gender: {user.gender}</p>
          <p>Age: {user.age}</p>
          <p>Nationality: {user.nationality}</p>
          <Header as='h4' style={{ color: '#bdbdbd' }}>Contact Info</Header>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
        <Divider horizontal>
          <Header as='h3'>
              <Icon name='calendar alternate' />Past Tournaments
          </Header>
        </Divider>
        <TournamentsFemale userId={userId}/>
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const users = state.firestore.data.users;
  const user = users ? users[id] : null;

  return {
    auth: state.firebase.auth,
    userId: id,
    user: user
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'users' }
  ])
)(PlayerDetailsFemale);
