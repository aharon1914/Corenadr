import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './component/login/login.component';
import { InicioComponent } from './inicio/inicio.component';



const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'inicio', component: InicioComponent },
    { path: '**', pathMatch:'full', redirectTo:'inicio'},

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const rutas = RouterModule.forRoot(routes,{useHash:true});