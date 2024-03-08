import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
  <Image source={require("./tseko.jpg")} style={styles.profile} />
  <View style={styles.headerTextContainer}>
    <Text>Marylin Jakes</Text>
    <Text style={styles.dim}>5 hrs</Text>
  </View>
    </View>


      <Text>This is that message that you need to start your day and be happy always</Text>
      <Image source={require("./wolf.jpg")} style={styles.post} />
      <Text style={styles.dim}>53 likes</Text>

      <View style={styles.footer}>
        <View style={styles.footerIconText}>
          <Ionicons name="thumbs-up" size={24} color="grey" />
          <Text> Like</Text>
        </View>
        <View style={styles.footerIconText}>
          <Ionicons name="chatbubble-outline" size={24} color="grey" />
          <Text> Comment</Text>
        </View>
        <View style={styles.footerIconText}>
          <Ionicons name="share" size={24} color="grey" />
          <Text> Share</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, 
  },
  dim: {
    color: "grey",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: '100%',
    marginTop: 10,
  },
  footerIconText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    padding: 10,
  },
  post: {
    width: 270,
    height: 260,
    marginTop: 10,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: "cover",
    marginRight:0,
  },
  headerTextContainer: {
    flexDirection: "column",
    justifyContent: 'left', 
  },
});
