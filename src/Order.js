import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import {NavigationActions} from 'react-navigation';
import url from 'url';
import queryString from 'query-string';

const CONTACTS = [
  { name: 'Marissa Castillo', number: 7766398169 },
  { name: 'Denzel Curry', number: 9394378449 },
  { name: 'Miles Ferguson', number: 8966872888 },
];

class Order extends React.Component {
  constructor()
  {
    super();
  }

  componentDidMount()
  {

  }

  static navigationOptions = {
    title: '주문 목록',
  };

  static navigationOptions = {
    tabBarLabel: '주문'
  };

  _renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.avatar}>
        <Text style={styles.letter}>{item.name.slice(0, 1).toUpperCase()}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.number}>{item.number}</Text>
      </View>
    </View>
  );

  _ItemSeparator = () => <View style={styles.separator} />;

  render() {
    return (
      <FlatList
        data={CONTACTS}
        keyExtractor={(item, i) => String(i)}
        renderItem={this._renderItem}
        ItemSeparatorComponent={this._ItemSeparator}
        style={{marginTop:20}}
      />
    );
  }

}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: '#e91e63',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    color: 'white',
    fontWeight: 'bold',
  },
  details: {
    margin: 8,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
  },
  number: {
    fontSize: 12,
    color: '#999',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(0, 0, 0, .08)',
  },
});

export default Order;
