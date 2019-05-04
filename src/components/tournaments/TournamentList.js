import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';

class TournamentList extends Component {
  render(){
    return(
      <Table basic='very'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Time</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {
          this.props.tournaments && this.props.tournaments.map(tournament => {
            return (
              <Table.Row key={tournament.id}>
                <Table.Cell>{tournament.title}</Table.Cell>
                <Table.Cell>{tournament.date}</Table.Cell>
                <Table.Cell>{tournament.time}</Table.Cell>
                <Table.Cell>
                  <Button as={Link} to={`/tournament/${tournament.id}`} basic color='black'>
                    Details
                  </Button>
                </Table.Cell>
              </Table.Row>
            )
          })
        }
        </Table.Body>
      </Table>
    )
  }
}

export default TournamentList;
