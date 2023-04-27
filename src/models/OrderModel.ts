//import ApplicationModel from "./ignored/ApplicationModel";
import Model from "./Model";

export default class OrderModel extends Model{
  private _totalPrice: number;
  private _orderType: string;
  private _description: string;
  //private _application: ApplicationModel;
  private _meetingDate: Date;
  private _deliveryDate: Date;
  
  constructor(orderId: string, orderType: string, meetingDate: Date, description: string){
    super(orderId);
    this._totalPrice = 0;
    this._deliveryDate = new Date();
    this._orderType = orderType;
    this._meetingDate = meetingDate;
    this._description = description; 
  }

  public async create(){
    await fetch(`${this.url}/order`, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        orderId: this.id,
        totalPrice: this._totalPrice,
        orderType: this._orderType,
        meetingDate: new Date(),
        deliveryDate: new Date(),
        descrption: this._description,
      })
    })
  }
}