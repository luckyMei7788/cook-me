import about from "../../components/cai/about-us/about"
import introduce from "../../components/cai/help-center/introduce"
import order from "../../components/cai/order/order"
import searchList from "../../components/cai/searchList"

export default [
	{
		path:'/about',
		name:'about',
		component:about
	},
	{
		path:'/introduce',
		name:'introduce',
		component:introduce
	},
	{
		path:'/order',
		name:'order',
		component:order
	},
	{
		path:'/searchList',
		name:'searchList',
		component:searchList
	}
]