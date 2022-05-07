import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ani-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.scss']
})
export class DeclarationComponent implements OnInit {

  @Input() name: string = 'Aniruddha Das';
  @Input() heading: string = 'Declaration';
  @Input() declarationText: string = 'I hereby declare that the above written particulars are to the best of my knowledge &amp; belief.';
  @Input() signature: string = 'Aniruddha Das';
  constructor() {
  }

  ngOnInit(): void {
  }

}
