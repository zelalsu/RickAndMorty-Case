import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {renderHighlight} from '../helpers/renderHighlight';
import {Character} from '../screen/types';
import {CharacterListItemProps} from './types';
import Checkbox from './CheckBox';

const CharacterListItem = ({
  character,
  onPress,
  isSelected,
  searchQuery,
}: CharacterListItemProps) => {
  return (
    <View style={styles.characterContainer}>
      <Checkbox checked={isSelected} onPress={() => onPress(character)} />
      <Image style={styles.characterImage} source={{uri: character.image}} />
      <View style={{padding: 10}}>
        {renderHighlight(character.name, searchQuery)}
        <Text>{character.episode?.length} Episodes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  characterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 0.5,
  },
  characterImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#007AFF',
  },
});

export default CharacterListItem;
