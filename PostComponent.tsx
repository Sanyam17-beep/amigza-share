import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Define the types for the props
interface PostComponentProps {
  profileImage: string;
  profileName: string;
  profileUniversity: string;
  postContent: string;
  postImage: string;
  likes: string;
  comments: string;
  profileDescription: string;
}

const PostComponent: React.FC<PostComponentProps> = ({
  profileImage,
  profileName,
  profileUniversity,
  postContent,
  postImage,
  likes,
  comments,
  profileDescription,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image 
          source={{ uri: profileImage }} 
          style={styles.profileImage} 
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{profileName}</Text>
          <Text style={styles.profileUniversity}>{profileUniversity}</Text>
        </View>
      </View>

      <Text style={styles.postContent}>
        {postContent}
      </Text>

      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: postImage }} 
          style={styles.postImage} 
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.likes}>{likes}</Text>
        <Text style={styles.comments}>{comments}</Text>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
      </View>

      {/* Comment Section with Profile Icon */}
      <View style={styles.commentSection}>
        <Image 
          source={{ uri: profileImage }} 
          style={styles.commentProfileImage} 
        />
        <View style={styles.commentContent}>
          <Text style={styles.commentText}>{profileDescription}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 16,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  profileInfo: {
    flexDirection: 'column',
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  profileUniversity: {
    color: '#666',
    fontSize: 14,
  },
  postContent: {
    marginBottom: 8,
    fontSize: 14,
    color: '#333',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  likes: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  comments: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  shareButton: {
    backgroundColor: '#007BFF',
    padding: 8,
    borderRadius: 5,
  },
  shareText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  commentSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  commentProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  commentContent: {
    flex: 1,
  },
  commentText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});

export default PostComponent;
