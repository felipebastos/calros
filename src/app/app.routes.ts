import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ErroComponent } from './pages/erro/erro.component';
import { PessoalComponent } from './pages/home/pessoal/pessoal.component';
import { FinanceiroComponent } from './pages/home/financeiro/financeiro.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';

export const routes: Routes = [
  {
    path: 'profile',
    component: HomeComponent,
    children: [
      { path: 'pessoal/:id', component: PessoalComponent },
      { path: 'financeiro', component: FinanceiroComponent },
    ],
  },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'veiculos', component: VeiculosComponent },
  { path: '**', component: ErroComponent },
];
