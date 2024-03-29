import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const SummaryComponent = ({ transactionsData }) => {

  if (!transactionsData || !Array.isArray(transactionsData)) {
    return <Text>No transactions data available.</Text>;
  }

  const highestTransaction = Math.max(...transactionsData.map((t) => parseFloat(t.amount.replace('$', ''))));
  const lowestTransaction = Math.min(...transactionsData.map((t) => parseFloat(t.amount.replace('$', ''))));

  const highSpending = transactionsData.find(t => parseFloat(t.amount.replace('$', '')) === highestTransaction);
  const lowSpending = transactionsData.find(t => parseFloat(t.amount.replace('$', '')) === lowestTransaction);

  const summaryData = [
    { title: 'Transactions', value: transactionsData.length },
    { title: 'Balance', value: `$${transactionsData.reduce((acc, curr) => acc + parseFloat(curr.amount.replace('$', '')), 0).toFixed(2)}` },
    { title: 'High Spending', transaction: highSpending.name, amount: highestTransaction },
    { title: 'Low Spending', transaction: lowSpending.name, amount: lowestTransaction },
  ];

  const renderItem = ({ item }) => {
    if (item.title === 'High Spending' || item.title === 'Low Spending') {
      return (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{item.title}</Text>
          <View style={styles.transactionContainer}>
            <Text style={styles.transactionName}>{item.transaction}</Text>
            <Text style={styles.transactionAmount}>${item.amount}</Text>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.value}>{item.value}</Text>
      </View>
    );
  };

  const renderSeparator = () => (
    <View style={styles.separator} />
  );

  return (
    <FlatList
      data={summaryData}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      keyExtractor={(item) => item.title}
      style={{ padding: 16 }}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#D6EAF8', // Light blue background
    borderRadius: 8,
    marginBottom: 12,
  },
  sectionContainer: {
    paddingVertical: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#27AE60', // Green color
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    color: '#34495E', // Dark blue color
  },
  value: {
    fontSize: 18,
    color: '#E67E22', // Orange color
  },
  transactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionName: {
    fontSize: 18,
    color: '#8E44AD', // Purple color
  },
  transactionAmount: {
    fontSize: 18,
    color: '#C0392B', // Red color
  },
  separator: {
    height: 2,
    backgroundColor: '#BDC3C7', // Light grey color
    marginVertical: 8,
  },
});

export default SummaryComponent;
