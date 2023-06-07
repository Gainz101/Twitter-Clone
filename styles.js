import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
    background:{
        flex: 1,
        // backgroundColor:'#181818',
        backgroundColor:'#FFFFFF',
        justifyContent: 'flex-start', // Align items vertically at the start
        alignItems: 'flex-start', // Align items horizontally at the start
      },
      TopContainer: {
        opacity: 20,
        backgroundColor: 'rgba(245, 248, 250,0.8)',
        borderBottomWidth: .1,
        borderBottomColor: '#AAB8C2',
        width: 392,
        height: 141,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // paddingTop:20,

      },
      upper:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:60,
      },
      lower:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:10,
      },
    leftContainer: {
        paddingLeft: 16,
      },
      middleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 40,
      },
      textContainer: {
        // fontSize: 16,
        fontWeight: 'bold',
        // textDecorationColor:"#1DA1F2",
        // textDecorationStyle:"solid",
        // textDecorationLine:"underline",
        paddingBottom: 4, // Adjust the distance from your text view.
    },titleTextOff:{
        // fontSize: 16,
        fontWeight: 'bold',
        color:"#657786",
    },

    // line:{
    //     height: 0,                // height is '0' so that the view will not occupy space
    //     width: 100,              // as much as you want to 'Stretch' the underline
    //     borderTopColor: 'blue', 
    //     borderTopWidth: 2,       // 'Thickness' of the underline
    //     marginTop: 15,
    // },
    secondRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 392,
        height: 50,
        paddingHorizontal: 16,
        marginTop: 10,
        paddingBottom:22,
    },
    textUnderline:{
        borderBottomWidth: 3,
        borderColor:"#1DA1F2",
    },
    //   leftContainer: {
    //     paddingTop: 60, // Optional: Add padding to adjust the position of the image
    //     paddingLeft: 7, // Optional: Add padding to adjust the position of the image
    //     flexDirection: 'row',
    //     alignItems: 'flex-start',
    //     justifyContent: 'flex-start',
    //   },
    //   middleContainer:{
    //     // paddingTop: 60, // Optional: Add padding to adjust the position of the image
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   },
      tabBox: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 83,
        borderTopColor: '#E1E8ED',
        borderTopWidth: 0.7,
        backgroundColor: '#F5F8FA',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        paddingBottom: 35,
      },
      tabButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:15,
      },
      icon:{
        width: 32,
        height: 32,
        borderRadius:15,
      },
      logo: {
        width: 23,
        height: 23,
      },
      iconBottom: {
        width: 24,
        height: 24,
      },
      iconMic: {
        width: 48,
        height: 48,
        bottom:2,
        left:0,
        

    },
    iconSearch: {
        width: 20,
        height: 20,
        right:7,

    },
      iconBell: {
        width: 33,
        height: 33,
        top:6,
        left:10,
      },
      thumbSize:{
            width: 392,
            height:300,
            resizeMode: 'contain',
            // resizeMode:"cover",
      },
      tweetContainer:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 9,
        paddingTop:0,
        borderTopColor: '#E1E8ED',
        borderTopWidth: 0.7,
        borderBottomColor: '#E1E8ED',
        borderBottomWidth: 0.7,
        paddingBottom:35,
        width:392,
        marginTop: -17, // Add marginTop property to move the tweet container up
      },
      tweetContainerLeft:{
        // alignItems:"flex-start"
      },
      tweetContainerRight:{
        paddingRight:20,
      },
      profile:{
        top:20,
        right:5,
        height:57,
        width:57,
        borderRadius:15,
      },
      topRowTweet: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // direction
      },
      title: {
        fontWeight: 'bold',
      },
      at: {
        color: '#657786',
      },
      bottomArea:{
        flexDirection:"column"
      },
      icon3Dot: {
        width: 13,
        height: 13,
        position: 'absolute',
        right: 15,  
        // top:33,
        top: '55%', // Adjust the value as needed
        marginTop: -6.5, // Half of the height of the image
    },
      transparent:{
        color:"transparent"
      },
      tweetIcons:{
        width:14,
        height:14,
      },
      tweetIconsViews:{
        width:16,
        height:16,
      },
      BottomTweetIconRow:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        bottom:20,
        left:28,
        paddingHorizontal:12,
    },
      button:{
        flexDirection:"row"
      },
      tweetTextLow:{
        color:"#657786",
        fontWeight:400,
        fontSize:12,
        left:3,
      },
      popupRetweet:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10, // Increase the z-index value
      },
      popupRetweetBox: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 258,
        borderTopRightRadius:35,
        borderTopLeftRadius:35,
        backgroundColor: '#FFFFFF',
        flexDirection: "column",
        justifyContent:"flex-start",
        alignItems: 'flex-start',
        paddingTop: 35,
        zIndex: 10, // Ensure the overlay appears above other elements
      },
      popupViewsBox: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 234,
        borderTopRightRadius:35,
        borderTopLeftRadius:35,
        backgroundColor: '#FFFFFF',
        flexDirection: "column",
        justifyContent:"flex-start",
        alignItems: 'flex-start',
        paddingTop: 35,
        zIndex: 10, // Ensure the overlay appears above other elements
      },
      overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the opacity as desired
        zIndex: 10, // Ensure the overlay appears above other elements
      },
      columnContainer: {
        marginLeft: 20, // Adjust the value as desired
        marginBottom: 20, // Add margin between columns
        justifyContent:"flex-start",
      },
      columnTitle: {
        fontSize: 20,
        // fontWeight: 'bold',
        paddingBottom:32,
      },
      popupIcon:{
        width:20,
        height:20,
      },
      popupIconPencil:{
        width:23,
        height:23,
      },
      cancelButton: {
        backgroundColor: '#FFFFFF',
        borderWidth: 0.7,
        borderColor: '#E1E8ED',
        borderRadius: 50,
        paddingVertical: 17,
        paddingHorizontal: 150,
        alignSelf: 'center',
        marginTop: 7,
      },
      cancelButtonText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 17,
      },
      dismissButton: {
        backgroundColor: '#FFFFFF',
        borderWidth: 0.7,
        borderColor: '#E1E8ED',
        borderRadius: 50,
        paddingVertical: 17,
        paddingHorizontal: 150,
        alignSelf: 'center',
        marginTop: 7,
        bottom:24,
      },
      dismissButtonText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 17,
      },
      viewContainer:{
        alignItems:"flex-start",
        justifyContent:"flex-start",
        padding:20,
        bottom:30,
      },
      columnTitleView:{
        fontSize:26,
        fontWeight:"bold",
        paddingBottom:10,
      },
      columnBodyView:{
        fontSize:15,
        color:"#657786",
      },
      boldUnderline:{
        fontWeight:"bold",
        textDecorationLine:"underline",
        color:"black",
      },
      blueCircleContainer:{
        alignItems:"flex-end",
        justifyContent:"flex-end",
        top:700,
        right:13,
        zIndex: 9999, // Set a higher zIndex to ensure it overlaps other elements
        elevation: 5, // Add elevation for the shadow effect
        position:"absolute",
      },
      blueCircle:{
        width:57,
        height:57,
        borderRadius:1000,
        backgroundColor:"#1DA1F2",
        backfaceVisibility:"hidden",
        alignItems:"center",
        justifyContent:"center",
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 4,
      },
      iconPlus:{
        width:17,
        height:17,
      },
      scrollContainer:{
        // bottom:55,
      }







  });
  export default styles;

