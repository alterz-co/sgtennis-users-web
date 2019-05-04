import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Table, Button } from 'semantic-ui-react';

class FemaleDoubles extends Component {
  render(){
    const { userId, femaleDoubles } = this.props;

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
            femaleDoubles && femaleDoubles.map(femaleDouble => {
              return femaleDouble.userId === userId && (
                <Table.Row key={femaleDouble.id}>
                  <Table.Cell>{femaleDouble.year}</Table.Cell>
                  <Table.Cell>{femaleDouble.tournament}</Table.Cell>
                  <Table.Cell>{femaleDouble.result}</Table.Cell>
                  <Table.Cell>
                    <Button as={Link} to={`/tournament/edit/${femaleDouble.id}`} basic color='black' floated='right'>
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

export default FemaleDoubles;
