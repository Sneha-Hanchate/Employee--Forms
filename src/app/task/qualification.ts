export class Qualification{
 public  constructor(
   public qualification: string,
    public institute: string,
    public passing_year:string,
    public score:string,
    public qualification_area:string,
  ){}

  }

  export class Employee{
    public  constructor(
      public fdate: string,
      public tdate: string,
      public company: string,
      public designation: string,
     ){}

     }

     export class Skill{
      public  constructor(
        public category: string,
        public skill: string,
        public level: string,
        public current: string,
        public experience: string,
       ){}

       }


