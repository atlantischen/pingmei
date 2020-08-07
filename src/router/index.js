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
		redirect: '/sorting/enterprise',
		children: [
			{
				path: '/sorting',
				name: 'Sorting',
				component: () => import('@/components/Sorting/index'),
				redirect: '/sorting/enterprise',
				children: [
					{
						path: '/sorting/enterprise',
						name: 'Enterprise',
						component: () => import('@/components/Sorting/Enterprise'),
					},
					{
						path: '/sorting/choice',
						name: 'Choice',
						component: () => import('@/components/Sorting/Choice'),
					},
					{
						path: '/sorting/ocv1',
						name: 'OCV1',

						component: () => import('@/components/Sorting/OCV1'),
					},
					{
						path: '/sorting/ocv2',
						name: 'OCV2',
						component: () => import('@/components/Sorting/OCV2'),
					},
					{
						path: '/sorting/ocv3',
						name: 'OCV3',
						component: () => import('@/components/Sorting/OCV3'),
					},
					{
						path: '/sorting/bad',
						name: 'Bad',
						component: () => import('@/components/Sorting/Bad'),
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
				redirect: '/test/culture',

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
				redirect: '/cutt/cuttingstack',
				children: [
					{
						path: '/cutt/cuttingstack',
						name: 'CuttingStack',
						component: () => import('@/components/Cutt/CuttingStack'),
					},
					{
						path: '/cutt/statistics',
						name: 'Statistics',
						component: () => import('@/components/Cutt/Statistics'),
					},
				],
			},
			{
				path: '/workshop',
				name: 'Workshop',
				component: () => import('@/components/Workshop/index'),
			},
			{
				path: '/line',
				name: 'Line',
				component: () => import('@/components/Line/index'),
			},
			{
				path: '/injection',
				name: 'Injection',
				component: () => import('@/components/Injection/index'),
				redirect: '/injection/capacity',
				children: [
					{
						path: '/injection/capacity',
						name: 'Capacity',
						component: () => import('@/components/Injection/Capacity'),
					},
					{
						path: '/injection/inject01',
						name: 'Inject01',
						component: () => import('@/components/Injection/Inject01'),
					},
				],
			},
			{
				path: '/negativeSlitting',
				name: 'NegativeSlitting',
				component: () => import('@/components/NegativeSlitting/index'),
			},
			{
				path: '/negativeStir',
				name: 'NegativeStir',
				component: () => import('@/components/NegativeStir/index'),
			},
			{
				path: '/negativeCoating',
				name: 'NegativeCoating',
				component: () => import('@/components/NegativeCoating/index'),
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
