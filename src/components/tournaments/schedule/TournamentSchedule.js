import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Divider, Header, Segment } from 'semantic-ui-react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import LoaderComponent from '../../LoaderComponent';
import TournamentHeader from '../TournamentHeader';

import * as ROUTES from '../../../constants/routes';

class TournamentSchedule extends Component {
  render(){
    const { auth, tournamentId, tournament, schedule } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    if(!schedule){
      return <LoaderComponent/>
    }

    return(
      <Container>
        <TournamentHeader tournamentId={tournamentId} tournament={tournament}/>
        <Divider/>
        <Header as='h2' textAlign='center'>Schedule</Header>
        {
          schedule && schedule.map(schedule => {
            return schedule.tournamentId === tournamentId && (
              <div key={schedule.id} style={{ marginTop: 50 }}>
                <Segment>
                  <div
                    style={{ marginTop: 20, marginBottom: 50 }}
                    dangerouslySetInnerHTML={{ __html: schedule.description }}
                  >
                  </div>
                </Segment>
              </div>
            )
          })
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    schedule: state.firestore.ordered.schedule
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([ { collection: 'schedule' } ])
)(TournamentSchedule);
