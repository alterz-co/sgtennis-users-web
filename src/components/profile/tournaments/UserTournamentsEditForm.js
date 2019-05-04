import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Header, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { editTournament } from '../../../redux/actions/userActions';

import * as ROUTES from '../../../constants/routes';

class UserTournamentsEditForm extends Component {

  state = {
    tournament: this.props.tournament.tournament,
    year: this.props.tournament.year,
    category: this.props.tournament.category,
    result: this.props.tournament.result,
    error: ''
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = event => {
    event.preventDefault();
    let year;

    if(this.state.year !== this.props.tournament.year){
      year = Number(this.state.year);
    } else {
      year = this.props.tournament.year;
    }

    const updateTournament = {
      tournament: this.state.tournament,
      year,
      category: this.state.category,
      result: this.state.result
    }

    const tournamentId = this.props.tournamentId;
    this.props.editTournament(tournamentId, updateTournament);
  }

  render(){
    return(
      <Grid centered>
        <Grid.Column style={{ maxWidth: 800 }}>
          <Button
            as={Link} to={ROUTES.PROFILE}
            content='Back' icon='chevron circle left' labelPosition='left' basic color="black"
          />
          <Header as='h2' color='black' textAlign='center'>Edit Tournament</Header>
          {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
          <Form size='large' onSubmit={this.onSubmit}>
            <Form.Field>
              <label>Tournament <span style={{ color: 'red' }}>*</span></label>
              <input
                fluid='true'
                name='tournament'
                type='text'
                placeholder='STA Open I'
                value={this.state.tournament}
                onChange={this.onChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Year<span style={{ color: 'red' }}>*</span></label>
              <select className="ui fluid dropdown" name="year" value={this.state.year} onChange={this.onChange}>
                <option value="">Year</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
              </select>
            </Form.Field>
            <Form.Field>
              <label>Category<span style={{ color: 'red' }}>*</span></label>
              <select className="ui fluid dropdown" name="category" value={this.state.category} onChange={this.onChange}>
                <option value="">Category</option>
                <option value="Male Singles">Male Singles</option>
                <option value="Female Singles">Female Singles</option>
                <option value="Male Doubles">Male Doubles</option>
                <option value="Female Doubles">Female Doubles</option>
              </select>
            </Form.Field>
            <Form.Field>
              <label>Result<span style={{ color: 'red' }}>*</span></label>
              <select className="ui fluid dropdown" name="result" value={this.state.result} onChange={this.onChange}>
                <option value="">Result</option>
                <option value="Winner">Winner</option>
                <option value="Finalist">Finalist</option>
                <option value="Semi-Finalist">Semi-Finalist</option>
                <option value="Quarter-Finalist">Quarter-Finalist</option>
                <option value="R16">R16</option>
                <option value="R32">R32</option>
                <option value="R64">R64</option>
                <option value="R128">R128</option>
              </select>
            </Form.Field>
            <Button color='black' fluid size='large'>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editTournament: (tournamentId, tournament) => dispatch(editTournament(tournamentId, tournament))
  }
}

export default connect(null, mapDispatchToProps)(UserTournamentsEditForm);
