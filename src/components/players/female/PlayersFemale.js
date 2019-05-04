import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, Grid, Header, Table, Button } from 'semantic-ui-react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import LoaderComponent from '../../LoaderComponent';

import * as ROUTES from '../../../constants/routes';

class PlayersFemale extends Component {

  render(){
    const { auth, female } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    if(!female){
      return <LoaderComponent/>
    }

    return(
      <Container style={{ width: 800 }}>
        <Grid>
          <Grid.Column width={13}>
            <Header as='h2' style={{ marginBottom: 40 }}>
              <span role='img' aria-label='tennis-ball' style={{ paddingLeft: 10, paddingRight: 10 }}>♂️</span>
              Female
            </Header>
          </Grid.Column>
          <Grid.Column width={3}>
            <Button as={Link} to={ROUTES.PROFILE} color='black' style={{ marginBottom: 10 }}>
              Your Profile
            </Button>
          </Grid.Column>
        </Grid>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {
            female && female.map(female => {
              return (
                <Table.Row key={female.id}>
                  <Table.Cell>{female.name}</Table.Cell>
                  <Table.Cell>
                    <Button as={Link} to={`/player/female/${female.id}`} basic color='grey' floated='right'>
                      Details
                    </Button>
                  </Table.Cell>
                </Table.Row>
              )
            })
          }
          </Table.Body>
        </Table>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    female: state.firestore.ordered.female
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'users', storeAs: 'female', where: ['gender', '==', "Female"] }
  ])
)(PlayersFemale);
