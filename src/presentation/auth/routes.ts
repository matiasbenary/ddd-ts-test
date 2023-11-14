import { Router } from 'express';
import { AuthController } from './controller';
import { AuthService } from '../services/auth.service';




export class AuthRoutes {


  static get routes(): Router {

    const router = Router();
    const authService = new AuthService();

    const controller = new AuthController(authService);
    // Route::post('checkEmail', [LoginController::class, 'checkEmail']);
// Route::post('login', [LoginController::class, 'login'])->name('login');
// Route::post('logout', [LoginController::class, 'logout']);
// Route::post('refresh', [LoginController::class, 'refresh']);
// Route::post('me', [LoginController::class, 'me']);
    // Definir las rutas
    // router.use('/api/todos', /*TodoRoutes.routes */ );
    router.post('/login', controller.loginUser);
    router.post('/register', controller.registerUser );
    router.get('/validate-email/:token',controller.validateEmail );
    
    return router;
  }


}