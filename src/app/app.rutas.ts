import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './component/login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { LaboMicroComponent } from './labo-micro/labo-micro.component';
import { AdminComponent } from './admin/admin.component';
import { NuevousuarioComponent } from './nuevousuario/nuevousuario.component';
import { ModificarComponent } from './modificar/modificar.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { SalidaComponent } from './salida/salida.component';
import { TablasComponent } from './tablas/tablas.component';




const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'labo-micro', component: LaboMicroComponent },
    { path: 'nuevousuario', component: NuevousuarioComponent },
    { path: 'modificar', component:ModificarComponent },
    { path: 'cuestionario', component:CuestionarioComponent},
    { path: 'salida', component:SalidaComponent},
    { path: 'tablas', component:TablasComponent},
    
    { path: '**', pathMatch:'full', redirectTo:'inicio'},
    

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const rutas = RouterModule.forRoot(routes,{useHash:true});