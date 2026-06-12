export type StoredUser = {
  name: string;
  email: string;
  password: string;
  interests: string[];
  level: string;
};

const USER_STORAGE_KEY = "plio-user";

export function saveUser(user: StoredUser) {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
}

export function getStoredUser(): StoredUser | null {
  const raw = localStorage.getItem(USER_STORAGE_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as StoredUser;
  } catch {
    return null;
  }
}

export function verifyLogin(email: string, password: string): boolean {
  const user = getStoredUser();
  if (!user) return false;

  return (
    user.email.trim().toLowerCase() === email.trim().toLowerCase() &&
    user.password === password
  );
}

export function clearStoredUser() {
  localStorage.removeItem(USER_STORAGE_KEY);
}
