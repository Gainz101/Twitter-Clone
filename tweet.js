import { StyleSheet,TouchableOpacity, Text, View, Image, Button, ScrollView, UIManager,Modal } from 'react-native';
import styles from './styles';
import React, { useState } from 'react';
// import profile1 from "./assets/profile1.jpg"
// import profile2 from "./assets/profile2.jpg"
import threeDots from "./assets/2Dots.png"
import message from "./assets/message.png"
import retweet from "./assets/retweet.png"
import heart from "./assets/heart.png"
import views from "./assets/views.png"
import share from "./assets/share.png"
import pencil from "./assets/pencil.v4.png"
import heartRed from "./assets/heartRed.png"




export default function Tweet(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    const [heartPressed, setHeartPressed] = useState(false);

    const openPopup = () => {
    setModalVisible(true);
    };

    const closePopup = () => {
    setModalVisible(false);
    };

    const openPopup2 = () => {
        setModalVisible2(true);
        };
    
        const closePopup2 = () => {
        setModalVisible2(false);
        };

    const toggleHeart = () => {
    setHeartPressed(!heartPressed);
    };

    return(
    <View>
        <View style={styles.tweetContainer}>
            <Image source={threeDots} style={styles.icon3Dot}></Image>

            <View style={styles.tweetContainerLeft}>
                <Image source ={props.profile} style={styles.profile}></Image>
            </View>
            <View style={styles.tweetContainerRight}>
                <View style={styles.bottomArea}>
                    <View style={styles.topRowTweet}>
                        <Text style={styles.title}>
                            {props.name}
                        </Text>
                        <Text style={styles.at}>
                            {props.at}                             
                        </Text>
                    </View>
                    <Text style={styles.mainBody}>
                        {props.body}
                    </Text> 
                </View>
            </View>
        </View>     
        <View style={styles.BottomTweetIconRow}>
            <TouchableOpacity style={styles.button} >
                <Image source={message} style={styles.tweetIcons} />  
                <Text style={styles.tweetTextLow}>{props.stat1}</Text> 
            </TouchableOpacity>  
            <TouchableOpacity style={styles.button} onPress={openPopup}>
                <Image source={retweet} style={styles.tweetIcons} /> 
                <Text style={styles.tweetTextLow}>{props.stat2}</Text>  
            </TouchableOpacity>  
            <TouchableOpacity style={styles.button} onPress={toggleHeart}>
                <Image source={heartPressed ? heartRed : heart} style={styles.tweetIcons} />  
                <Text style={styles.tweetTextLow}>{props.stat3}</Text>  
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={openPopup2}>
                <Image source={views} style={styles.tweetIconsViews} /> 
                <Text style={styles.tweetTextLow}>{props.stat4}</Text>   
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Image source={share} style={styles.tweetIcons} />   
            </TouchableOpacity>     
        </View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closePopup}
      >
        <View style={styles.popupRetweet}>
            <View style={styles.overlay} />
            <View style={styles.popupRetweetBox}>
                <View style={styles.columnContainer}>
                    <Text style={styles.columnTitle}><Image source={retweet} style={styles.popupIcon} />    Retweet</Text>
                    <Text style={styles.columnTitle}><Image source={pencil} style={styles.popupIconPencil} />   Quote Tweet</Text>
                </View>
                <TouchableOpacity style={styles.cancelButton} onPress={closePopup}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>          
            </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={closePopup2}
      >
        <View style={styles.popupRetweet}>
            <View style={styles.overlay} />
            <View style={styles.popupViewsBox}>
                <View style={styles.viewContainer}>
                    <Text style={styles.columnTitleView}>Views</Text>
                    <Text style={styles.columnBodyView}>Times this Tweet was seen on Twitter. To learn more, visit the <Text style={styles.boldUnderline}>Help Center</Text>.</Text>
                </View>
                <TouchableOpacity style={styles.dismissButton} onPress={closePopup2}>
                    <Text style={styles.dismissButtonText}>Dismiss</Text>
                </TouchableOpacity>          
            </View>
        </View>
      </Modal>
    </View>
    );
}
