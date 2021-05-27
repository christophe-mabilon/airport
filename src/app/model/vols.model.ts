import { Time } from '@angular/common';
export class Vol {

  constructor(
    public id: number,
    public arrivalAirportCode: string,
    public arrivalDate: Date,
    public arrivalTime: Time,
    public departureAirportCode: string,
    public departureDate: Date,
    public departureTime: Time,
    public late: boolean,
    public price: number,
    public volNumber: string,

  ) { }

}
