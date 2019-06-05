import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Divider, Header, Feed } from 'semantic-ui-react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import LoaderComponent from '../../LoaderComponent';
import TournamentHeader from '../TournamentHeader';
import TournamentUpdatesAdd from './TournamentUpdatesAdd';

import * as ROUTES from '../../../constants/routes';

class TournamentUpdates extends Component {
  render(){
    const { auth, tournamentId, tournament, updates } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    if(!updates){
      return <LoaderComponent/>
    }

    return(
      <Container>
        <TournamentHeader tournamentId={tournamentId} tournament={tournament}/>
        <Divider/>
        <Header as='h2' textAlign='center'>Updates</Header>
        <TournamentUpdatesAdd tournamentId={tournamentId}/>
        <Feed>
        {
          updates && updates.map(update => {
            return update.tournamentId === tournamentId && (
              <Feed.Event key={update.id} style={{ padding: 20 }}>
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User style={{ color: 'black', fontSize: 18 }}>{update.name}</Feed.User>
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Date>{update.createdAt}</Feed.Date>
                  </Feed.Meta>
                  <Feed.Extra text>
                    <div
                      style={{ marginTop: 20, marginBottom: 50 }}
                      dangerouslySetInnerHTML={{ __html: update.body }}
                    >
                    </div>
                  </Feed.Extra>
                </Feed.Content>
              </Feed.Event>
            )
          })
        }
        </Feed>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    updates: state.firestore.ordered.updates
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'updates', orderBy: ['createdAt', 'desc'] }
  ])
)(TournamentUpdates);
