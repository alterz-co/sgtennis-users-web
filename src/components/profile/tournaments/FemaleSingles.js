import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Table, Button } from 'semantic-ui-react';

class FemaleSingles extends Component {
  render(){
    const { userId, femaleSingles } = this.props;

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
            femaleSingles && femaleSingles.map(femaleSingle => {
              return femaleSingle.userId === userId && (
                <Table.Row key={femaleSingle.id}>
                  <Table.Cell>{femaleSingle.year}</Table.Cell>
                  <Table.Cell>{femaleSingle.tournament}</Table.Cell>
                  <Table.Cell>{femaleSingle.result}</Table.Cell>
                  <Table.Cell>
                    <Button as={Link} to={`/tournament/edit/${femaleSingle.id}`} basic color='black' floated='right'>
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

export default FemaleSingles;
