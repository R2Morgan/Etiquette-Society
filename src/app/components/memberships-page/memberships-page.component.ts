import { Component } from '@angular/core';
import {ScrollAnimateDirective} from "../../utils/scroll-animate.directive";
import {NgClass, NgFor} from "@angular/common";

interface Partner {
  image: string;
  name: string;
  discount: string;
}

interface MembershipTier {
  name: string;
  price: number;
  subtitle: string;
  className: string;
  partners: Partner[];
}

@Component({
  selector: 'memberships-page',
  standalone: true,
  imports: [
    ScrollAnimateDirective,
    NgClass,
    NgFor
  ],
  templateUrl: './memberships-page.component.html',
  styleUrl: './memberships-page.component.scss'
})
export class MembershipsPageComponent {
  tiers: MembershipTier[] = [
    {
      name: 'Neck Tie',
      price: 150,
      subtitle: 'Base partner discounts to elevate your lifestyle.',
      className: 'neck-tie',
      partners: [
        { image: 'assets/partners/tudor.jpg', name: 'Tudor Tailor', discount: '5%' },
        { image: 'assets/partners/mensclub.png', name: 'Mens Club', discount: '10%' },
        { image: 'assets/partners/popantofaria.jpeg', name: 'Popantofaria', discount: '10%' },
        { image: 'assets/partners/tellastory.jpeg', name: 'Tell a Story', discount: '15%' },
        { image: 'assets/partners/meron.png', name: 'Meron', discount: '10%' }
      ]
    },
    {
      name: 'Black Tie',
      price: 300,
      subtitle: 'Expanded discounts and curated experiences.',
      className: 'black-tie',
      partners: [
        { image: 'assets/partners/tudor.jpg', name: 'Tudor Tailor', discount: '5%' },
        { image: 'assets/partners/mensclub.png', name: 'Mens Club', discount: '10%' },
        { image: 'assets/partners/artizan.png', name: 'Artizan', discount: '10%' },
        { image: 'assets/partners/popantofaria.jpeg', name: 'Popantofaria', discount: '10%' },
        { image: 'assets/partners/tellastory.jpeg', name: 'Tell a Story', discount: '15%' },
        { image: 'assets/partners/jospalaria.png', name: 'Jos Palaria', discount: '10%' },
        { image: 'assets/partners/deionescu.jpg', name: 'De Ionescu', discount: '10%' },
        { image: 'assets/partners/mannen.png', name: 'Mannen', discount: '15%' },
        { image: 'assets/partners/meron.png', name: 'Meron', discount: '10%' },
        { image: 'assets/partners/dot.webp', name: 'DOT', discount: '15%' }
      ]
    },
    {
      name: 'White Tie',
      price: 500,
      subtitle: 'Top-tier discounts, VIP experiences, ultimate luxury.',
      className: 'white-tie',
      partners: [
        { image: 'assets/partners/tudor.jpg', name: 'Tudor Tailor', discount: '15%' },
        { image: 'assets/partners/mensclub.png', name: 'Mens Club', discount: '10%' },
        { image: 'assets/partners/mezum.jpeg', name: 'Mezum', discount: '20%' },
        { image: 'assets/partners/artizan.png', name: 'Artizan', discount: '25%' },
        { image: 'assets/partners/zesso.png', name: 'Zesso', discount: '10%' },
        { image: 'assets/partners/popantofaria.jpeg', name: 'Popantofaria', discount: '15%' },
        { image: 'assets/partners/tellastory.jpeg', name: 'Tell a Story', discount: '15%' },
        { image: 'assets/partners/jospalaria.png', name: 'Jos Palaria', discount: '10%' },
        { image: 'assets/partners/deionescu.jpg', name: 'De Ionescu', discount: '10%' },
        { image: 'assets/partners/mannen.png', name: 'Mannen', discount: '15%' },
        { image: 'assets/partners/theurbanties.png', name: 'Urban Ties', discount: '20%' },
        { image: 'assets/partners/meron.png', name: 'Meron', discount: '10%' },
        { image: 'assets/partners/dot.webp', name: 'DOT', discount: '15%' },
        { image: 'assets/partners/barbersociety.png', name: 'Barber Society', discount: '15%' },
        { image: 'assets/partners/toulouse.png', name: 'Toulouse', discount: '10%' }
      ]
    }
  ];

}
