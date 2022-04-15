import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  isVisible: boolean = false;

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.spinnerService.showSpinner();
    this.spinnerService.getSpinnerState$().subscribe((state: boolean) => {
      this.isVisible = state;
    });
    // this.spinnerService.hideSpinner();
  }
}
