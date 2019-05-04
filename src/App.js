import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Footer from './components/navigation/Footer';
import Landing from './components/landing/Landing';
import Terms from './components/landing/Terms';
import Home from './components/home/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ResetPassword from './components/auth/ResetPassword';
import Profile from './components/profile/Profile';
import ProfileEdit from './components/profile/ProfileEdit';
import UserTournamentsAdd from './components/profile/tournaments/UserTournamentsAdd';
import UserTournamentsEdit from './components/profile/tournaments/UserTournamentsEdit';
import Players from './components/players/Players';
import PlayerDetailsMale from './components/players/male/PlayerDetailsMale';
import PlayerDetailsFemale from './components/players/female/PlayerDetailsFemale';
import TournamentDetails from './components/tournaments/TournamentDetails';

import * as ROUTES from './constants/routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <div style={{ paddingBottom: 200 }}>
            <Switch>
              <Route exact path={ROUTES.LANDING} component={Landing} />
              <Route exact path={ROUTES.TERMS} component={Terms} />
              <Route exact path={ROUTES.REGISTER} component={Register} />
              <Route exact path={ROUTES.LOGIN} component={Login} />
              <Route exact path={ROUTES.PASSWORD_RESET} component={ResetPassword} />
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route path={ROUTES.PROFILE} component={Profile} exact/>
              <Route path={ROUTES.PROFILE_EDIT} component={ProfileEdit}/>
              <Route path={ROUTES.USER_TOURNAMENT_ADD} component={UserTournamentsAdd}/>
              <Route path={ROUTES.USER_TOURNAMENT_EDIT} component={UserTournamentsEdit}/>
              <Route path={ROUTES.PLAYERS} component={Players}/>
              <Route path={ROUTES.PLAYER_DETAILS_MALE} component={PlayerDetailsMale}/>
              <Route path={ROUTES.PLAYER_DETAILS_FEMALE} component={PlayerDetailsFemale}/>
              <Route path={ROUTES.TOURNAMENT_DETAILS} component={TournamentDetails}/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
