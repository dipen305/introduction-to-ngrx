import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { peopleReducer } from './store/people.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { PeopleEffects } from './store/people.effects';
import { ApiModule } from './api/api.module';
import { PeopleModule } from './people/people.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PeopleModule,
    StoreModule.forRoot({
      people: peopleReducer
    },
      {}
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([PeopleEffects]),
    ApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
