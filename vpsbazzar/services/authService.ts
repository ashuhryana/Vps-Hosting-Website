
import { User } from '../types';

// Hum yahan localStorage ko as a Mock Database use kar rahe hain.
// Real production mein yahan fetch() calls honge aapke Node.js backend pe.

const USERS_KEY = 'vps_bazaar_users';
const SESSION_KEY = 'vps_bazaar_session';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const authService = {
  // 1. Get all registered users from "Database"
  getUsers: (): any[] => {
    const data = localStorage.getItem(USERS_KEY);
    return data ? JSON.parse(data) : [];
  },

  // 2. Register New User
  register: async (firstName: string, lastName: string, email: string, pass: string): Promise<User> => {
    await delay(800); // Network latency simulation
    
    const users = authService.getUsers();
    if (users.find(u => u.email === email)) {
      throw new Error("Endpoint already registered in our network.");
    }

    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      firstName,
      lastName,
      email,
      password: btoa(pass), // Simple encoding for simulation (Use bcrypt in real backend)
      accountStatus: 'Active',
      createdAt: new Date().toISOString()
    };

    localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]));
    
    // Auto login after signup
    const { password, ...userProfile } = newUser;
    localStorage.setItem(SESSION_KEY, JSON.stringify(userProfile));
    
    return userProfile as User;
  },

  // 3. Login User
  login: async (email: string, pass: string): Promise<User> => {
    await delay(600);
    
    const users = authService.getUsers();
    const user = users.find(u => u.email === email && u.password === btoa(pass));

    if (!user) {
      throw new Error("Invalid authentication credentials.");
    }

    const { password, ...userProfile } = user;
    localStorage.setItem(SESSION_KEY, JSON.stringify(userProfile));
    
    return userProfile as User;
  },

  // 4. Logout
  logout: () => {
    localStorage.removeItem(SESSION_KEY);
  },

  // 5. Check Session on load
  getCurrentUser: (): User | null => {
    const session = localStorage.getItem(SESSION_KEY);
    return session ? JSON.parse(session) : null;
  }
};
