import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'angular-course';

  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
    ) {}

  ngOnInit(): void {
    this.showSuccess();
    this.showSppiner();
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  showSppiner(){
     /** spinner starts on init */
     this.spinner.show();

     setTimeout(() => {
       /** spinner ends after 5 seconds */
       this.spinner.hide();
     }, 5000);
  }

}
