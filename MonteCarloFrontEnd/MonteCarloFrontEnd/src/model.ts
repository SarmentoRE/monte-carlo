export default class Model {

  gender : string = "male";
  income : number;
  age : number;
  retirementDate;
  deathDate;
  filingStatus : string = "single";
  concerns = [false, false, false, false]
  assetHolder = [];
  matchHolder = [];
  capHolder = [];
  amountHolder = [];
  additionsHolder = [];
  htmlHolder = [];
  lumpSum : number;


  // retirementDateYear = this.retirementDate.getFullYear();
  // deathDateYear = this.deathDate.getFullYear();
  assets = {  "assets" : this.assetHolder,
                      "matching" : this.matchHolder,
                      "caps" : this.capHolder,
                      "amounts" : this.amountHolder,
                      "additions" : this.additionsHolder }
}
