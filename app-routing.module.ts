
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { PreheaderComponent } from './preheader/preheader.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Use an empty string for the default route
  { path: 'system', component: PreheaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
