import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';

  ngOnInit(): void {
    of(2, 4, 6, 8).subscribe(console.log)

    from([20, 15, 10, 5]).subscribe(
      item => console.log(`resulting item ... ${item}`),
      error => console.log(`error occured ${error}`),
      () => console.log('complete'),
    )
  }
}
