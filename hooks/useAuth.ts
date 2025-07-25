import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase/client';

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => authListener.subscription.unsubscribe();
  }, []);

  // Google OAuth
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) console.error('Google auth error:', error);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return { user, signInWithGoogle, signOut };
};