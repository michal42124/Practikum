export default class UserModel{
    constructor(
        public FirstName:string,
        public LastName:string,
        public Tz:string,
        public Id:number,
        public DateOfBirth:Date,
        public Gender:number,
         public HMO:number,
    ){}
    }