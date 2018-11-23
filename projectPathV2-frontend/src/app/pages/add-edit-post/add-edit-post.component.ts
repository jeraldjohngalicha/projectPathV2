import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-add-edit-post',
  templateUrl: 'add-edit-post.component.html',
  styleUrls: ['add-edit-post.component.scss'],
})
export class AddEditPostComponent implements OnInit {

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  addedPoints : Point[] = [];
  postTitle : String = "";
  pointTitle : String = "";

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }

  uploadThumbnail(){
    alert("Thumbnail Uploaded");
  }

  uploadPointPhoto(){
    alert("Point Photo Uploaded");
  }

  addPoint(){
    alert("Add New Point "+this.pointTitle);
    this.addedPoints.push(new Point());

  }
}

class Point{
    title: string = "";
}
