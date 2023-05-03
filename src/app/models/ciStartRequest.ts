export class CiStartRequest {
  public user_id: string;
  public module_id: string;
  public gender: string;
  public name: string;

  constructor(user_id: string, module_id: string, gender: string, name: string) {
    this.user_id = user_id;
    this.module_id = module_id;
    this.gender = gender;
    this.name = name;
  }

}
