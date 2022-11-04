
const menu = [
  {
    name: "HomePage",
    to: "/",
    private: false 
  },
  {
    name: "Blog",
    to: "/blog",
    private: false 
  },
  {
    name: "Profile",
    to: "/profile",
    private: true
  },
  {
    name: "Login",
    to: "/login",
    private: false,
    privateOnly: true 
  },{
    name: "Logout",
    to: "/logout",
    private: true 
  }
  
]

export { menu };