import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})

export class UserProfileComponent implements OnInit {
  currentUser: any = {};

  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) {
    let usuario = this.actRoute.snapshot.paramMap.get('usuario');
    this.authService.getUserProfile().subscribe((res) => {
      console.log('user-profile.component.ts',res)
      this.currentUser = res.username;
    });
  }

  ngOnInit() {}
}
