import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import {FileUpload} from '../fileupload';
import { UploadFileService } from '../upload-file.service';
import * as firebase from 'firebase/app'
import { __metadata } from 'tslib';

@Component({
  selector: 'list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.scss']
})
export class ListUploadComponent implements OnInit {
  metadatafile;
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
/*---*/
private basePath = '/uploads';
getmetadata(fileUpload: FileUpload){
    const storageRef = firebase.storage().ref();
    // Create a reference to the file whose metadata we want to retrieve
     //this.metadatafile = storageRef.child(`${this.basePath}/${this.currentFileUpload.file.name}`);

    // Get metadata properties
    storageRef.child(`${this.basePath}/${fileUpload.file.name}`).getMetadata().then(function(metadata) {
       this.metadatafile = metadata;
    // Metadata now contains the metadata for 'images/forest.jpg'
     
    }).catch(function(error) {
  // Uh-oh, an error occurred!
    });
  
  }
/*---*/  

}
