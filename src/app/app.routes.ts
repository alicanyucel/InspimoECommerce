import { Routes } from '@angular/router';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartsComponent } from './components/shopping-carts/shopping-carts.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrdersComponent } from './components/orders/orders.component';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "",
        component: LayoutsComponent,
        children: [
            {
                path: "",
                component: HomeComponent
            },
            {
                path: "shopping-carts",
                component: ShoppingCartsComponent
            }
        ]
    },
    {
        path: "**",
        component: NotFoundComponent
    },
    {
        path:"orders",
        component:OrdersComponent
    }
];
