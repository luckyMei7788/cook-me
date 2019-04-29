
import setting from "../../components/personal/setting";
import headPortrait from "../../components/personal/headPortrait";

export default [
  {
    path: '/setting',
    name: 'setting',
    component: setting,
		meta : {
			keepAlive : true,
			isAuthorization : true
		}
  },
	{
		path: '/headPortrait',
		name: 'headPortrait',
		component: headPortrait,
		meta : {
			keepAlive : true,
			isAuthorization : true
		}
	}
]
