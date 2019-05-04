import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import LoaderComponent from '../LoaderComponent';
import ProfileEditForm from './ProfileEditForm';

class ProfileEdit extends Component {
  render(){
    if(!this.props.user){
      return <LoaderComponent/>
    }

    return <ProfileEditForm userId={this.props.match.params.id} user={this.props.user}/>
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const users = state.firestore.data.users;
  const user = users ? users[id] : null;

  return {
    user: user
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([ { collection: 'users' } ])
)(ProfileEdit);
