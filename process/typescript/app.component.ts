import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'partials/app.html'
})

export class AppComponent {

    name = "ZIN";

    artists = ['Barot Bellingham', 'Hillary Post'];
    
    onClick(myName)
    {
         this.name = myName;
    }
    addArtist(myArtist)
    {
        this.artists.push(myArtist);
    }
    
}
