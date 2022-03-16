export class SblStartRequest {
  public user_id: string;
  public module_id: string;

  constructor(user_id: string, module_id: string) {
    this.user_id = user_id;
    this.module_id = module_id;
  }

}
