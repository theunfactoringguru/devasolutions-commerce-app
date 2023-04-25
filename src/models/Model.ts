export default abstract class Model{
  protected id: string;

  constructor(modelId: string){
    this.id = modelId;
  }

  abstract create(): void;
  abstract readOne(id: String): Model;
  abstract readAll(id: String): Model[];
  abstract update(): void;
  abstract delete(): void;
}