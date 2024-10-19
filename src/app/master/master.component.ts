import { Component } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { DesignationsComponent } from '../designations/designations.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QueueAction } from 'rxjs/internal/scheduler/QueueAction';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RolesComponent, DesignationsComponent, CommonModule, FormsModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {
  currentComponent: string = '';
  productName: string = '';
  quantity: number = 1;
  price: number = 6.24;
  totalPrice: number = 0;

  changeTab(newTab: string){
    this.currentComponent = newTab;
  }

  calculateTotal(){
    return this.totalPrice = this.price * this.quantity;
  }
}
