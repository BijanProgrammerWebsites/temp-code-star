import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ComponentsModule} from '../components/components.module';
import {PipesModule} from '../pipes/pipes.module';

import {HeroComponent} from './hero/hero.component';
import {FaqComponent} from './faq/faq.component';
import {NumbersComponent} from './numbers/numbers.component';
import {TimelineComponent} from './timeline/timeline.component';

@NgModule({
    declarations: [HeroComponent, FaqComponent, NumbersComponent, TimelineComponent],
    imports: [CommonModule, RouterModule, ComponentsModule, PipesModule],
    exports: [HeroComponent, FaqComponent, NumbersComponent, TimelineComponent],
})
export class PagesModule {}
