export const addUpdate = (tournamentId, update) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const user = getState().firebase.profile.name;
    const body = update.body;

    const newUpdate = {
      body,
      name: user,
      tournamentId,
      createdAt: new Date()
    }

    firestore.collection('updates').add(newUpdate);
  }
}
