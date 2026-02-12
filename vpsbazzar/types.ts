
export interface VPSPlan {
  id: string;
  name: string;
  price: number;
  cpu: string;
  ram: string;
  storage: string;
  bandwidth: string;
  popular?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  accountStatus: 'Active' | 'Suspended';
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
