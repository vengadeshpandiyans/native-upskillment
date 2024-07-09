import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FFF5F0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  ratingIcon: {
    width: 16,
    height: 16,
  },
  image: {
    width: 450,
    height: 450,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#0a111a',
  },
  rating: {
    color: 'gray',
    marginVertical: 8,
  },
  size: {
    fontSize: 16,
    fontWeight: '400',
    color: 'gray',
    marginVertical: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: '400',
    color: 'gray',
    marginTop: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: 'gray',
    marginTop: 20,
  },
  diameter: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
  counterBox: {
    marginVertical: 25,
  },

  footer: {
    padding: 16,
  },
  cartCTA: {
    backgroundColor: '#ED714D',
    borderRadius: 35,
    padding: 20,
    alignItems: 'center',
  },
  cartCTAText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
  divideSection: {
    flexDirection: 'row',
    position: 'relative',
    marginTop: 20,
  },
  imageBox: {
    position: 'absolute',
    right: -80,
    top: -25,
    width: '100%',
  },
  sizeContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  sizeButton: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  selectedSizeButton: {
    backgroundColor: '#ED714D',
    paddingVertical: 8,
    paddingHorizontal: 25,
  },
  colorText: {
    fontSize: 18,
    color: '#FFF',
  },
  sizeText: {
    fontSize: 18,
    color: '#02111a',
  },
  description: {
    fontSize: 18,
    marginTop: 25,
    color: 'grey',
    lineHeight: 22,
  },
  titleText:{
    fontSize: 20,
    color: '#02111a',
    fontWeight: '500',
},
linearGradient: {
  flex: 1,
},


});