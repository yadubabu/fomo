export interface Coins {
    cap:number,
    code:string,
    delta:{
        hour:number,
        day:number,
        week:number,
        month:number,
        quarter:number,
        year:number,
    },
    rate:number,
    volume:number,
  }
  export interface Stocks {
    name:string,
    volume:number,
    markets:number,
    askTotal:number,
    bidTotal:number,
    code:string,
    png64:string,
    png128:string,
    webp64:string,
    webp128:string
  }