import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  User = {
  quote : Quote,
  name : "John",
  firstname : "Doe",
  Age : 257
  }
  
  imageSrc = "https://vignette.wikia.nocookie.net/seigneur-des-anneaux/images/8/8d/Gollum.jpg/revision/latest?cb=20121104195515&path-prefix=fr";
  

  constructor() { }

  myFunction() {
    let x = document.getElementById("age");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

  ngOnInit() {
  }

}
