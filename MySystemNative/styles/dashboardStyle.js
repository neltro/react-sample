import { StyleSheet } from 'react-native';
const dashboardStyle = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    invalidMessage:{
      color:"red"
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
    }
  });
export default dashboardStyle;