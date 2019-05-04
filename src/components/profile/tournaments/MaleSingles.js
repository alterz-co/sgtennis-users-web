import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Table, Button } from 'semantic-ui-react';

class MaleSingles extends Component {
  render(){
    const { userId, maleSingles } = this.props;

    return(
      <div>
        <Header as='h4' style={{ color: '#bdbdbd' }}>Singles</Header>
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
            maleSingles && maleSingles.map(maleSingle => {
              return maleSingle.userId === userId && (
                <Table.Row key={maleSingle.id}>
                  <Table.Cell>{maleSingle.year}</Table.Cell>
                  <Table.Cell>{maleSingle.tournament}</Table.Cell>
                  <Table.Cell>{maleSingle.result}</Table.Cell>
                  <Table.Cell>
                    <Button as={Link} to={`/tournament/edit/${maleSingle.id}`} basic color='black' floated='right'>
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

export default MaleSingles;
