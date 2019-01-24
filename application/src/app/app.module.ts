import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { LinksComponent } from './links/links.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MusicComponent } from './music/music.component';
import { PhotosComponent } from './photos/photos.component';
import { HttpClientModule } from '@angular/common/http';
import { TracksComponent } from './tracks/tracks.component'; 

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    LinksComponent,
    HomeComponent,
    AboutComponent,
    MusicComponent,
    PhotosComponent,
    TracksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'links',
        component: LinksComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'photos',
        component: PhotosComponent
      },
      {
        path: 'music',
        component: MusicComponent
      },
      {
        path: 'tracks',
        component: TracksComponent
      },
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [MusicComponent, PhotosComponent, TracksComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
