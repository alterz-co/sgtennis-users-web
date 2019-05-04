import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Table, Button } from 'semantic-ui-react';

class MaleDoubles extends Component {
  render(){
    const { userId, maleDoubles } = this.props;

    return(
      <div style={{ marginTop: 30 }}>
        <Header as='h4' style={{ color: '#bdbdbd' }}>Doubles</Header>
        <Table singleLine style={{ marginTop: 30 }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Year</Table.HeaderCell>
              <Table.HeaderCell>Tournament</Table.HeaderCell>
              <Table.HeaderCell>Result</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {
            maleDoubles && maleDoubles.map(maleDouble => {
              return maleDouble.userId === userId && (
                <Table.Row key={maleDouble.id}>
                  <Table.Cell>{maleDouble.year}</Table.Cell>
                  <Table.Cell>{maleDouble.tournament}</Table.Cell>
                  <Table.Cell>{maleDouble.result}</Table.Cell>
                  <Table.Cell>
                    <Button as={Link} to={`/tournament/edit/${maleDouble.id}`} basic color='black' floated='right'>
                      Edit
                    </Button>
                  </Table.Cell>
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

export default MaleDoubles;
