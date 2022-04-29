import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ComponentsModule} from '../components/components.module';
import {PipesModule} from '../pipes/pipes.module';

import {HeroComponent} from './hero/hero.component';
import {FaqComponent} from './faq/faq.component';

@NgModule({
    declarations: [HeroComponent, FaqComponent],
    imports: [CommonModule, RouterModule, ComponentsModule, PipesModule],
    exports: [HeroComponent, FaqComponent],
})
export class PagesModule {}
