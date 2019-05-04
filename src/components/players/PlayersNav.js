import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Menu, Header } from 'semantic-ui-react';

import * as ROUTES from '../../constants/routes';

const PlayersNav = () => {
  return(
    <Grid.Column width={3}>
      <Menu vertical>
        <Header icon="info circle" attached inverted color="grey" content="Players" />
        <Menu.Item as={Link} to={ROUTES.PLAYERS_MALE}>Male</Menu.Item>
        <Menu.Item as={Link} to={ROUTES.PLAYERS_FEMALE}>Female</Menu.Item>
      </Menu>
    </Grid.Column>
  )
}

export default PlayersNav;
