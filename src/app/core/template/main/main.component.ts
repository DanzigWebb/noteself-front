import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserFacade } from "@state/user/user.facade";
import { SubjectFacade } from "@state/subject/subject.facade";
import { NoteFacade } from "@state/note/note.facade";
import { Router } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {

  userState$ = this.userFacade.state$;
  subjectState$ = this.subjectFacade.state$;
  noteState$ = this.noteFacade.state$;

  constructor(
    private userFacade: UserFacade,
    private subjectFacade: SubjectFacade,
    private noteFacade: NoteFacade,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.subjectFacade.getAll();
    this.noteFacade.getAll();
  }

  editNote(id: number) {
    this.router.navigate([id])
  }
}
