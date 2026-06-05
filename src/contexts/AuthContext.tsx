// import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// import type { Session, User } from '@supabase/supabase-js';
// // import { supabase } from '@/lib/supabase';

// interface Profile {
//   id: string;
//   full_name: string | null;
//   organization: string | null;
//   role: string | null;
//   plan: string | null;
// }

// interface AuthCtx {
//   user: User | null;
//   session: Session | null;
//   profile: Profile | null;
//   loading: boolean;
//   signUp: (email: string, password: string, fullName: string, organization: string) => Promise<{ error?: string }>;
//   signIn: (email: string, password: string) => Promise<{ error?: string }>;
//   signOut: () => Promise<void>;
// }

// const Ctx = createContext<AuthCtx | undefined>(undefined);

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const [session, setSession] = useState<Session | null>(null);
//   const [profile, setProfile] = useState<Profile | null>(null);
//   const [loading, setLoading] = useState(true);

//   const loadProfile = async (uid: string) => {
//     // const { data } = await supabase.from('eduspace_profiles').select('*').eq('id', uid).maybeSingle();
//     // setProfile(data as Profile | null);
//   };

//   useEffect(() => {
//     // supabase.auth.getSession().then(({ data }) => {
//       setSession(data.session);
//       setUser(data.session?.user ?? null);
//       if (data.session?.user) loadProfile(data.session.user.id);
//       setLoading(false);
//     });

//     const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
//       setSession(s);
//       setUser(s?.user ?? null);
//       if (s?.user) loadProfile(s.user.id);
//       else setProfile(null);
//     });
//     return () => sub.subscription.unsubscribe();
//   }, []);

//   const signUp = async (email: string, password: string, fullName: string, organization: string) => {
//     const { data, error } = await supabase.auth.signUp({ email, password });
//     if (error) return { error: error.message };
//     if (data.user) {
//       await supabase.from('eduspace_profiles').insert({ id: data.user.id, full_name: fullName, organization });
//       await loadProfile(data.user.id);
//       try {
//         await fetch('https://famous.ai/api/crm/6a1f0c67e3698e04fe29ba90/subscribe', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ email, name: fullName || undefined, source: 'portal-signup', tags: ['client-portal', 'eduspace'] }),
//         });
//       } catch (e) { /* ignore */ }
//     }
//     return {};
//   };

//   const signIn = async (email: string, password: string) => {
//     const { error } = await supabase.auth.signInWithPassword({ email, password });
//     if (error) return { error: error.message };
//     return {};
//   };

//   const signOut = async () => {
//     await supabase.auth.signOut();
//     setProfile(null);
//   };

//   return (
//     <Ctx.Provider value={{ user, session, profile, loading, signUp, signIn, signOut }}>
//       {children}
//     </Ctx.Provider>
//   );
// }

// export function useAuth() {
//   const c = useContext(Ctx);
//   if (!c) throw new Error('useAuth must be used within AuthProvider');
//   return c;
// }
