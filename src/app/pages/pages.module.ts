import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ComponentsModule} from '../components/components.module';
import {PipesModule} from '../pipes/pipes.module';
import {LogosModule} from '../logos/logos.module';

import {HeroComponent} from './hero/hero.component';
import {FaqComponent} from './faq/faq.component';
import {NumbersComponent} from './numbers/numbers.component';
import {TimelineComponent} from './timeline/timeline.component';
import {RequirementsComponent} from './requirements/requirements.component';
import {ContentComponent} from './content/content.component';
import {TechnologiesModule} from '../technologies/technologies.module';

@NgModule({
    declarations: [
        HeroComponent,
        FaqComponent,
        NumbersComponent,
        TimelineComponent,
        RequirementsComponent,
        ContentComponent,
    ],
    imports: [CommonModule, RouterModule, ComponentsModule, PipesModule, LogosModule, TechnologiesModule],
    exports: [
        HeroComponent,
        FaqComponent,
        NumbersComponent,
        TimelineComponent,
        RequirementsComponent,
        ContentComponent,
    ],
})
export class PagesModule {}
