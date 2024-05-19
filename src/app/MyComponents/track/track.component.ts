import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var google: any;

@Component({
  selector: 'app-track',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  map: any;
  directionsService: any;
  directionsDisplay: any;

  distance: string | undefined;
  duration: string | undefined;
  error: string | undefined;
  deliveryTime: Date | undefined;

  isPopupVisible: boolean = false;

  constructor() { }

  ngOnInit() {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('showPopup') === 'true') {
      this.showDeliveryPopup();
    }

    this.initMap();
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.directionsDisplay.setMap(this.map);
  }

  initMap() {
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: 40.7128, lng: -74.0060 },
      zoom: 12
    });
  }

  calculateAndDisplayRoute() {
    const startInput = document.getElementById('start') as HTMLInputElement;
    const endInput = document.getElementById('end') as HTMLInputElement;

    if (!startInput || !endInput) {
      console.error('Start or end input element not found');
      return;
    }

    const start = startInput.value.trim();
    const end = endInput.value.trim();

    if (!start || !end) {
      this.error = 'Please enter both start and end locations.';
      return;
    }

    this.directionsService.route({
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
    }, (response: any, status: any) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
        const route = response.routes[0];
        const leg = route.legs[0];
        this.distance = leg.distance.text;
        this.duration = leg.duration.text;
        this.error = undefined;

        const now = new Date();
        const deliveryTime = new Date(now.getTime() + leg.duration.value * 1000);

        const alertTime = new Date(now.getTime() + 5 * 60000);
        if (deliveryTime < alertTime) {
          alert('Your order will be delivered soon!');
        }

        setTimeout(() => {
          const currentTime = new Date();
          if (currentTime >= deliveryTime) {
            this.showDeliveryPopup();
          }
        }, leg.duration.value * 1000);

        setTimeout(() => {
          alert('Your order will be delivered in less than 5 minutes!');
        }, leg.duration.value * 1000 - 5 * 60000);
      } else {
        this.error = 'Directions request failed due to ' + status;
        this.distance = undefined;
        this.duration = undefined;
      }
    });
  }

  showDeliveryPopup() {
    this.isPopupVisible = true;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('showPopup', 'true');
    }
  }

  closePopup() {
    this.isPopupVisible = false;
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('showPopup');
    }
  }
}
