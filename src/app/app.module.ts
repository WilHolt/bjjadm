import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule , FormsModule} from'@angular/forms';
import { SharedModule} from './shared/shared.module';
// used to create fake backend
import { fakeBackendProvider } from './helpers/fake-backend';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './guards/auth.guard';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { AuthenticationService} from './services/auth.service';
import { UserService } from './services/users.service';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfessorComponent } from './components/professor/professor.component';
import { StudentComponent } from './components/student/student.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventComponent } from './event/event.component';
import { FinancialComponent } from './components/financial/financial.component';
import { PerfilComponent } from './components/perfil/perfil.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard],
  children: [
    { path: 'dashboard', component: DashboardComponent, children:[
      {path:'', component:CalendarComponent},
      {path:'evento', component:EventComponent},
      {path:'perfil', component:PerfilComponent}
    ]},
    { path: '', component: DashboardComponent,
    children:[
      {path:'', component:CalendarComponent},
      {path:'evento', component:EventComponent},
      {path:'perfil', component:PerfilComponent}
    ]},
    { path: 'professor', component: ProfessorComponent},
    { path: 'aluno', component: StudentComponent},
    { path: 'cadastro-professor', component: CadastroComponent},
    { path: 'financeiro', component: FinancialComponent},
  ]
}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    CadastroComponent,
    DashboardComponent,
    ProfessorComponent,
    StudentComponent,
    CalendarComponent,
    EventComponent,
    FinancialComponent,
    PerfilComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule, CalendarModule.forRoot()

  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
