import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import React from 'react';

export default function GoogleButton() {
  const { signInWithGoogle } = useAuth();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={signInWithGoogle}
    >
      <Text style={styles.buttonText}>Sign in with Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ef4444', // Tailwind's red-500
    paddingHorizontal: 24, // px-6 (6 * 4 = 24)
    paddingVertical: 12, // py-3 (3 * 4 = 12)
    borderRadius: 8, // rounded-lg
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});