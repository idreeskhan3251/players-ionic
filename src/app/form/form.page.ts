import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {PlayerlistService} from '../playerlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  addForm: FormGroup;
  singlePlayer;
  constructor(private router: Router,
              private playerlistService: PlayerlistService,
              private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.formInitializer();
  }
  formInitializer() {
    this.addForm = this.formBuilder.group({
      id: [null, [Validators.required]],
      name: [null, [Validators.required]]
    });
  }
       addNewPlayer() {
      this.singlePlayer = this.addForm.value;
      this.playerlistService.addNewPlayer(this.singlePlayer.id, this.singlePlayer.name);
      this.router.navigateByUrl('/players');
   }
}
