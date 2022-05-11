import {ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {HttpClient, HttpEventType, HttpResponse} from '@angular/common/http';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatSelectChange} from '@angular/material/select';
import {UploadFileComponent} from '../components/upload-file/upload-file.component';
import {UploadFileService} from '../services/upload-files.service';
import {TrainingServiceService} from '../services/training-service.service';
import {Training} from '../models/Training.model';
import {QRCode} from '../models/QRCode.model';
import {CertificateServiceService} from '../services/certificate-service.service';
@Component({
  selector: 'app-typography',
  templateUrl: './Trainings.component.html',
  styleUrls: ['./Trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  Trainings: Training[] = [];
  lentgh : any;
  closeResult: string;
  editForm: FormGroup;
  displayedColumns: string[] = ['id', 'Tile', 'Description', 'Stars', 'Start date', 'End date', 'Availablity'];
  dataSource: MatTableDataSource<Training>;
  currentTutorial?: Training;
  currentIndex = -1;
  title = '';
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];
  selectedFiles?: FileList;
  currentFile?: File;
  message = '';
  errorMsg = '';
  config: any;
  uploadCertificateToThis: any;
  scannerEnabled = true;
  transports: Transport[] = [];
  information = 'No code information detected. Zoom in on a QR code to scan.';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private router: any;
  // tslint:disable-next-line:max-line-length
  searchText: any;
  // tslint:disable-next-line:max-line-length
  constructor( private CertificateService: CertificateServiceService, private cd: ChangeDetectorRef, private TrainingService: TrainingServiceService, private httpClient: HttpClient, private modalService: NgbModal, private fb: FormBuilder, private uploadService: UploadFileService
  ) {
    // this.lentgh = 0;
    // this.config = {
    //   itemsPerPage: 5,
    //   currentPage: 1,
    //   totalItems: 60
    // };
  }
  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    // tslint:disable-next-line:prefer-const
    let params: any = {};
    if (searchTitle) {
      params[`title`] = searchTitle;
    }
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }
    return params;
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
    this.TrainingService.create(f.value).subscribe((result) => {
            console.log(result);
            this.ngOnInit();
          })
    this.modalService.dismissAll();
  }
  openDetails(targetModal, training: Training) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    document.getElementById('domain1').setAttribute('value', training.domain);
    document.getElementById('title1').setAttribute('value', training.title);
    document.getElementById('description1').setAttribute('value', training.description);
    // document.getElementById('email2').setAttribute('value', String(training.stars));
    document.getElementById('startDate1').setAttribute('value', String( training.startDate));
    document.getElementById('endDate1').setAttribute('value',  String(training.endDate));
    document.getElementById('availablity1').setAttribute('value', training.availablity);

  }
  Delete(targetModal, training: Training) {
    // this.httpClient.delete('http://localhost:8081/women/Training/remove/' + training.id).subscribe((result) => {
    //   console.log(result); });
    this.TrainingService.delete(training.id)
        .subscribe(
            response => {
              console.log(response);
              // this.router.navigate(['/tutorials']);
            },
            error => {
              console.log(error);
            });
    const index: number = this.Trainings.indexOf(training);
    if (index !== -1) {
      this.Trainings.splice(index, 1);
    }
  }
  openEdit(targetModal, training: Training) {
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue( {
      domain: training.domain,
      title: training.title,
      description: training.description,
      startDate: training.startDate,
      endDate: training.endDate,
      availablity : training.availablity
    });
  }
  retrieveTrainings(): void {
    this.TrainingService.getTrainings()
        .subscribe(
            data => {
              this.Trainings = data;
              console.log(data);
            },
            error => {
              console.log(error);
            });
    this.lentgh = this.Trainings.length;
  }
  ngOnInit() {
    this.retrieveTrainings();
    this.editForm = this.fb.group({
      id: [''],
      firstname: [''],
      lastname: [''],
      department: [''],
      email: [''],
      country: ['']
    } );
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.lentgh
    };
  }

  onChangeTraining($event: MatSelectChange) {
    console.log($event);
  }
  onChangeFormer($event: MatSelectChange) {
    console.log($event);
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(id: number): void {
    this.errorMsg = '';

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.uploadService.upload(this.currentFile, id).subscribe(
            (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                console.log(Math.round(100 * event.loaded / event.total));

              } else if (event instanceof HttpResponse) {
                this.message = event.body.responseMessage;
              }
            },
            (err: any) => {
              console.log(err);

              if (err.error && err.error.responseMessage) {
                this.errorMsg = err.error.responseMessage;
              } else {
                this.errorMsg = 'Error occurred while uploading a file!';
              }

              this.currentFile = undefined;
            });
      }

      this.selectedFiles = undefined;
    }
  }

  pageChanged($event: number) {
    console.log($event)
      this.config.currentPage = $event;
  }

  onChangeTrainingForCertificate($event: MatSelectChange) {
    this.uploadCertificateToThis = $event.value;
  }

    Join(contentDetails: TemplateRef<any>, training: any) {
      this.TrainingService.assignUserToTrainer(1, training.id).subscribe((result) => {
        this.router.navigate(['/Trainings']);}
        );
    }


  public scanSuccessHandler($event: any) {
    this.scannerEnabled = false;
    this.information = 'Wait retrieving information...';

    const appointment = new QRCode($event);
    this.CertificateService.VerifyCertificate(appointment.identifier).subscribe(
        data => {
          console.log(data);
          this.information = data;
          this.cd.markForCheck();
        },
        (error: any) => {
          this.information = 'An error has occurred please try again...';
          this.cd.markForCheck();
        });
  }

  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
    this.information = 'No code information detected. Zoom in on a QR code to scan.';
  }

}

interface Transport {
  plates: string;
  slot: Slot;
}

interface Slot {
  name: string;
  description: string;
}
