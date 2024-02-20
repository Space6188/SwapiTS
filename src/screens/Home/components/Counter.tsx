import {StyleSheet, Text, View} from 'react-native';
import {Colors, WIDTH_SCREEN} from '../../../utils/constants';
import {useTypedSelector} from '../../../utils/hooks/hooks';

enum BlockDimensions {
  denominator = 20,
  width = WIDTH_SCREEN / 3 - denominator,
}

type ICounterBlock = {
  gender: string;
  children: number;
};

const CounterBlock = ({children: counter, gender}: ICounterBlock) => {
  return (
    <View style={styles.box}>
      <Text style={styles.counter}>{counter}</Text>
      <Text style={styles.title}>{gender}</Text>
    </View>
  );
};

const Counters = () => {
  const selector = useTypedSelector(store => store.selection);
  return (
    <View style={styles.holder}>
      <CounterBlock gender="Male">{selector['male']}</CounterBlock>
      <CounterBlock gender="Other">{selector['n/a']}</CounterBlock>
      <CounterBlock gender="Female">{selector['female']}</CounterBlock>
    </View>
  );
};

const styles = StyleSheet.create({
  holder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  box: {
    paddingVertical: 10,
    width: BlockDimensions.width,
    borderRadius: 10,
    backgroundColor: Colors.white,
    elevation: 5,
    paddingHorizontal: 10,
  },
  counter: {fontSize: 18, color: Colors.black},
  title: {color: Colors.black},
});

export default Counters;
