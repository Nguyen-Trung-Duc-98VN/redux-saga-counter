import React from 'react';
import { useSelector } from 'react-redux';
import { increment, decrement, setNumber, reset } from './home.actions';

function HomeComponent() {

  const number = useSelector( state => state.home.number );

  return (
    <>
    </>
  );
}

export default HomeComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeForm: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeNumber: {
    marginBottom: 35,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3b5998',
  },
  textButtom: {
    marginBottom: 0,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  textInput: {
    width: '80%',
    height: 50,
    borderColor: '#3b5998',
    borderWidth: 1,
    borderRadius: 10,
    padding: '3%',
  },
  viewButtom: {
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonHome: {
    height: 50,
    width: 150,
    backgroundColor: '#3b5998',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
});
