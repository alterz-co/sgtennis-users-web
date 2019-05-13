import React, { Component } from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';
import LoaderComponent from '../LoaderComponent';

class TournamentHeader extends Component {
  render(){
    const { tournament } = this.props;

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
        </Grid>
      )
    } else {
      return <LoaderComponent/>
    }

  }
}

export default TournamentHeader;
