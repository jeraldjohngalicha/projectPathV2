import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'router-utils'
})
export class RouterUtils implements OnInit {

  ngOnInit() {
  }


  private serverRestDomain: string = 'http://localhost:4000';

  getServerRestDomain(): string {
      return this.serverRestDomain;
  }


}
