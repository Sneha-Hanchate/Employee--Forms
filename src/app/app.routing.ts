import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './registration/registration.component';
import {  AngularformComponent  } from "./angularform/angularform.component";

import { ParentComponent } from './parent/parent.component';
import { ButtonsComponent } from './buttons/buttons.component';


import { DemoComponent } from './demo/demo.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormsComponent } from './forms/forms.component';
import { ForDemoComponent } from './for-demo/for-demo.component';
import { ShowtableComponent } from './showtable/showtable.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TodosComponent } from './todos/todos.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { TaskComponent } from './task/task.component';



const arr: Routes=[

  {path: 'angularform',component:AngularformComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'button', component: ButtonsComponent},

  {path: 'home', component: HomeComponent},
  {path: 'registration',component: RegistrationComponent},
  {path: 'login', component: LoginComponent},

  {path: 'demo', component: DemoComponent},
  {path: 'reactiveform', component: ReactiveformComponent},
  {path: 'form', component:FormsComponent},
  {path: 'fordemo', component: ForDemoComponent},
  {path: 'showtable', component: ShowtableComponent},
  {path: 'hello', component: HelloWorldComponent},
  {path: 'todo', component: TodosComponent},
  {path: 'product',component: ProductComponent},
  {path:'employee',component: EmployeeComponent},
  {path: '', component: TaskComponent},
  {path:'pagenotfound', component: PagenotfoundComponent},

 // {path: "**", redirectTo: '/pagenotfound'}
];

export const arrRouting= RouterModule.forRoot(arr);

