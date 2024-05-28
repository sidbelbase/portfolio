import { createRouter, createWebHistory } from 'vue-router'
import about from "@/components/portfolio/about";
import skills from "@/components/portfolio/skills";
import interests from "@/components/portfolio/interests";
import projects from "@/components/portfolio/projects";
import education from "@/components/portfolio/education";
import experiences from "@/components/portfolio/experiences";

const routes = [
  {
    path: '/',
    name: 'about',
    component: about
  },
  {
    path: '/skills',
    name: 'skills',
    component: skills
  },
  {
    path: '/interests',
    name: 'interests',
    component: interests
  },
  {
    path: '/projects',
    name: 'projects',
    component: projects
  },
  {
    path: '/education',
    name: 'education',
    component: education
  },
  {
    path: '/experiences',
    name: 'experiences',
    component: experiences
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    } else {
      return { top: 0 };
    }
  }
})

export default router
