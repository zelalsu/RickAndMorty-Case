import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 12,
    margin: 16,
    borderColor: 'gray',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 16,
    paddingHorizontal: 5,
    borderRadius: 12,
    marginTop: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  input: {
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
  },
  infoTxt: {
    fontSize: 15,
    marginTop: 20,
    color: 'gray',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  selectedCharactersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: Dimensions.get('screen').width - 150,
    marginRight: 2,
  },
});
export default styles;
