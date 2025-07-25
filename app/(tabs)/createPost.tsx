import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { supabase } from '../../lib/supabase/client';
import { useAuth } from '../../hooks/useAuth';
import React from 'react';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const { user } = useAuth();

  const handleSubmit = async () => {
    if (!user) return;

    const { error } = await supabase.from('posts').insert({
      title,
      description,
      tags: tags.split(',').map(tag => tag.trim()),
      author_id: user.id,
    });

    if (error) {
      alert('Error creating post: ' + error.message);
    } else {
      alert('Post created successfully!');
      setTitle('');
      setDescription('');
      setTags('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        multiline
      />
      <TextInput
        placeholder="Tags (comma-separated, e.g., react,native,expo)"
        value={tags}
        onChangeText={setTags}
        style={styles.input}
      />
      <Button 
        title="Publish" 
        onPress={handleSubmit} 
        disabled={!title.trim() || !description.trim()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db', 
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
    backgroundColor: 'white',
  },
});