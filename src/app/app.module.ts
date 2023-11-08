import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeVideosComponent } from './liste-videos/liste-videos.component';
import { VideoComponent } from './video/video.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';
import { ListeVideosThumbnailComponent } from './liste-videos-thumbnail/liste-videos-thumbnail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnteteComponent } from './entete/entete.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { MenuComponent } from './menu/menu.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormulaireVideoComponent } from './formulaire-video/formulaire-video.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeVideosComponent,
    VideoComponent,
    VideoThumbnailComponent,
    ListeVideosThumbnailComponent,
    EnteteComponent,
    UtilisateurComponent,
    MenuComponent,
    CategoriesComponent,
    FormulaireVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
