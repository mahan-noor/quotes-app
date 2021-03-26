export class Quotes {
    public showInfomation: boolean;
    constructor(public id: number,public name: string,public description: string, public completeDate: Date){
      this.showInfomation=false;
    }
}

