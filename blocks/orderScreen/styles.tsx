import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    marginHorizontal: 20,
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal: 40,
    marginVertical: 30,
  },
  paragraph: {
    fontSize: 12,
    fontWeight: '400',
    color: '#090806',
  },
  profilePic: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  titleText: {
    color: '#090806',
    fontSize: 28,
    fontWeight: '600',
    // flex: 1
    marginBottom: 10,
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D9DBDD',
    // borderColor: 'red',
    borderRadius: 50,
    paddingHorizontal: 12,
    marginVertical: 16,
    justifyContent: 'space-between',
  },
  Searchicon: {
    width: 20,
    height: 20,
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  rightfilterIcon: {
    width: 20,
    height: 20,
  },
  inputFieldStyles: {
    // backgroundColor: '#fff',
    height: 60,
    borderColor: 'transparent',
    color: '#090806',
    fontWeight: '400',
  },
  tabChip: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 50,
    borderColor: 'lightgray',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
  },
  tabIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 16,
  },
  tabDetails: {
    // borderTopWidth: 1,
    // borderTopColor: '#e8e8e8',
    // paddingTop: 20,
    marginBottom: 20,
  },
  tabContainer: {
    gap: 10,
  },
  ratingContainer: {
    gap: 6,
  },
  tabTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 8,
  },
  popularText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  foodText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#090806',
  },
  seeAll: {
    fontSize: 14,
    color: '#BFBEBD',
    fontWeight: '500',
  },
  cardButton: {},
  starContainer: {
    flexDirection: 'row',
  },
  star: {
    width: 20,
    height: 20,
    marginHorizontal: 1,
  },
  icon: {
    width: 140,
    height: 140,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#090806',
    marginBottom: 12,
  },
  listContainer: {
    padding: 10,
    gap: 12,
  },
  foodCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  distance: {
    fontSize: 14,
    color: 'gray',
  },
  duration: {
    fontSize: 14,
    color: 'gray',
  },
  dot: {
    fontSize: 18,
    color: 'gray',
  },
  linearGradient: {
    flex: 1,
  },

  drawerRoot: {
    flex: 1,
    padding: 16,
    position: 'relative',
  },

  drawerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 23,
  },

  drawerIconsStyle: {
    width: 20,
    height: 20,
  },

  drawerText: {
    fontSize: 18,
    color: '#02111a',
    fontWeight: '400',
  },

  drawerIcon: {
    backgroundColor: '#ff6f37',
    borderRadius: 55,
    padding: 10,
    resizeMode: 'contain',
  },
  drawerCloseicon: {
    borderTopColor: 'red',
    borderTopWidth: 1,
  },
  closeIconBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  drawerProfileData: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomColor: '#DADADA',
    borderBottomWidth: 0.6,
  },
});
