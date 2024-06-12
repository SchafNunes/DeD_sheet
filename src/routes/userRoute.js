
import controller from '../controllers/userController'
import tokenValidate from '../utils/tokenValidate'

export default (app) => {
	
	app.post('/autenticacao',tokenValidate.validate, controller.getAll)
	app.post('/autenticacao/register', controller.create)
	app.post('/autenticacao/login', controller.login)
	app.get('/autenticacao/user', controller.getUserByToken)
}