//A “person” class to hold all the details:
class person{
    constructor(name,age,gender,nationality,ph_no){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.nationality=nationality;
        this.ph_no=ph_no;
    }
}
 
const details=new person("Arjun",23,"male","india",2468101214);

console.log(details);

// class to calculate the uber price:
console.log("ola price calculate:")
class ola{
    constructor(location,price_per_km){
        this.location=location;
        this.price_per_km=price_per_km;
    }
    totalkm(){
        return this.price_per_km
    }
    payment(km){
      this.price_per_km=this.price_per_km*km;
      return this.totalkm();

    }
}
var payment_price = 110;
const price=new ola("koyambedu",8);
console.log("price per km :",price.totalkm());
console.log("total km of traveling :",payment_price);
console.log("Total price for traveled :₹",price.payment(payment_price));
