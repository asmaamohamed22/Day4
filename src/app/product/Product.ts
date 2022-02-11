export class Product {
  id: number;
  title: string;
  price: number;
  decription: string;
  image: string;
  
  constructor(id: number=0, title: string="", price: number=0, decription: string="", image: string="") {
    this.id = id;
    this.title = title;
    this.price = price;
    this.decription = decription;
    this.image = image;
  }
}
