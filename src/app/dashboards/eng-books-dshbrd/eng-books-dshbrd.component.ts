import { Component } from '@angular/core';
import { Interface1 } from '../../Interfaces/interface1'



@Component({
  selector: 'app-eng-books-dshbrd',
  templateUrl: './eng-books-dshbrd.component.html',
  styleUrl: './eng-books-dshbrd.component.css'
})
export class EngBooksDshbrdComponent {
  books_eng: Interface1[] = [
    {
      id : 20,
      name : "Surrounded By Idiots",
      Author : "Thomas Erikson",
      Year : 2020,
      image:'https://shop.ireadhub.com/cdn/shop/products/9781785042188_294x.jpg?v=1660728180',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 21,
      name : "The Monk Who Sold His Ferrari",
      Author : "Robin Sharma",
      Year : 2022,
      image:'https://shop.ireadhub.com/cdn/shop/products/9780061125898_294x.jpg?v=1661176017',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 23,
      name : "The Alchemist",
      Author :"Paulo Coelho",
      Year : 2023,
      image:'https://shop.ireadhub.com/cdn/shop/products/9780007155668_294x.jpg?v=1660555530',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 25,
      name : "To Kill a Mockingbird",
      Author :"Harper Lee",
      Year : 2023,
      image:'https://cdn.shopify.com/s/files/1/0495/3263/3247/products/9780446310789_451x.jpg?v=1633529436',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 26,
      name : "Book Thief",
      Author :"Markus Zusak",
      Year : 2022,
      image:'https://cdn.shopify.com/s/files/1/0495/3263/3247/products/9780552779739_451x.jpg?v=1660558561',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 27,
      name : "The Advs. Of Sherlock Holmes",
      Author :"Arthur Conan Doyle",
      Year : 2023,
      image:'https://cdn.shopify.com/s/files/1/0495/3263/3247/products/3_36_1400x_f333e4b9-6a02-4847-863e-c1a5e4b61b31_451x.jpg?v=1661949667',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 28,
      name : "The DOUBL",
      Author :"Fyodor Dostoevsky",
      Year : 2013,
      image:'https://cdn.shopify.com/s/files/1/0495/3263/3247/products/1_74_1400x_385b70dd-6e8a-42d5-9f5d-ee0c9eaf8645_451x.webp?v=1661946582',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 29,
      name : "Notes From Underground",
      Author :"Fyodor Dostoevsky",
      Year : 1864,
      image:'https://cdn.shopify.com/s/files/1/0495/3263/3247/products/1_1_1400x_ed2483a9-c089-4224-b173-1d3e08c44aad_451x.jpg?v=1661946942',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id :22,
      name : "The Black Swan",
      Author :"Nassim Nicholas Taleb",
      Year : 2007,
      image: 'https://shop.ireadhub.com/cdn/shop/products/9780141034591_205x.jpg?v=1660728617',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'
    },
  ]
  }
