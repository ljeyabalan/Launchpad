import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { BehaviorSubject } from 'rxjs';
import { CartComponent } from '../cart/cart.component';
import { ModalController } from '@ionic/angular';
import { GlobalServiceService } from '../../service/global-service.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  constructor(private cartService: CartService, private modalCtrl: ModalController, private gs: GlobalServiceService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.products = this.cartService.getProducts();
    this.cartItemCount = this.cartService.getCartItemCount();


  }
  async openCart() {

    let modal = await this.modalCtrl.create({
      component: CartComponent,
    });
    modal.present();
  }

}
