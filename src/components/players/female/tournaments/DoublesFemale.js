import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react';
import _ from 'lodash';
import LoaderComponent from '../../../LoaderComponent';

class DoublesFemale extends Component {
  render(){
    const { userId, userTournaments } = this.props;

    const doubles = _.reject(userTournaments, { 'category': 'Female Singles' });
    const doublesYear = _.orderBy(doubles, ['year'], ['desc']);

    console.log('doubles ', doubles)

    if(!doublesYear){
      return <LoaderComponent/>
    }

    return(
      <div style={{ marginTop: 30 }}>
        <Header as='h4' style={{ color: '#bdbdbd' }}>Doubles</Header>
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
            doublesYear && doublesYear.map(double => {
              return double.userId === userId && (
                <Table.Row key={double.id}>
                  <Table.Cell>{double.year}</Table.Cell>
                  <Table.Cell>{double.tournament}</Table.Cell>
                  <Table.Cell>{double.result}</Table.Cell>
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

export default DoublesFemale;
