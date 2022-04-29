import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AngularComponent} from './angular/angular.component';
import {CSharpComponent} from './c-sharp/c-sharp.component';
import {CssComponent} from './css/css.component';
import {DotNetCoreComponent} from './dot-net-core/dot-net-core.component';
import {ElasticsearchComponent} from './elasticsearch/elasticsearch.component';
import {HtmlComponent} from './html/html.component';
import {JavascriptComponent} from './javascript/javascript.component';
import {KibanaComponent} from './kibana/kibana.component';
import {NpmComponent} from './npm/npm.component';
import {NugetComponent} from './nuget/nuget.component';
import {PostgresqlComponent} from './postgresql/postgresql.component';
import {SassComponent} from './sass/sass.component';
import {UiUxComponent} from './ui-ux/ui-ux.component';
import {XunitComponent} from './xunit/xunit.component';

@NgModule({
    declarations: [
        AngularComponent,
        CSharpComponent,
        CssComponent,
        DotNetCoreComponent,
        ElasticsearchComponent,
        HtmlComponent,
        JavascriptComponent,
        KibanaComponent,
        NpmComponent,
        NugetComponent,
        PostgresqlComponent,
        SassComponent,
        UiUxComponent,
        XunitComponent,
    ],
    imports: [CommonModule],
    exports: [
        AngularComponent,
        CSharpComponent,
        CssComponent,
        DotNetCoreComponent,
        ElasticsearchComponent,
        HtmlComponent,
        JavascriptComponent,
        KibanaComponent,
        NpmComponent,
        NugetComponent,
        PostgresqlComponent,
        SassComponent,
        UiUxComponent,
        XunitComponent,
    ],
})
export class TechnologiesModule {}
