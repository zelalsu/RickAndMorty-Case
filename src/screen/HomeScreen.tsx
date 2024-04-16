import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  Text,
} from 'react-native';
import CharacterListItem from '../components/CharacterListItem';
import SelectedCharacterItem from '../components/SelectedCharacterItem';
import {Character} from './types';
import styles from './styles';

const HomeScreen = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchCharacters();
  }, []);

  //api çağırımı
  const fetchCharacters = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching characters:', error);
      setLoading(false);
    }
  };
  //seçili karakterleri listeleme
  const toggleCharacterSelection = (character: Character) => {
    setSelectedCharacters(prevCharacters => {
      if (prevCharacters.some(char => char.id === character.id)) {
        return prevCharacters.filter(char => char.id !== character.id);
      } else {
        return [...prevCharacters, character];
      }
    });
  };

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  //karakterleri kaldırma fonksiyonu
  const removeCharacter = (character: Character) => {
    setSelectedCharacters(prevCharacters =>
      prevCharacters.filter(char => char.id !== character.id),
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{flex: 1}}>
          <View style={styles.inputContainer}>
            <View style={styles.selectedCharactersContainer}>
              <FlatList
                horizontal={true}
                data={selectedCharacters}
                renderItem={({item}) => (
                  <SelectedCharacterItem
                    character={item}
                    removeCharacter={removeCharacter}
                  />
                )}
                keyExtractor={item => item.id.toString()}
              />
            </View>
            <TextInput
              style={styles.input}
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search..."
            />
            <TouchableOpacity
              style={{position: 'absolute', right: 6, alignSelf: 'center'}}
              onPress={() => setOpen(!open)}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../assets/bottomArrow.png')}
              />
            </TouchableOpacity>
          </View>

          {open ? (
            <View style={styles.container}>
              {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
              ) : (
                <FlatList
                  data={filteredCharacters}
                  renderItem={({item}) => (
                    <CharacterListItem
                      character={item}
                      onPress={toggleCharacterSelection}
                      isSelected={selectedCharacters.some(
                        char => char.id === item.id,
                      )}
                      searchQuery={searchQuery}
                    />
                  )}
                  keyExtractor={item => item.id.toString()}
                />
              )}
            </View>
          ) : (
            <Text style={styles.infoTxt}>
              Select a character from the dropdown
            </Text>
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default HomeScreen;
