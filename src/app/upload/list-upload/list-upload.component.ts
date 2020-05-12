import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import {FileUpload} from '../fileupload';
import { UploadFileService } from '../upload-file.service';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Component({
  selector: 'list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.scss']
})
export class ListUploadComponent implements OnInit {
  fileUploads: any[];
  //fileUploads: AngularFireList<FileUpload[]>;
  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    /*this.uploadService.getFileUploads().snapshotChanges.subscribe((result)=>{
      this.fileUploads = result;
  });*/
  
    // Use snapshotChanges().pipe(map()) to store the key
    this.uploadService.getFileUploads(3).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }
  

}
