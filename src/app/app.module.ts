import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {ComponentsModule} from './components/components.module';
import {PagesModule} from './pages/pages.module';
import {PipesModule} from './pipes/pipes.module';

import {FlipService} from './services/flip.service';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, ComponentsModule, PagesModule, PipesModule],
    providers: [FlipService],
    bootstrap: [AppComponent],
})
export class AppModule {}
