import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'partials/app.html',
    styles:[]
})

export class AppComponent {

    name = "ZIN";

    artists = ['Barot Bellingham', 'Hillary Post'];
    
    onClick(myName, myElement)
    {
         this.name = myName;
         myElement.style.backgroundColor="#FECE4E";
    }
    addArtist(myArtist)
    {
        this.artists.push(myArtist);
    }
    
}
