import { createContext, useContext, useMemo, useState } from 'react';

type Auth = { isSignedIn: boolean; email: string | null; signIn: (e: string) => void; signOut: () => void; };
const Ctx = createContext<Auth | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const value = useMemo(() => ({
    isSignedIn, email,
    signIn: (e: string) => { setEmail(e); setIsSignedIn(true); },
    signOut: () => { setEmail(null); setIsSignedIn(false); },
  }), [isSignedIn, email]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export function useAuth() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
