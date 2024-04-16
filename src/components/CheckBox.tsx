import React from 'react';
import {TouchableOpacity, View, StyleSheet, Image} from 'react-native';

const Checkbox = ({
  checked,
  onPress,
}: {
  checked: boolean;
  onPress: () => void;
}) => (
  <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
    {checked ? (
      <Image
        style={styles.checkedImage}
        source={require('../assets/checked.png')}
      />
    ) : (
      <View style={[styles.checkbox]} />
    )}
  </TouchableOpacity>
);

export default Checkbox;

const styles = StyleSheet.create({
  checkboxContainer: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 10,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    width: 12,
    height: 12,
    backgroundColor: 'transparent',
  },

  checkedImage: {
    width: 35,
    height: 35,
  },
});
