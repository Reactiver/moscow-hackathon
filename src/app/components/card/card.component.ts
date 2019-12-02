import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PaymentType } from '../../core/services/create.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CardComponent {
  @Input() pricePerMonth: number;
  @Input() cpu: number;
  @Input() ram: number;
  @Input() ssd: number;
  @Input() hdd: number;
  @Input() paymentType: PaymentType;
  @Input() active: boolean;

  getYearPrice(pricePerMonth: number) {
    return +Number(pricePerMonth * 12).toFixed(0);
  }

  getHourPrice(pricePerMonth: number) {
    return +Number(pricePerMonth / (24 * 30)).toFixed(2);
  }

  getHourMinute(pricePerMonth: number) {
    return +Number(pricePerMonth / (24 * 30 * 60)).toFixed(4);
  }
}
