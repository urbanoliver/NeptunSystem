import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { OktatoComponent } from './pages/oktato/oktato.component';
import { HallgatoComponent } from './pages/hallgato/hallgato.component';
import { StatisztikaComponent } from './pages/statisztika/statisztika.component';
import { TantargyakComponent } from './pages/tantargyak/tantargyak.component';
import { NewuserComponent } from './pages/newuser/newuser.component';
import { KurzusokComponent } from './pages/kurzusok/kurzusok/kurzusok.component';
import { ErdemjegyekComponent } from './pages/erdemjegyek/erdemjegyek.component';
import { EditErdemjegyekComponent } from './pages/edit-erdemjegyek/edit-erdemjegyek.component';

export const routes: Routes = [

    {
        path: '',
        component: LoginComponent
    },

    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'oktato',
        component: OktatoComponent
    },

    {
        path: 'hallgato',
        component: HallgatoComponent
    },

    {
        path: 'tantargyak',
        component: TantargyakComponent
    },

    {
        path: 'kurzus',
        component: KurzusokComponent
    },

    {
        path: 'erdemjegyek',
        component: ErdemjegyekComponent
    },

    {
        path: 'edit-erdemjegyek/:id',
        component: EditErdemjegyekComponent

    },

    {
        path: 'newuser',
        component: NewuserComponent
    },



    {
        path: 'statisztika',
        component: StatisztikaComponent
    }

];
