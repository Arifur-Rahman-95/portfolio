import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import Web_Devlopment from '../views/services/Web_Devlopment.vue'


const routes = [
  { path: "/", component: Home },
  { path: "/About", component: About },
  { path: "/Blog", component: Blog },
  { path: "/Contact", component: Contact },
  { path: "/services/web-development", component: Web_Devlopment }
  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;