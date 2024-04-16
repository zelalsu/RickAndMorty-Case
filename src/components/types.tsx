import {Character} from '../screen/types';

interface CharacterListItemProps {
  character: Character;
  onPress: (character: Character) => void;
  isSelected: boolean;
  searchQuery: string;
}
interface SelectedCharacterItemProps {
  character: Character;
  removeCharacter: (character: Character) => void;
}
export type {CharacterListItemProps, SelectedCharacterItemProps};
