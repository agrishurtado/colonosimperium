import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    // canActivate:[AuthGuard]
  },
  {
    path: 'acces',
    loadChildren: () => import('./acces/acces.module').then( m => m.AccesPageModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then( m => m.PostsPageModule)
  },
  {
    path: 'balance',
    loadChildren: () => import('./balance/balance.module').then( m => m.BalancePageModule)
  },
  {
    path: 'directory',
    loadChildren: () => import('./directory/directory.module').then( m => m.DirectoryPageModule)
  },
  {
    path: 'market',
    loadChildren: () => import('./market/market.module').then( m => m.MarketPageModule)
  },
  {
    path: 'reservations',
    loadChildren: () => import('./reservations/reservations.module').then( m => m.ReservationsPageModule)
  },
  {
    path: 'polls',
    loadChildren: () => import('./polls/polls.module').then( m => m.PollsPageModule)
  },
  {
    path: 'releases',
    loadChildren: () => import('./releases/releases.module').then( m => m.ReleasesPageModule)
  },
  {
    path: 'configurations',
    loadChildren: () => import('./configurations/configurations.module').then( m => m.ConfigurationsPageModule)
  },
  {
    path: 'emergencies',
    loadChildren: () => import('./emergencies/emergencies.module').then( m => m.EmergenciesPageModule)
  },
  {
    path: 'acces-create',
    loadChildren: () => import('./acces-create/acces-create.module').then( m => m.AccesCreatePageModule)
  },
  {
    path: 'acces-program',
    loadChildren: () => import('./acces-program/acces-program.module').then( m => m.AccesProgramPageModule)
  },
  {
    path: 'acces-performed',
    loadChildren: () => import('./acces-performed/acces-performed.module').then( m => m.AccesPerformedPageModule)
  },
  {
    path: 'directory-colonos',
    loadChildren: () => import('./directory-colonos/directory-colonos.module').then( m => m.DirectoryColonosPageModule)
  },
  {
    path: 'directory-provider',
    loadChildren: () => import('./directory-provider/directory-provider.module').then( m => m.DirectoryProviderPageModule)
  },
  {
    path: 'directory-board-directors',
    loadChildren: () => import('./directory-board-directors/directory-board-directors.module').then( m => m.DirectoryBoardDirectorsPageModule)
  },
  {
    path: 'reservation-create',
    loadChildren: () => import('./reservation-create/reservation-create.module').then( m => m.ReservationCreatePageModule)
  },
  {
    path: 'reservation-performed',
    loadChildren: () => import('./reservation-performed/reservation-performed.module').then( m => m.ReservationPerformedPageModule)
  },
  {
    path: 'releases-create',
    loadChildren: () => import('./releases-create/releases-create.module').then( m => m.ReleasesCreatePageModule)
  },
  {
    path: 'releases-performed',
    loadChildren: () => import('./releases-performed/releases-performed.module').then( m => m.ReleasesPerformedPageModule)
  },
  {
    path: 'market-create',
    loadChildren: () => import('./market-create/market-create.module').then( m => m.MarketCreatePageModule)
  },
  {
    path: 'market-performed',
    loadChildren: () => import('./market-performed/market-performed.module').then( m => m.MarketPerformedPageModule)
  },
  {
    path: 'polls-create',
    loadChildren: () => import('./polls-create/polls-create.module').then( m => m.PollsCreatePageModule)
  },
  {
    path: 'polls-performed',
    loadChildren: () => import('./polls-performed/polls-performed.module').then( m => m.PollsPerformedPageModule)
  },
  {
    path: 'configurations-create',
    loadChildren: () => import('./configurations-create/configurations-create.module').then( m => m.ConfigurationsCreatePageModule)
  },
  {
    path: 'configurations-permissions',
    loadChildren: () => import('./configurations-permissions/configurations-permissions.module').then( m => m.ConfigurationsPermissionsPageModule)
  },
  {
    path: 'configurations-logos',
    loadChildren: () => import('./configurations-logos/configurations-logos.module').then( m => m.ConfigurationsLogosPageModule)
  },
  {
    path: 'configurations-password',
    loadChildren: () => import('./configurations-password/configurations-password.module').then( m => m.ConfigurationsPasswordPageModule)
  },
  {
    path: 'posts-private',
    loadChildren: () => import('./posts-private/posts-private.module').then( m => m.PostsPrivatePageModule)
  },
  {
    path: 'posts-public',
    loadChildren: () => import('./posts-public/posts-public.module').then( m => m.PostsPublicPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'balance-cuentas',
    loadChildren: () => import('./balance-cuentas/balance-cuentas.module').then( m => m.BalanceCuentasPageModule)
  },
  {
    path: 'balance-authorize',
    loadChildren: () => import('./balance-authorize/balance-authorize.module').then( m => m.BalanceAuthorizePageModule)
  },
  {
    path: 'balance-authorizem',
    loadChildren: () => import('./balance-authorizem/balance-authorizem.module').then( m => m.BalanceAuthorizemPageModule)
  },
  {
    path: 'balance-authorize-menu',
    loadChildren: () => import('./balance-authorize-menu/balance-authorize-menu.module').then( m => m.BalanceAuthorizeMenuPageModule)
  },
  {
    path: 'emergencies-robo',
    loadChildren: () => import('./emergencies-robo/emergencies-robo.module').then( m => m.EmergenciesRoboPageModule)
  },
  {
    path: 'emergencies-siniestros',
    loadChildren: () => import('./emergencies-siniestros/emergencies-siniestros.module').then( m => m.EmergenciesSiniestrosPageModule)
  },
  {
    path: 'emergencies-salud',
    loadChildren: () => import('./emergencies-salud/emergencies-salud.module').then( m => m.EmergenciesSaludPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
