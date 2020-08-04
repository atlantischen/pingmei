import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
// 	return originalPush.call(this, location).catch((err) => err)
// }
const routes = [
	{
		path: '/',
		redirect: '/index',
	},
	{
		path: '/index',
		name: 'Index',
		component: () => import('@/views/Index'),
	},
	{
		path: '/home',
		name: 'Home',
		component: () => import('@/views/Home'),
		redirect: '/sorting/culture',
		children: [
			{
				path: '/sorting',
				name: 'Sorting',
				component: () => import('@/views/Sorting'),
				children: [
					{
						path: '/sorting/culture',
						name: 'Culture',
						component: () => import('@/components/Sorting/Culture'),
					},
					{
						path: '/sorting/dbturn',
						name: 'DBTurn',
						component: () => import('@/components/Sorting/DBTurn'),
					},
					{
						path: '/sorting/power',
						name: 'Power',

						component: () => import('@/components/Sorting/Power'),
					},
					{
						path: '/sorting/turn',
						name: 'Turn',

						component: () => import('@/components/Sorting/Turn'),
					},
					{
						path: '/sorting/volume',
						name: 'Volume',
						component: () => import('@/components/Sorting/Volume'),
					},
				],
			},
			{
				path: '/slitting',
				name: 'Slitting',
				component: () => import('@/components/Slitting/index'),
			},
			{
				path: '/stir',
				name: 'Stir',
				component: () => import('@/components/Stir/index'),
			},
			{
				path: '/coating',
				name: 'Coating',
				component: () => import('@/components/Coating/index'),
			},
			{
				path: '/package',
				name: 'Package',
				component: () => import('@/components/Package/index'),
				redirect: '/package/cultures',

				children: [
					{
						path: '/package/cultures',
						name: 'Cultures',
						component: () => import('@/components/Package/Cultures'),
					},
					{
						path: '/package/potting',
						name: 'Potting',
						component: () => import('@/components/Package/Potting'),
					},
					{
						path: '/package/welding',
						name: 'Welding',
						component: () => import('@/components/Package/Welding'),
					},
				],
			},
			{
				path: '/test',
				name: 'Test',
				component: () => import('@/components/Test/index'),
				children: [
					{
						path: '/test/culture',
						name: 'Culture',
						component: () => import('@/components/Test/Culture'),
					},
					{
						path: '/test/dbturn',
						name: 'DBTurn',
						component: () => import('@/components/Test/DBTurn'),
					},
					{
						path: '/test/power',
						name: 'Power',

						component: () => import('@/components/Test/Power'),
					},
					{
						path: '/test/turn',
						name: 'Turn',

						component: () => import('@/components/Test/Turn'),
					},
					{
						path: '/test/volume',
						name: 'Volume',
						component: () => import('@/components/Test/Volume'),
					},
				],
			},
			{
				path: '/cutt',
				name: 'cutt',
				component: () => import('@/components/Cutt/index'),
				// children:[
				// 	{

				// 	}
				// ]
			},
		],
	},
]

const router = new VueRouter({
	routes,
})

// 解决vue-router在3.0版本以上重复点击菜单报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch((err) => err)
}

export default router
