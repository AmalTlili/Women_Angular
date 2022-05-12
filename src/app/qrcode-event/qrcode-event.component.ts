import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-qrcode-event',
  templateUrl: './qrcode-event.component.html',
  styleUrls: ['./qrcode-event.component.css']
})
export class QrcodeEventComponent implements OnInit {
  scanResult: any='';
  qrResultString: string;
  title = 'ANGULARQRSCANNER';
  @Output() sender = new EventEmitter();


  ngOnInit(): void {
  }

  clearResult(): void {
    this.qrResultString = null;
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    console.log(this.qrResultString);
    this.sender.emit(this.qrResultString);   
  }
}