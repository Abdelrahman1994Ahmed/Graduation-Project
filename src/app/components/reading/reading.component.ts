import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrl: './reading.component.css'
})
export class ReadingComponent {
  previweurl : any
  // pdfurl = 'https://clickdimensions.com/links/TestPDFfile.pdf'


constructor( private sanitizer : DomSanitizer){
  
}

previewinform(){
  this.previweurl = this.sanitizer.bypassSecurityTrustResourceUrl("https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf")
}


}
