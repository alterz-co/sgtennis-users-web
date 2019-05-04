// ********************************* //
// ************ PROFILE ************ //
// ********************************* //

export const editProfile = (userId, profile) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection('users').doc(userId).update(profile);
  }
}

// ****************************************** //
// ************ USER TOURNAMENTS ************ //
// ****************************************** //

export const addTournament = (tournament) => {
  return (dispatch, getState, { getFirestore }) => {
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    const firestore = getFirestore();

    firestore.collection('userTournaments').add({
      ...tournament,
      userId: userId,
      user: profile.name,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_USER_TOURNAMENT_SUCCESS', payload: 'Your tournament has been successfully added.' });
    }).catch((err) => {
      dispatch({ type: 'ADD_USER_TOURNAMENT_ERROR', payload: err.message });
    });
  }
}

export const editTournament = (tournamentId, tournament) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection('userTournaments').doc(tournamentId).update(tournament);
  }
}
