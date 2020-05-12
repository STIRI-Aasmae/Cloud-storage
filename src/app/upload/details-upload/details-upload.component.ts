import { Component, OnInit,Input } from '@angular/core';
import { FileUpload } from '../fileupload';
import { UploadFileService } from '../upload-file.service';
import * as firebase from 'firebase/app'

@Component({
  selector: 'details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.scss']
})
export class DetailsUploadComponent implements OnInit {
  @Input() fileUpload: FileUpload;
  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  deleteFileUpload(fileUpload) {
    this.uploadService.deleteFileUpload(fileUpload);
  }

 /* dowloadFile(fileUpload: FileUpload){
    this.download(fileUpload.name);
  }*/
  
  private basePath = '/uploads';

  download(fileUpload: FileUpload){
    var name:string = fileUpload.name; 
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).getDownloadURL().then(function(url){    
      
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = function(event) {
        var blob = xhr.response;
      };
      xhr.open('GET', url);
      xhr.send();

    }).catch(function(error) {
      console.log(error);
    });
  }

}
