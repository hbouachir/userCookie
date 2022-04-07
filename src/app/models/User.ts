import { Role } from "../models/Role";


export class User {
  id : number;
  firstName : string;
  lastName : string;
  stripe_id : string;
  username : string;



  password : string;
  passwordConfirm : string;
  email : string;
  address : string ;
  dateN:Date;
  tel:string;
  loginTime:number;
  pointFidelite:number;


  role : Role;
  sexe : string;
  enabled: boolean;
  signupDay:Date;
  etatAcc:boolean;


  constructor() {

  }

}
