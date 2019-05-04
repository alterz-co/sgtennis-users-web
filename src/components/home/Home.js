import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Header } from 'semantic-ui-react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import TournamentList from '../tournaments/TournamentList';

import * as ROUTES from '../../constants/routes';

class Home extends Component {
  render(){
    if(!this.props.auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    return(
      <Grid stackable>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column width={10}>
          <Header as='h2' style={{ marginBottom: 40 }}>
            <span role="img" aria-label="tennis-ball">🎾</span> Your Tournaments
          </Header>
          <TournamentList organiserId={this.props.auth.uid} tournaments={this.props.tournaments}/>
        </Grid.Column>
        <Grid.Column width={4}>
        </Grid.Column>
        <Grid.Column width={1}></Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    tournaments: state.firestore.ordered.tournaments
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'tournaments', orderBy: ['startDate', 'desc' ]}
  ])
)(Home);
