import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// TypeScript type (like Mongoose interface in MERN)
type Post = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <TouchableOpacity style={{
      marginBottom: 16,
      padding: 16,
      backgroundColor: 'white',
      borderRadius: 8,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{post.title}</Text>
      <Text style={{ color: '#6b7280' }}>{post.description}</Text>
      <View style={{ flexDirection: 'row', marginTop: 8 }}>
        {post.tags.map((tag) => (
          <Text key={tag} style={{ marginRight: 8, color: '#3b82f6' }}>
            #{tag}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  );
}