import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { HeaderComponent } from './header/header.component';



const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '/contact', pathMatch: 'full'  },
  // { path: '', component: HeaderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }