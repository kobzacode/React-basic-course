export function Example4() {
  const isLoggedIn = false;
  return <h2>{if (isLoggedIn) 'Welcome back!' else 'Please log in'}</h2>
}
