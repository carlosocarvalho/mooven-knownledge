import { PublicComponent } from './layouts/public/public.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent, ShowItemComponent, ListComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: SearchComponent },
      { path: 'repository/:id', component: ShowItemComponent },
      { path: 'repositories/user/:user', component: ListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
