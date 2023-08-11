import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService]
})
export class UserEditComponent implements OnInit {
  public pageTitle: string;
  public user: User;
  public identity: any;
  public token: string;
  public status: string = '';
  public messageError: string = '';
  public isLoadingEdit: boolean = false;
  public afuConfig: any;
  public url: string = global.url;
  public resetVar: boolean = true;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService
  ) {
    this.pageTitle = 'Actualizar ajustes de usuario';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.identity;
    this.afuConfig = {
      multiple: false,
      formatsAllowed: '.jpg, .jpeg, .png, .gif',
      maxSize: '50',
      uploadAPI: {
        url: `${this.url}/upload-avatar`,
        headers: {
          'Authorization': this.token
        }
      },
      theme: 'attachPin',
      hideProgressBar: false,
      hideResetBtn: true,
      hideSelectBtn: false,
      replaceTexts: {
        attachPinBtn: 'Sube tu avatar de usuario',
        afterUploadMsg_success: 'Successfully Uploaded !',
        afterUploadMsg_error: 'Upload Failed !',
        sizeLimit: 'Size Limit'
      }
    }
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this.isLoadingEdit = true;
    this._userService.update(this.user).subscribe(
      response => {
        if (response.status === 'success') {
          this.isLoadingEdit = false;
          this.status = 'success';
          localStorage.setItem('identity', JSON.stringify(this.user));
        }
      },
      error => {
        this.isLoadingEdit = false;
        this.status = 'error';
        console.log(error);
      }
    )
  }

  avatarUpload(data: any) {
    const dataObj = data.body;
    this.user.image = dataObj.user.image;
  }

}
