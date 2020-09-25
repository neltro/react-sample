import { StyleSheet } from 'react-native';
const registerStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    errMessage:{
      color:"red",
      marginBottom:10
    },
    profileSaved:{
      color:"green"
    },
    inputView:{
      width:"80%",
      backgroundColor:"#465881",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20,
    },
    inputText:{
      height:50,
      color:"white"
    },
    button:{
      width:"80%",
      backgroundColor:"#b8123e",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    buttonText:{
      color:"white"
    },
    registerText: {
      color:"#003f5c"
    },
    gotoLogin: {
        color:"#008000"
    }
  });
export default registerStyle;