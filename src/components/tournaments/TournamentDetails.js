import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import TournamentNav from './TournamentNav';
import TournamentUpdates from './updates/TournamentUpdates';
import TournamentResults from './results/TournamentResults';
import TournamentSchedule from './schedule/TournamentSchedule';
import TournamentAbout from './TournamentAbout';

class TournamentDetails extends Component {
  render(){
    const tournamentId = this.props.match.params.id;
    const { tournament } = this.props;

    return(
      <Grid stackable>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column width={3}>
          <TournamentNav tournamentId={tournamentId}/>
        </Grid.Column>
        <Grid.Column width={11} className='customBorder'>
          <Route
            exact
            path={`/tournament/${tournamentId}`}
            render={() => <TournamentUpdates tournament={tournament} tournamentId={tournamentId}/>}
          />
          <Route
            path={`/tournament/${tournamentId}/updates`}
            render={() => <TournamentUpdates tournament={tournament} tournamentId={tournamentId}/>}
          />
          <Route
            path={`/tournament/${tournamentId}/results`}
            render={() => <TournamentResults tournament={tournament} tournamentId={tournamentId}/>}
          />
          <Route
            path={`/tournament/${tournamentId}/schedule`}
            render={() => <TournamentSchedule tournament={tournament} tournamentId={tournamentId}/>}
          />
          <Route
            path={`/tournament/${tournamentId}/about`}
            render={() => <TournamentAbout tournament={tournament} tournamentId={tournamentId}/>}
          />
        </Grid.Column>
        <Grid.Column width={1}></Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const tournaments = state.firestore.data.tournaments;
  const tournament = tournaments ? tournaments[id] : null;

  return {
    tournament: tournament
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'tournaments' }
  ])
)(TournamentDetails);
