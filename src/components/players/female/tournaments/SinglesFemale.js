import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react';
import _ from 'lodash';
import LoaderComponent from '../../../LoaderComponent';

class SinglesFemale extends Component {
  render(){
    const { userId, userTournaments } = this.props;

    const singles = _.reject(userTournaments, { 'category': 'Female Doubles' });
    const singlesYear = _.orderBy(singles, ['year'], ['desc']);

    if(!singlesYear){
      return <LoaderComponent/>
    }

    return(
      <div>
        <Header as='h4' style={{ color: '#bdbdbd' }}>Singles</Header>
        <Table singleLine style={{ marginTop: 30 }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Year</Table.HeaderCell>
              <Table.HeaderCell>Tournament</Table.HeaderCell>
              <Table.HeaderCell>Result</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {
            singlesYear && singlesYear.map(single => {
              return single.userId === userId && (
                <Table.Row key={single.id}>
                  <Table.Cell>{single.year}</Table.Cell>
                  <Table.Cell>{single.tournament}</Table.Cell>
                  <Table.Cell>{single.result}</Table.Cell>
                </Table.Row>
              )
            })
          }
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default SinglesFemale;
