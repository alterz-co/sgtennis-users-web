import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PlayersNav from './PlayersNav';
import PlayersMale from './male/PlayersMale';
import PlayersFemale from './female/PlayersFemale';

import * as ROUTES from '../../constants/routes';

class Players extends Component {
  render(){
    const { auth } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    return(
      <div>
        <Grid>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={3}>
            <PlayersNav />
          </Grid.Column>
          <Grid.Column width={11}>
            <Route
              exact
              path={ROUTES.PLAYERS}
              render={() => <PlayersMale />}
            />
            <Route
              path={ROUTES.PLAYERS_MALE}
              render={() => <PlayersMale />}
            />
            <Route
              path={ROUTES.PLAYERS_FEMALE}
              render={() => <PlayersFemale />}
            />
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Players);
