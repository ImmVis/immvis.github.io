import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './components/HomePage'
import StaffPage from './components/StaffPage'
import ResearchPage from './components/ResearchPage'
import CoursesPage from './components/CoursesPage'
import ExjobbListPage from './components/ExjobbListPage'
import ExjobbPage from './components/ExjobbPage'


const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomePage
	},
	{
		path: '/staff',
		name: 'Staff',
		component: StaffPage
	},
	{
		path: '/research',
		name: 'Research',
		component: ResearchPage
	},
	{
		path: '/courses',
		name: 'Courses',
		component: CoursesPage
	},
	{
		path: '/exjobb-mit',
		name: 'ExjobbList',
		component: ExjobbListPage
	},
	{
		path: '/exjobb-mit/:jobbId([a-z0-9_]+)',
		name: 'Exjobb',
		component: ExjobbPage,
		props: true
	},
];

const router = createRouter({
	mode: 'history',
	history: createWebHistory(),
	routes,
});

export default router;
