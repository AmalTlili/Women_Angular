import { TestBed } from '@angular/core/testing';
import {UploadFileService} from './upload-files.service';



describe('UploadFilesService', () => {
  let service: UploadFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
