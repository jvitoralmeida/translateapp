import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222222',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    marginTop: 130,
    width: 100,
    height: 100,
  },
  picker: {
    width: 340,
    height: 50,
    color: '#FFF',
  },
  input: {
    marginTop: 25,
    width: 348,
    height: 50,
    color: '#FFF',
    borderWidth: 2,
    borderBottomColor: '#FFF',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    textAlign: 'center',
    fontSize: 15,
  },
});

export default styles;
