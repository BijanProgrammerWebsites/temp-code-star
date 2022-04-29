import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AparatComponent} from './aparat/aparat.component';
import {InstagramComponent} from './instagram/instagram.component';
import {TelegramComponent} from './telegram/telegram.component';

@NgModule({
    declarations: [AparatComponent, InstagramComponent, TelegramComponent],
    imports: [CommonModule],
    exports: [AparatComponent, InstagramComponent, TelegramComponent],
})
export class IconsModule {}
