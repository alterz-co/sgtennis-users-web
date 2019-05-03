import React, { Component } from 'react';
import { Container, Header, Grid, Icon } from 'semantic-ui-react';

class Landing extends Component {

  render(){
    return(
      <Container textAlign='center' style={{ marginTop: 50 }}>
        <Header as='h1'>What can you do with Alterz?</Header>
        <Grid columns={4} style={{ marginTop: 50 }} stackable>
          <Grid.Column>
            <Header as='h3' icon><Icon name='bell outline' /></Header>
            <Header as='h3' className="post-list">Tournament Updates</Header>
            <p>Live scoring, ongoing and delayed matches</p>
          </Grid.Column>
          <Grid.Column>
            <Header as='h3' icon><Icon name='bullhorn' /></Header>
            <Header as='h3'>Announcements</Header>
            <p>Reminders to sign up for upcoming tournaments</p>
          </Grid.Column>
          <Grid.Column>
            <Header as='h3' icon><Icon name='clipboard' /></Header>
            <Header as='h3'>Results</Header>
            <p>Match scores</p>
          </Grid.Column>
          <Grid.Column>
            <Header as='h3' icon><Icon name='calendar alternate' /></Header>
            <Header as='h3'>Tournament Schedule</Header>
            <p>Schedule for each tournament</p>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }

}

export default Landing;
