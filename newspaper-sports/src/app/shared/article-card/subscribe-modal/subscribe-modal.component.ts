import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbonnementModel } from '../../models/abonnement.model';
import { AbonnementService } from '../../services/abonnement.service';
import {UserModel} from "../../models/user.model";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-subscribe-modal',
  templateUrl: './subscribe-modal.component.html',
  styleUrls: ['./subscribe-modal.component.scss']
})
export class SubscribeModalComponent implements OnInit {

  @Output() hasSubscribe = new EventEmitter<boolean>();

  constructor(private abonnementService: AbonnementService) { }

  ngOnInit(): void {
  }

  onSubscribe() {
    let user = localStorage.getItem('user');
    if(user != null){
      let userAuth: UserModel = JSON.parse(user);
      let abo: AbonnementModel = new AbonnementModel();
      abo.users_id = userAuth.id
      abo.journal_id = environment.journalid;
      this.abonnementService.addAbonnement(abo).subscribe(
        response => {
          this.hasSubscribe.emit(true);
        }
      );
    } else {
      window.location.href = "/login";
    }
  }
}
