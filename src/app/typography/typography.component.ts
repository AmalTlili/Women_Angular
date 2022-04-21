import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';


export class Training {
  constructor(
      public id: number,
      public description: string,
      public title: string,
      public availablity: string,
      public domain: string,
      public stars: number,
      public startDate: string,
      public endDate: string
  ) {
  }
}
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  Trainings: Training[];
  closeResult: string;
  constructor(private httpClient: HttpClient, private modalService: NgbModal
  ) {
  }
  getTrainings() {
    this.httpClient.get<any>('http://localhost:8081/women/Training/getTrainings').subscribe(
        response => {
          console.log(response);
          this.Trainings = response;
        }
    );
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  onSubmit(f: NgForm) {
    const url = 'http://localhost:8081/women/Training/add';
    f.value.startDate =
        new Date(
            f.value.startDate.year,
            f.value.startDate.month,
            f.value.startDate.day);
    f.value.endDate =
        new Date(
            f.value.endDate.year,
            f.value.endDate.month,
            f.value.endDate.day);
    console.log(f.value);

    this.httpClient.post(url, f.value)
        .subscribe((result) => {
          console.log(result);
          this.ngOnInit();
        });
    this.modalService.dismissAll();
  }
  ngOnInit() {
    this.getTrainings();
  }

}
