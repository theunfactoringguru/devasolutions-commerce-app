import ApplicationModel from "./ApplicationModel";
import Model from "./Model";

interface Name {
  firstName: string;
  lastName: string;
}

export default class ClientModel extends Model{
  private clientId: string;
  private email: string;
  private password: string;
  private fullName: Name;
  private applications: ApplicationModel[];
  private orders: Order[];
  private phone: string;
}