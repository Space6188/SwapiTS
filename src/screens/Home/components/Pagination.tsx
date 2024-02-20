import {View, Text, StyleSheet} from 'react-native';
import BackSVG from '../../../assets/left-arrow-back-svgrepo-com.svg';
import NextSVG from '../../../assets/right-arrow-next-svgrepo-com (2).svg';

const ELEMENTS_PER_PAGE = 10;

type IPagination = {
  total: number | null;
  page: number;
  pageSetter: (page: number) => void;
};

const Pagination = ({total, page, pageSetter}: IPagination) => {
  const next = () => {
    pageSetter(1);
  };
  function previos() {
    pageSetter(-1);
  }
  return (
    <View style={styles.holder}>
      {ELEMENTS_PER_PAGE * (page - 1) + 1 > 1 && (
        <BackSVG width={30} height={30} onPress={previos} />
      )}
      <Text style={styles.range}>
        {ELEMENTS_PER_PAGE * (page - 1) + 1} - {ELEMENTS_PER_PAGE * page} of{' '}
        {total} items
      </Text>
      {ELEMENTS_PER_PAGE * page < (total ?? 0) && (
        <NextSVG onPress={next} width={30} height={30} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  holder: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 20,
  },
  range: {
    color: '#000',
    marginHorizontal: 10,
  },
});

export default Pagination;
