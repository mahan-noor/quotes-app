export class Quotes {
  showInfomation: boolean ;
  dislikes: any;
  likes: number;
    constructor(public id: number,public name: string,  public quotes: string, public author: string, public dateposted:Date,public like:number, public dislike:number){
      this.showInfomation=false;
    }
}

