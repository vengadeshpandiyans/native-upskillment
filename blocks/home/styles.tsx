import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    welcomeText: {
        color: '#000000',
        fontSize: 32,
        fontWeight: '600',

    },
    textStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    },
    ctaStyles: {
        borderWidth: 1,
        borderColor: '#feac00',
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#feac00',
        flex: 1,


    },
    welcomeImage: {
        width: '100%',
        // height: '100%',
        // flex: 1
    },
    titleText:{
        fontSize:32,
        fontWeight:'700',
        color: '#000000',
        textAlign:'center',
        marginBottom:12
    },
    subTitleText:{
        fontSize:16,
        fontWeight:'700',
        color: '#D3D3D3',
        textAlign:'center',
    },
    button:{
        position:'absolute',
        bottom:20,
        backgroundColor:'#ED714D',
        padding:16,
        borderRadius:50,
        width:'100%'
    },
    buttonBox:{
        marginHorizontal:20,
        flex:1
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
        fontWeight:'500',
        textAlign:'center'
    },

    image_Box: {
        position: 'relative',
        flex:3.5
      },
    
      image_1_box: {
        position: 'absolute',
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 75,
        top: 45,
        left: -30,
      },
    
      image_1: {
        width: 90,
        height: 90,
        resizeMode: 'center',
      },
    
      image_2_box: {
        position: 'absolute',
        backgroundColor: '#fff',
        padding: 40,
        borderRadius: 150,
        top: 100,
        left: '23%',
      },
    
      image_2: {
        width: 130,
        height: 130,
      },
    
      image_3_box: {
        position: 'absolute',
        backgroundColor: '#fff',
        padding: 37,
        borderRadius: 109,
        top: 200,
        left: -100,
      },
    
      image_3: {
        width: 110,
        height: 130,
      },
    
      image_4_box: {
        position: 'absolute',
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 75,
        top: 320,
        left: 105,
      },
    
      image_4: {
        width: 90,
        height: 90,
      },
    
      image_5_box: {
        position: 'absolute',
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 190,
        top: 250,
        right: -110,
      },
    
      image_5: {
        width: 175,
        height: 175,
      },
    
      image_6_box: {
        position: 'absolute',
        backgroundColor: '#fff',
        padding: 40,
        borderRadius: 130,
        top: 50,
        right: -115,
      },
    
      image_6: {
        width: 113,
        height: 95,
      },
      linearGradient: {
        flex: 1,
      },



});