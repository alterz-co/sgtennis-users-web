import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Divider, Header } from 'semantic-ui-react';
import TournamentHeader from './TournamentHeader';
import LoaderComponent from '../LoaderComponent';
import { connect } from 'react-redux';

import * as ROUTES from '../../constants/routes';

class TournamentAbout extends Component {
  render(){
    const { auth, tournamentId, tournament } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    if(!tournament){
      return <LoaderComponent/>
    }

    return(
      <Container>
        <TournamentHeader tournamentId={tournamentId} tournament={tournament}/>
        <Divider/>
        <Header as='h3' style={{ color: '#bdbdbd' }}>DESCRIPTION</Header>
        <div
          style={{ marginTop: 20, marginBottom: 50 }}
          dangerouslySetInnerHTML={{ __html: tournament.description }}
        >
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(TournamentAbout);
