import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { CComponent } from './c/c.component';
import { CsharpComponent } from './csharp/csharp.component';
import { JavascriptComponent } from './javascript/javascript.component';

export  const routes : Routes = [
 { path:'', redirectTo:'/c'},
 { path:'c', redirectTo:'CComponent'},
 { path:'csharp', redirectTo:'CsharpComponent'},
 { path:'javascript', redirectTo:'JavascriptComponent'}
];

@NgModule({
    imports: [],
    exports: [],
    providers: []
})

export class AppRoutingModule{    
}

