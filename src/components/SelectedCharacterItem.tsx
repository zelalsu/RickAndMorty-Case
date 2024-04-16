import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SelectedCharacterItemProps} from './types';

const SelectedCharacterItem = ({
  character,
  removeCharacter,
}: SelectedCharacterItemProps) => (
  <View style={styles.selectedCharacterItem}>
    <Text style={styles.selectedCharacterName}>{character.name}</Text>
    <TouchableOpacity
      style={styles.removeCharacterButton}
      onPress={() => removeCharacter(character)}>
      <Text style={styles.removeCharacter}>X</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  selectedCharacterItem: {
    backgroundColor: 'rgba(226,232,240,1)',
    flexDirection: 'row',
    marginRight: 7,
    gap: 10,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  selectedCharacterName: {
    color: 'black',
    borderRadius: 10,
  },
  removeCharacterButton: {
    backgroundColor: 'rgba(149,164,185,1)',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
  removeCharacter: {
    color: 'white',
  },
});

export default SelectedCharacterItem;
