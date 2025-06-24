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
    justifyContent: 'flex-start',
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
    borderRadius: 5,
    
  },
  selected: {
    marginTop: 42,
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
    backgroundColor: "#F8F2EF",
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
    borderRadius: 7,
    
  },
  daySelected: {
    backgroundColor: '#0A9EDE',
    borderRadius: 7
  },
  dayText: {
    color: '#000000'
  },
  dayTextSelected: {
    color: '#000000',
    fontWeight: 'bold'
  },
  disabled: {
    color: '#E8E8E8'
  },
  today:{
    color:'#0A9EDE',
  },
   buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#0A9EDE',
    marginVertical: 10,
    shadowColor: "#888",
    shadowOffset: { width: 1, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontFamily: 'Poppins',
    color: '#fff',
    fontSize: 16,
  }
});
