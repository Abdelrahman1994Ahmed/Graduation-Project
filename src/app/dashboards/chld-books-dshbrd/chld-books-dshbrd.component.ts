import { Component } from '@angular/core';
import { Interface1 } from '../../Interfaces/interface1'


@Component({
  selector: 'app-chld-books-dshbrd',
  templateUrl: './chld-books-dshbrd.component.html',
  styleUrl: './chld-books-dshbrd.component.css'
})
export class ChldBooksDshbrdComponent {
  books_chld: Interface1[] = [
    {
      id : 31,
      name : "صديق من نوع خاص",
      Author :"نهضة مصر",
      Year : 2021,
      image:'https://shop.ireadhub.com/cdn/shop/products/28_205x.jpg?v=1656254681',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 32,
      name : "Happy Birthday to You",
      Author :"Dr/Suss",
      Year : 2006,
      image:'https://m.media-amazon.com/images/I/61-66t0NIpL._SL1200_.jpg',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 33,
      name : "A Royal Conundrum",
      Author :"Lisa Yee",
      Year : 2003,
      image:'https://m.media-amazon.com/images/I/812VEXtvjPL._SL1500_.jpg',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 35,
      name : "Book of Silly Jokes for Kids",
      Author :"Carole P. Roman",
      Year : 2013,
      image:'https://m.media-amazon.com/images/I/81AgoOPzO6L._SL1500_.jpg',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 36,
      name : "Sinbad Sailor and The Carrier",
      Author :"New Horizon",
      Year : 2003,
      image:'https://shop.ireadhub.com/cdn/shop/products/SinbadtheSailorandtheCarrier_205x.jpg?v=1625497207',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 37,
      name : "آلة الزمن",
      Author :"هربرت جورج ويلز",
      Year : 2023,
      image:'https://cdn.shopify.com/s/files/1/0495/3263/3247/products/a1ba6bc9-7ffd-4835-bebe-03520f3041ab_451x.jpg?v=1674819873',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 38,
      name : "Alone",
      Author :"Megan E. Freeman",
      Year : 2022,
      image:'https://m.media-amazon.com/images/I/71wkxhigucL._AC_UY218_.jpg',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 34,
      name : "Beyond the Secret Lake",
      Author :"Karen Inglis ",
      Year : 2024,
      image:'https://m.media-amazon.com/images/I/710IjKFa5aL._SL1360_.jpg',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 39,
      name : "The City of Ember",
      Author :"Jeanne DuPrau",
      Year : 2004,
      image:'https://m.media-amazon.com/images/I/71fmLhEPDRL._SL1200_.jpg',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 3101,
      name : "The Key House",
      Author : "Mike Curtis",
      Year : 2023,
      image:'https://m.media-amazon.com/images/I/71Ox1mKkSgL._SL1500_.jpg',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },
  ]
}
