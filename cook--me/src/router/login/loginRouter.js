
import loginByCode from "../../components/login/loginByCode"
import resetCode from "../../components/login/resetCode"
import resetPassword from "../../components/login/resetPassword"
import userAgreement from "../../components/login/userAgreement"


export default [
  {
    path: '/loginByCode',
    name: 'loginByCode',
    component: loginByCode
  },
  {
    path: '/resetCode',
    name: 'resetCode',
    component: resetCode
  },
  {
    path: '/resetPassword',
    name: 'resetPassword',
    component: resetPassword
  },
  {
    path: '/userAgreement',
    name: 'userAgreement',
    component: userAgreement
  }
]
