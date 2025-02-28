import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { UserComponent } from './user/user.component';
// import { FormDemoComponent } from './form-demo/form-demo.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { DemostuffComponent } from './demostuff/demostuff.component';
import { AdminformComponent } from './adminform/adminform.component';
import { DemoParentHooksComponent } from './demo-parent-hooks/demo-parent-hooks.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'},   
    {path:'home',  title: 'App Home Page', component:HomeComponentComponent},
    {path:'user',  title: 'User Page', component: UserComponent},
    {path:'adminform',  title: 'Form Page', component: AdminformComponent},
    {path:'formdemo',  title: 'Form Page', component: FormDemoComponent},
    {path:'pipesdemo',  title: 'Pipes Page', component: PipesDemoComponent},
    {path:'demostuff',  title: 'Demo Page', component: DemostuffComponent},
    {path:'hookParent',  title: 'Hook Parent Page', component: DemoParentHooksComponent},
    {path:'observableDemo',  title: 'Observable Demo', component: ObservableDemoComponent}
];
