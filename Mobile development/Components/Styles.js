// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ECF0F1', // Light grey background
    borderRadius: 8,
    marginBottom: 12,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50', // Dark grey color
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E74C3C', // Red color
  },
  listItemSeparator: {
    height: 1,
    backgroundColor: '#F4F6F7',
  },
});
