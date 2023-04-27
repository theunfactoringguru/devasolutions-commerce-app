export default abstract class Model{
  protected id: string;
  protected url: string;

  constructor(modelId: string){
    this.id = modelId;
    this.url = 'http://localhost:8080'
  }

  async create(){
    
  };
  //abstract update(): void;
  //abstract delete(): void;
}