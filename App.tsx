import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet  } from 'react-native';
import PostComponent from "./PostComponent";
export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <PostComponent
          profileImage="https://example.com/profile-image.jpg"
          profileName="Sam Walter"
          profileUniversity="TU Berlin"
          postContent="Post Content....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          postImage="https://example.com/example-image.jpg"
          likes="20K"
          comments="10"
          profileDescription="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
         <PostComponent
          profileImage="https://example.com/profile-image.jpg"
          profileName="Sam Walter"
          profileUniversity="TU Berlin"
          postContent="Post Content....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          postImage="https://example.com/example-image.jpg"
          likes="20K"
          comments="10"
          profileDescription="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
         <PostComponent
          profileImage="https://example.com/profile-image.jpg"
          profileName="Sam Walter"
          profileUniversity="TU Berlin"
          postContent="Post Content....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          postImage="https://example.com/example-image.jpg"
          likes="20K"
          comments="10"
          profileDescription="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
         <PostComponent
          profileImage="https://example.com/profile-image.jpg"
          profileName="Sam Walter"
          profileUniversity="TU Berlin"
          postContent="Post Content....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          postImage="https://example.com/example-image.jpg"
          likes="20K"
          comments="10"
          profileDescription="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        {/* Add more PostComponent instances if needed */}
      </ScrollView>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollView: {
    padding: 16,
  },
});
