import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoneypotService } from 'app/moneypot.service';

@Component({
  selector: 'app-uploadmoney',
  templateUrl: './uploadmoney.component.html',
  styleUrls: ['./uploadmoney.component.css']
})
export class UploadmoneyComponent implements OnInit {
  fileName = '';

  constructor(private moneyportService: MoneypotService, public router: Router ) { }

  ngOnInit(): void {
  }
  onFileSelected(event) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("file", file);
        this.moneyportService.uploadMoneyPot(formData).subscribe((data) =>{console.log(data);
        });
        this.router.navigateByUrl('moneypot');
       console.log("Filename is " + this.fileName);

       
    }
}
}
