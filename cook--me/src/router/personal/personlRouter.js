
import setting from "../../components/personal/setting"

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

]
