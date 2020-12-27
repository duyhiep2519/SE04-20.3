import firebase from "../firebase";
export const addTicket = (ticket) => {
  const dbRef = firebase.database().ref().child("tickets");
  dbRef.push(ticket);
};
export default { addTicket };
