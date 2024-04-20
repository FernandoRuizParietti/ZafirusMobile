import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UrlManagementService {
  constructor(private router: Router, private ngZone: NgZone) {}

  /*This function takes a url and a params object as arguments and navigates to the url that matches the string*/
  navigateToUrlWithParameters(url: string, params: any) {
    this.ngZone.run(() => {
      this.router.navigateByUrl(url, params);
    });
  }
}
