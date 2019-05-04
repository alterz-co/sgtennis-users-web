import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Header, Icon, Button } from 'semantic-ui-react';
import LoaderComponent from '../LoaderComponent';

class TournamentHeader extends Component {
  render(){
    const { tournamentId, tournament } = this.props;

    if(tournament){
      return(
        <Grid stackable>
          <Grid.Column width={13}>
            <Header as='h2' textAlign='left'>{tournament.title}</Header>
            <Header.Subheader textAlign='left'>Date: {tournament.date}</Header.Subheader>
            <Header.Subheader textAlign='left'>Time: {tournament.time}</Header.Subheader>
            <Header.Subheader textAlign='left'>Venue: {tournament.venue}</Header.Subheader>
            <a href={tournament.url} style={{ color: 'black' }}><Icon name='linkify' />Link</a>
          </Grid.Column>
          <Grid.Column width={3} style={{ paddingTop: 40 }}>
            <Button as={Link} to={`/tournament/edit/${tournamentId}`} color='grey' fluid>
              <Icon name='pencil' /> Edit
            </Button>
          </Grid.Column>
        </Grid>
      )
    } else {
      return <LoaderComponent/>
    }

  }
}

export default TournamentHeader;
