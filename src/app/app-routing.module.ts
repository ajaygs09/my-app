import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailComponent } from './email/email.component';
import { LoginComponent } from './login/login.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'one',component:OneComponent},
    {path:'',redirectTo:'one',pathMatch:'full'},
    {path:'two',component:TwoComponent},
    {path:'about',component:AboutComponent},
    {path:'email',component:EmailComponent}

  ]
},

  {path:'one',component:OneComponent},
  {path:'two',component:TwoComponent},
  {path:'about',component:AboutComponent},
  {path:'email',component:EmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
