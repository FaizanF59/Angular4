import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipiesListComponent } from './recipies/recipies-list/recipies-list.component';
import { RecipiesDetailComponent } from './recipies/recipies-detail/recipies-detail.component';
import { RecipieItemComponent } from './recipies/recipies-list/recipie-item/recipie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipiesComponent,
    RecipiesListComponent,
    RecipiesDetailComponent,
    RecipieItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
