import {View, Text, Linking, StyleSheet} from 'react-native';
import {Colors} from '../../../utils/constants';

type IField = {
  keyValue: string;
  value: string | Array<string>;
};

const Field = ({keyValue, value}: IField) => {
  const onLinkPressed = (params: string) =>
    Linking.openURL(!params ? params : (value as string));
  const openArray = (el: string) => {
    return (
      <Text onPress={() => onLinkPressed(el)} style={styles.link}>
        {el}
      </Text>
    );
  };
  return (
    <View style={styles.holder}>
      <Text style={styles.key}>
        {keyValue.charAt(0).toUpperCase() + keyValue.slice(1)}
      </Text>
      <View style={styles.valueBox}>
        {typeof value == 'string' ? (
          value.includes('http') ? (
            <Text onPress={onLinkPressed as any} style={styles.link}>
              {value}
            </Text>
          ) : (
            <Text style={styles.text}>{value}</Text>
          )
        ) : (
          <View>{value.map(openArray)}</View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  holder: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'space-around',
  },
  key: {
    color: Colors.black,
    fontWeight: '500',
    fontSize: 15,
    alignSelf: 'flex-start',
    flex: 0.5,
  },
  valueBox: {alignSelf: 'flex-start', flex: 1},
  link: {color: Colors.link},
  text: {color: '#000'},
});

export default Field;
