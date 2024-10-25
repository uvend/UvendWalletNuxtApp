export default defineNuxtRouteMiddleware((to, from) => {
    // Ensure this only runs on the client side
    if (process.client) {
      const token = localStorage.getItem('auth');
      console.log('token', token);
  
      if (token) {
        console.log(to)
        if (to.path === '/') { // Ensure 'Login' matches the route name for the login page
            return navigateTo('/dashboard'); // Redirect to home or another appropriate page
        }
    }
    }
  });