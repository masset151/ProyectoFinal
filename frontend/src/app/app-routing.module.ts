import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';
import { CrearPizzaComponent } from './pizzas/pages/crear-pizza/crear-pizza.component';
import { PizzasComponent } from './pizzas/pages/pizzas/pizzas.component';
import { PizzasModule } from './pizzas/pizzas.module';
import { AuthModule } from './auth/auth.module';
import { PizzasGuard } from './pizzas/guards/pizzas.guard';



const routes: Routes = [
  {
    path:'carta',
    loadChildren:() => import('./pizzas/pizzas.module').then(m=> PizzasModule)
    , canActivate:[PizzasGuard],
      canLoad:[PizzasGuard]
  },
  {
    path:'auth',
    loadChildren:() => import('./auth/auth.module').then(m=>AuthModule)
  },
  {
    path:'**',
    redirectTo:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
