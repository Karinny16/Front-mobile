import { StyleSheet } from 'react-native';
import { themas } from '../../global/themas';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themas.colors.roxo,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginBottom: 20,
    color: themas.colors.white,
    fontSize: 18,
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },
  boxContainer: {
    height: 590,
    width: 340,
    borderWidth: 1,
    backgroundColor: themas.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderRadius: 0,
    padding: 8
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20
  },
  logoImage: {
    width: 50,
    height: 50
  },
  containerCalen: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  calendar: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5
  },
  selected: {
    marginTop: 42,
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold'
  },
  selectedDateValue: {
    color: '#000000',
    fontWeight: 'bold'
  },
  day: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  daySelected: {
    backgroundColor: '#F06543',
    borderRadius: 7
  },
  dayText: {
    color: '##F06543'
  },
  dayTextSelected: {
    color: '#000000',
    fontWeight: 'bold'
  },
  disabled: {
    color: '#E8E8E8'
  },
  today:{
    color:'#F06543',
  }
});
