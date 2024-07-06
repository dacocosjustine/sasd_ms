import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterStudent from '@/components/Student/RegisterStudent.vue'
import ActivitiesView from '../views/ActivitiesView.vue'
import AddEvent from '../components/Student/Activities/AddEvent.vue'

const routes = [
  {
    path: '/student',
    name: 'student-login',
    component: LoginView
  },
  {
    path: '/student/register',
    name: 'student-register',
    component: RegisterStudent
  },
  {
    path: '/',
    name: 'Student Activities',
    component: ActivitiesView,
    // meta: {requiresAuth: true}
  },
  {
    path: '/add-event',
    name: 'Add Event',
    component: AddEvent
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
