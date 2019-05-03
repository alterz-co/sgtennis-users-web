import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, List, Icon } from 'semantic-ui-react';

import * as ROUTES from '../../constants/routes';

class Footer extends Component {
  render(){
    return(
      <Container attached='bottom' textAlign='center' style={{ marginTop: 100, marginBottom: 50 }}>
        <List horizontal divided link>
          <List.Item as={Link} to='contact'>
            Contact: ziyi@alterz.co
          </List.Item>
          <List.Item as={Link} to={ROUTES.TERMS}>
            Terms
          </List.Item>
        </List>
        <div>
          Copyright <Icon name='copyright outline'/> 2019 Alterz. All rights reserved.
        </div>
        <div>
          Made with <Icon name='heart' style={{ color: '#ff0266', marginTop: 20 }} /> and <Icon name='coffee' style={{ marginTop: 20 }} /> by Ziyi
        </div>
      </Container>
    )
  }
}

export default Footer;
