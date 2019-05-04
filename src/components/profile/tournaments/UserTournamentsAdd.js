import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Grid, Header, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addTournament } from '../../../redux/actions/userActions';

import * as ROUTES from '../../../constants/routes';

class UserTournamentsAdd extends Component {

  state = {
    tournament: '',
    year: '',
    category: '',
    result: '',
    error: ''
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  isFormValid = () => {
    if(this.isFormEmpty(this.state)){
      this.setState({ error: 'Fill in all fields with asterisk' });
      return false;
    } else {
      return true;
    }
  }

  isFormEmpty = ({ tournament, year, category, result }) => {
    return tournament === '' || year === '' || category === '' || result === '';
  }

  onSubmit = event => {
    event.preventDefault();
    if(this.isFormValid()){
      this.setState({ error: '' });
      const year = Number(this.state.year);
      const tournament = {
        tournament: this.state.tournament,
        year,
        category: this.state.category,
        result: this.state.result
      }
      this.props.addTournament(tournament);
      this.setState({
        tournament: '',
        year: '',
        category: '',
        result: ''
      });
    }
  }

  render(){

    const { auth } = this.props;

    if(!auth.uid){
      return <Redirect to={ROUTES.LOGIN}/>
    }

    return(
      <Grid centered>
        <Grid.Column style={{ maxWidth: 800 }}>
          <Button
            as={Link} to={ROUTES.PROFILE}
            content='Back' icon='chevron circle left' labelPosition='left' basic color="black"
          />
          <Header as='h2' color='black' textAlign='center'>Add Tournament</Header>
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
            <Button color='black' fluid size='large'>Add</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTournament: (tournament) => dispatch(addTournament(tournament))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTournamentsAdd);
