import { Component, OnInit } from '@angular/core';
import { UserFacade } from "@state/user/user.facade";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  userState$ = this.userFacade.state$;

  constructor(
    private userFacade: UserFacade,
  ) {
  }

  ngOnInit(): void {
  }

}
