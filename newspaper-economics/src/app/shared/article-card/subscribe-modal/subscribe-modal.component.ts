import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbonnementModel } from '../../models/abonnement.model';
import { AbonnementService } from '../../services/abonnement.service';

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
    let abonnement = new AbonnementModel();
    console.log(localStorage.getItem('userId'));
    if(localStorage.getItem('userId')) {
      abonnement.users_id = parseInt(localStorage.getItem('userId')!, 10);
      console.log(abonnement);
      this.abonnementService.addAbonnement(abonnement).subscribe(
        response => {
          console.log(response);
          this.hasSubscribe.emit(true);
        }
      );
    } else {
      window.location.href = "/login";
    }
  }
}
