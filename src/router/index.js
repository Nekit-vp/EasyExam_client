import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Lesson from '../views/Lesson.vue'
import Topic from "../views/Topic";
import Task from "../views/Task";
import Solution from "../views/Solution";
import User from "../views/User";
import LessonEdit from "../views/viewsEdit/LessonEdit";
import TopicEdit from "../views/viewsEdit/TopicEdit";
import TaskEdit from "../views/viewsEdit/TaskEdit";
import SolutionEdit from "../views/viewsEdit/SolutionEdit";
import UserEdit from "../views/viewsEdit/UserEdit";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import CardLesson from "../components/tests/CardLesson";
import CardTopic from "../components/tests/CardTopic";
import TaskCard from "../components/tests/TaskCard";

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },

  { path: '/lesson', name: 'lesson', component: Lesson },
  { path: '/lesson/:id', name: 'lessonEdit', component: LessonEdit},

  { path: '/topic', name: 'Topic', component: Topic },
  { path: '/topic/:id', name: 'TopicEdit', component: TopicEdit },

  { path: '/task', name: 'Task', component: Task },
  { path: '/task/:id', name: 'TaskEdit', component: TaskEdit },

  { path: '/solution', name: 'Solution', component: Solution },
  { path: '/solution/:id', name: 'SolutionEdit', component: SolutionEdit },

  { path: '/user', name: 'User', component: User},
  { path: '/user/:id', name: 'UserEdit', component: UserEdit},

  { path: '/auth/signin', name: 'SignIn', component: SignIn},
  { path: '/auth/signup', name: 'SignUp', component: SignUp},

  {path: '/main', name:'MainMenu', component: CardLesson},
  {path: '/topicCard', name: 'TopicCard', component: CardTopic},
  {path: '/taskCard', name: 'TaskCard', component: TaskCard}


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
