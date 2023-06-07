import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity, Text, View, Image, Button, ScrollView} from 'react-native';
import styles from './styles';
import React from 'react';
import user from "./assets/user.png"
import TwitterLogo from "./assets/TwitterLogo.png"
import home from "./assets/home.png"
import search from "./assets/search.png"
import microphone from "./assets/microphone.png"
import bell from "./assets/bell.png"
import mail from "./assets/email.png"
import thumb1 from "./assets/thumb1.jpg"
import thumb2 from "./assets/thumb2.jpg"
import thumb3 from "./assets/thumb3.jpg"
import thumb4 from "./assets/thumb4.jpg"
import thumb5 from "./assets/thumb5.jpg"
import thumb6 from "./assets/thumb6.jpg"
import thumb7 from "./assets/thumb7.jpg"
import Tweet from "./tweet.js"
import profile1 from "./assets/profile1.jpg"
import profile2 from "./assets/profile2.jpg"
import profile3 from "./assets/profile3.jpg"
import profile4 from "./assets/profile4.jpg"
import profile5 from "./assets/profile5.png"
import plus from "./assets/plus.png"

export default function App() {
  return (
    <View style={styles.background}>
      <View style={styles.TopContainer}>
        <View style={styles.upper}>
          <View style={styles.leftContainer}> 
            <Image source={user} style={styles.icon}/>
          </View>
          <View style={styles.middleContainer}> 
            <Image source={TwitterLogo} style={styles.logo}/>
          </View>
        </View>
        <View style={styles.lower}>
          <View style={styles.secondRow}>
            <View style={styles.textUnderline}>
              <Text style={styles.textContainer}>For you</Text>
            </View>
              <Text style={styles.titleTextOff}>Following</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.blueCircleContainer}>
        <View style={styles.blueCircle}>
          <Image source={plus} style={styles.iconPlus}></Image>
        </View>
      </TouchableOpacity>


      <ScrollView vertical={true} showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
      

      {/* <Image source={thumb2} style={styles.thumbSize}></Image>
      <Image source={thumb3} style={styles.thumbSize}></Image>
      <Image source={thumb4} style={styles.thumbSize}></Image>
      <Image source={thumb5} style={styles.thumbSize}></Image>
      <Image source={thumb7} style={styles.thumbSize}></Image> */}
      <Tweet profile={profile2} name={"Elon Musk"} at={"@elonmusk • 5d"} body={"Bruh do you even AI."} stat1={"14.3K"} stat2={"13.7K"} stat3={"136K"} stat4={"24.8M"}></Tweet>
      <Tweet profile={profile1} name={"SpaceX"} at={"@SpaceX • 2d"} body={"Deployment of drogue parachutes."} stat1={"12.7K"} stat2={"19.2K"} stat3={"100K"} stat4={"20.1M"}></Tweet>
      <Tweet profile={profile3} name={"Star Link"} at={"@Starlink • 5/25/23"} body={"Starlink is now available for use while in-motion."} stat1={"207"} stat2={"4,103"} stat3={"17.9K"} stat4={"2.7M"}></Tweet>
      <Tweet profile={profile2} name={"Elon Musk"} at={"@elonmusk • 5/18/23"} body={"I have spaceships"} stat1={"10K"} stat2={"12.7K"} stat3={"70.4K"} stat4={"18.6M"}></Tweet>
      <Tweet profile={profile1} name={"Customizable"} at={"@Customizable • 2d"} body={"These tweets are fully customizable!"} stat1={"3,829"} stat2={"8,392"} stat3={"73.5K"} stat4={"39.5M"}></Tweet>
      <Tweet profile={profile5} name={"World of Statistics"} at={"@stats_feed • 1d"} body={"US national debt: $31.8 trillion"} stat1={"9,102"} stat2={"12.8K"} stat3={"102K"} stat4={"52.4M"}></Tweet>
      {/* <Image source={thumb1} style={styles.thumbSize}></Image> */}
      <Tweet profile={profile4} name={"Tesla"} at={"@Tesla • 2d"} body={"Model Y AWD is the most efficient electric SUV"} stat1={"3,002"} stat2={"19.3K"} stat3={"70.4K"} stat4={"17.8M"}></Tweet>
      <Tweet profile={profile2} name={"Elon Musk"} at={"@elonmusk • 5/25/23"} body={"Congratulations Neuralink team!"} stat1={"12.5K"} stat2={"49.2K"} stat3={"106.4K"} stat4={"34.8M"}></Tweet>
      <Tweet profile={profile1} name={"SpaceX"} at={"@SpaceX • 2d"} body={"Liftoff!"} stat1={"3,829"} stat2={"8,392"} stat3={"73.5K"} stat4={"39.5M"}></Tweet>
      <Tweet profile={profile3} name={"Star Link"} at={"@Starlink • 5/25/23"} body={"Starlink is helping to connect schools in Rwanda"} stat1={"7,203"} stat2={"13.3K"} stat3={"239.3K"} stat4={"40.2M"}></Tweet>
      <Tweet profile={profile2} name={"Elon Musk"} at={"@elonmusk • 5/4/23"} body={"May the 4th be with you❤️"} stat1={"343"} stat2={"5,392"} stat3={"40.7K"} stat4={"17.4M"}></Tweet>
      <Tweet profile={profile4} name={"Tesla"} at={"@Tesla • 2d"} body={"The Model Y the bestselling car in Q1 this year!"} stat1={"30.5K"} stat2={"102.5K"} stat3={"707.9K"} stat4={"79.2M"}></Tweet>
      <Tweet profile={profile5} name={"World of Statistics"} at={"@stats_feed • 1d"} body={"Current world population: 8,036,266,366"} stat1={"962"} stat2={"2,301"} stat3={"20.1K"} stat4={"24.5M"}></Tweet>
      <Tweet profile={profile3} name={"Star Link"} at={"@Starlink • 5/25/23"} body={"Starlink helping to connect schools in Rwanda"} stat1={"1,023"} stat2={"4,204"} stat3={"23.4K"} stat4={"10M"}></Tweet>
      {/* <Image source={thumb6} style={styles.thumbSize}></Image> */}




      </ScrollView>

     

      <View style={styles.tabBox}>
        <TouchableOpacity style={styles.tabButton}>
          <Image source={home} style={styles.iconBottom} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabButton}>
          <Image source={search} style={styles.iconSearch} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabButtonUpload}>
          <Image source={microphone} style={styles.iconMic} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabButton}>
          <Image source={bell} style={styles.iconBell} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabButton}>
          <Image source={mail} style={styles.iconBottom} />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
      {/* <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Royyan Wijaya - Flaticon</a> */}
      {/* <a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Debi Alpa Nugraha - Flaticon</a> */}
      {/* <a href="https://www.flaticon.com/free-icons/more" title="more icons">More icons created by Freepik - Flaticon</a> */}
      {/* <a href="https://www.flaticon.com/free-icons/retweet" title="retweet icons">Retweet icons created by sonnycandra - Flaticon</a> */}
      {/* <a href="https://www.flaticon.com/free-icons/heart" title="heart icons">Heart icons created by Freepik - Flaticon</a> */}
      {/* <a href="https://www.flaticon.com/free-icons/speech-bubble" title="speech bubble icons">Speech bubble icons created by Nur syifa fauziah - Flaticon</a> */}
      {/* <a href="https://www.flaticon.com/free-icons/output" title="output icons">Output icons created by WR Graphic Garage - Flaticon</a> */}
      {/* <a href="https://www.flaticon.com/free-icons/heart" title="heart icons">Heart icons created by Kiranshastry - Flaticon</a> */}
      {/* <a href="https://www.flaticon.com/free-icons/plus" title="plus icons">Plus icons created by Freepik - Flaticon</a> */}
    </View>
  );
}
