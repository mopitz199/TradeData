import { StyleSheet, Platform } from 'react-native';
import * as theme from './theme';
import Dimensions from 'Dimensions';
const platform = Platform.OS;
export const styles = StyleSheet.flatten({
  container: {
    flex: 1,
    backgroundColor: "rgb(255, 255, 255)",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 20,
  },

  form: {
    flex: 1,
  },

  // Style of every input item of react native base
  inputItem:{
    marginTop: 10,
    marginLeft: 0,
  },

  input:{
    color: theme.primaryTextColor,
  },

  errorMessage:{
    color: theme.errorColor,
  },

  inputItemError:{
    borderColor: theme.errorColor,
  },

  enterContainer:{
    marginLeft: 10,
    marginRight: 10,
  },

  stopProfitContainer: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
  },
  stopContainer: {
    flex: 1,
    marginRight: 10,
  },

  profitContainer: {
    flex: 1,
  },

  timeContainer: {
    flex: 1,
  },

  datetimeContainer:{
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
  },
  datepickerItem:{
    marginTop:30,
    marginBottom:20,
    marginRight: 10,
    flex: 1,
    borderColor: '#cccaca',
    borderBottomWidth: 1,
  },

  selectContainer:{
    flexDirection: 'row',
  },

  tradeTypeSelect:{
    flex: 1,
    marginLeft:15,
    marginRight: -15,
    color: theme.primaryTextColor,
  },

  resultSelect:{
    flex: 1,
    marginLeft:30,
    color: theme.primaryTextColor,
  },

  // Styles of the camera
  cameraContainer:{
    flex: 1
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: theme.primaryNormalColor,
    color: theme.secondaryTextColor,
    borderRadius: 5,
    padding: 10,
    margin: 10
  },

  cameraLandscapeContainer:{
    position: 'absolute',
    top: 0,
    left: 0
  },

  saveButton:{
    height: 40,
    backgroundColor:theme.primaryNormalColor,
    alignItems:'center',
    justifyContent: 'center',
  },
  saveTextButton:{
    fontSize: 17,
    color: 'white',
  },
});
