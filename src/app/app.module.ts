import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';




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
import { AjoutAvisComponent } from './ajout-avis/ajout-avis.component';
import { NbDeVuesPipe } from './nb-de-vues.pipe';
import { PopularScoreVideosPipe } from './popular-score-videos.pipe';
import { VideoCategoriePipe } from './video-categorie.pipe';
import { HttpClientModule } from '@angular/common/http';
import { VideoService } from './video.service';



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
    FormulaireVideoComponent,
    AjoutAvisComponent,
    NbDeVuesPipe,
    PopularScoreVideosPipe,
    VideoCategoriePipe
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
    FormsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatCardModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule,
    
    
    
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
