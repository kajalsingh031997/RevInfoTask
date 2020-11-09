import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserTableComponent } from './user-table/user-table.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserCustomArrayComponent } from './user-custom-array/user-custom-array.component';
import { UppercaseDirective } from './user-custom-array/uppercase.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserTableComponent,
    MainPageComponent,
    UserCustomArrayComponent,
    UppercaseDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
