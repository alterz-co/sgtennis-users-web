import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Grid, Button, Icon, Divider, Header } from 'semantic-ui-react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import _ from 'lodash';
import LoaderComponent from '../../LoaderComponent';
import MaleSingles from './MaleSingles';
import FemaleSingles from './FemaleSingles';
import MaleDoubles from './MaleDoubles';
import FemaleDoubles from './FemaleDoubles';

import * as ROUTES from '../../../constants/routes';

class UserTournaments extends Component {
  render(){
    const { auth, profile, maleSingles, femaleSingles, maleDoubles, femaleDoubles } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    if(!maleSingles){
      return <LoaderComponent/>
    }

    if(!maleDoubles){
      return <LoaderComponent/>
    }

    const maleSinglesYear = _.orderBy(maleSingles, ['year'], ['desc']);
    const femaleSinglesYear = _.orderBy(femaleSingles, ['year'], ['desc']);
    const maleDoublesYear = _.orderBy(maleDoubles, ['year'], ['desc']);
    const femaleDoublesYear = _.orderBy(femaleDoubles, ['year'], ['desc']);

    return(
      <div>
        <Grid style={{ marginTop: 20 }}>
          <Grid.Column width={12}></Grid.Column>
          <Grid.Column width={4}>
            <Button as={Link} to={ROUTES.USER_TOURNAMENT_ADD} color='black' style={{ marginBottom: 10 }}>
              <Icon name='plus' /> Tournament
            </Button>
          </Grid.Column>
        </Grid>
        <Divider horizontal>
          <Header as='h3'>
              <Icon name='calendar alternate' />Past Tournaments
          </Header>
        </Divider>
        {profile.gender === 'Male' ? <MaleSingles userId={auth.uid} maleSingles={maleSinglesYear}/> : <FemaleSingles userId={auth.uid} femaleSingles={femaleSinglesYear}/>}
        {profile.gender === 'Male' ? <MaleDoubles userId={auth.uid} maleDoubles={maleDoublesYear}/> : <FemaleDoubles userId={auth.uid} femaleDoubles={femaleDoublesYear}/>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    maleSingles: state.firestore.ordered.maleSingles,
    femaleSingles: state.firestore.ordered.femaleSingles,
    maleDoubles: state.firestore.ordered.maleDoubles,
    femaleDoubles: state.firestore.ordered.femaleDoubles
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'userTournaments', storeAs: 'maleSingles', where: ['category', '==', "Male Singles"] },
    { collection: 'userTournaments', storeAs: 'femaleSingles', where: ['category', '==', "Female Singles"] },
    { collection: 'userTournaments', storeAs: 'maleDoubles', where: ['category', '==', "Male Doubles"] },
    { collection: 'userTournaments', storeAs: 'femaleDoubles', where: ['category', '==', "Female Doubles"] }
  ])
)(UserTournaments);
