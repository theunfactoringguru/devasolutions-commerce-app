import Model from "./Model";

export default class ServiceModel extends Model{
  private serviceId: string;
  private name: string;
  private specs: Map<string,string>;
}