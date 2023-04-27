import Model from "../Model";
import Order from "../OrderModel";
import ServiceModel from "./ServiceModel";

export default class ApplicationModel extends Model{
  private name: string;
  private order: Order;
  private services: ServiceModel[];
  private description: string;
}