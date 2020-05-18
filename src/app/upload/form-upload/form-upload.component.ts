import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { FileUpload } from '../fileupload';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Component({
  selector: 'form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.scss']
})
export class FormUploadComponent implements OnInit {
  metadatafile: any[];
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };
  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  private basePath = '/uploads';
 
  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
 
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
    /*
    const storageRef = firebase.storage().ref();
    // Create a reference to the file whose metadata we want to retrieve
     //this.metadatafile = storageRef.child(`${this.basePath}/${this.currentFileUpload.file.name}`);

    // Get metadata properties
    storageRef.child(`${this.basePath}/${this.currentFileUpload.file.name}`).getMetadata().then(function(metadata) {
    // Metadata now contains the metadata for 'images/forest.jpg'
    this.metadatafile=metadata; 
    }).catch(function(error) {
  // Uh-oh, an error occurred!
    });
     */
  }

}
