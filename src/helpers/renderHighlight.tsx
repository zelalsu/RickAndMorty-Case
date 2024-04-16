// helpers.js

import { Text } from "react-native";

export const renderHighlight = (name, searchQuery) => {
    if (!searchQuery.trim()) {
      return <Text>{name}</Text>;
    }
  
    const regex = new RegExp(`(${searchQuery})`, 'gi');
    const parts = name.split(regex);
    return (
      <Text>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <Text key={index} style={{ fontWeight: 'bold', color: 'black' }}>
              {part}
            </Text>
          ) : (
            <Text key={index}>{part}</Text>
          )
        )}
      </Text>
    );
  };
  