import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import LoaderComponent from '../../LoaderComponent';
import UserTournamentsEditForm from './UserTournamentsEditForm';

import * as ROUTES from '../../../constants/routes';

class UserTournamentsEdit extends Component {
  render(){
    const tournamentId = this.props.match.params.id;
    const { auth, tournament } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    if(!tournament){
      return <LoaderComponent/>
    }

    return(
      <UserTournamentsEditForm tournamentId={tournamentId} tournament={tournament} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const userTournaments = state.firestore.data.userTournaments;
  const tournament = userTournaments ? userTournaments[id] : null;

  return {
    auth: state.firebase.auth,
    tournament: tournament
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'userTournaments' }
  ])
)(UserTournamentsEdit);
