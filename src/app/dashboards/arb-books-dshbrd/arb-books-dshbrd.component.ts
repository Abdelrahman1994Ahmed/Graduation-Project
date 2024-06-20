import { Component } from '@angular/core';
import { Interface1 } from '../../Interfaces/interface1'

@Component({
  selector: 'app-arb-books-dshbrd',
  templateUrl: './arb-books-dshbrd.component.html',
  styleUrl: './arb-books-dshbrd.component.css'
})
export class ArbBooksDshbrdComponent {
  books_ar: Interface1[] = [
    {
      id : 1,
      name : "اليوم الاخير",
      Author : "أحمد العايدي",
      Year : 2023,
      image:'https://shop.ireadhub.com/cdn/shop/products/9789778241238_361x.webp?v=1655201180',
      url: 'https://clickdimensions.com/links/TestPDFfile.pdf'
    },{
      id : 2,
      name : "حكاية ليلى",
      Author : " ديير للنشر والتوزيع",
      Year : 2022,
      image:'https://shop.ireadhub.com/cdn/shop/products/mockup-featuring-the-back-of-a-paperback-book-against-a-plain-backdrop-3436-el1_a01172c5-e947-4ebe-89f3-0d847916c5f8_361x.jpg?v=1625470906',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 3,
      name : "الأزهر ودوره في خدمة الإسلام والعروبة",
      Author :"د/رمضان حسانين جاد",
      Year : 2023,
      image:'https://shop.ireadhub.com/cdn/shop/files/WhatsApp-Image-2023-01-23-at-3.27.52-PM_357x.jpg?v=1685358795',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 5,
      name : "دم المماليك",
      Author :"وليد فكرى",
      Year : 2023,
      image:'https://shop.ireadhub.com/cdn/shop/products/32c84096f0b52610fe84965cdb598472_357x.jpg?v=1658755572',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 6,
      name : "صالة أورفانيللي",
      Author :"صالة أورفانيللي",
      Year : 2023,
      image:'https://shop.ireadhub.com/cdn/shop/products/56492991_361x.jpg?v=1661087603',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 7,
      name : "لوكاندة بير الوطاويط",
      Author :"احمد مراد",
      Year : 2023,
      image:'https://shop.ireadhub.com/cdn/shop/products/54306211_361x.jpg?v=1655050449',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 8,
      name : "مكالمة موت",
      Author :"احمد عثمان",
      Year : 2022,
      image:'https://shop.ireadhub.com/cdn/shop/files/421114199_10168795540955556_6865414550215858864_n_294x.jpg?v=1706528420',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 10,
      name : "من هم اليهود؟ وما هي اليهودية؟",
      Author :"عبدالوهاب المسيرى",
      Year : 2005,
      image:'https://shop.ireadhub.com/cdn/shop/products/Man-Hom-El-Yahood_205x.jpg?v=1635249766',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 11,
      name : "حديث الصباح و المساء",
      Author :"نجيب محفوظ",
      Year : 1987,
      image:'https://cdn.shopify.com/s/files/1/0495/3263/3247/products/9789778616231_large.webp?v=1659954483',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },{
      id : 15,
      name : "أبو الهول ",
      Author : "أحمد مراد",
      Year : 2023,
      image:'https://cdn.shopify.com/s/files/1/0495/3263/3247/files/9789770938577_451x.jpg?v=1697348391',
      url: 'file:///C:/Users/lenovo/Downloads/20000-Leagues-Under-the-Sea.pdf'

    },
    
  ]

 

  // list = document.querySelector(".list");
  // item = document.querySelector(".item");
  // itemWidth = document.querySelector<HTMLElement>(".item")?.offsetWidth
  // handleClick(direction:string){
  //   if(direction === "previous") {
  //     this.list?.scrollBy({left:this.itemWidth, behavior: 'smooth'})
  //   } else {
  //     this.list?.scrollBy({left:this.itemWidth, behavior: 'smooth'})
  //   }
  // }
  
}
