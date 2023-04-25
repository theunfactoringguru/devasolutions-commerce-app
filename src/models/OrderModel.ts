import ApplicationModel from "./ApplicationModel";
import Model from "./Model";

export default class OrderModel extends Model{
  private _totalPrice: number;
  private _orderType: string;
  private _description: string;
  private _application: ApplicationModel;
  private _meetingDate: Date;
  private _deliveryDate: Date;

  constructor(orderId: string, orderType: string, meetingDate: Date, description: string){
    super(orderId);
    this._orderType = orderType;
    this._meetingDate = meetingDate;
    this._description = description; 
  }

  public create(){
    
  }
}