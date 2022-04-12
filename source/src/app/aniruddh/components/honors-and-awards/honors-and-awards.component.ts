import {Component, OnInit} from '@angular/core';

export interface Award {
  title: string;
  url?: string;
  description: string;
}

@Component({
  selector: 'ani-honors-and-awards',
  templateUrl: './honors-and-awards.component.html',
  styleUrls: ['./honors-and-awards.component.scss']
})
export class HonorsAndAwardsComponent implements OnInit {

  awards: Array<Award> = [];
  constructor() {

    this.awards = [
      {
        title: 'NN/G 2012 Intranet Design Annual Award winners',
        url: 'http://www.nngroup.com/news/item/2012-intranet-design-awards/',
        description: `
NCR Corporation's intranet designers used a significant reorganization as
an opportunity to help make information more transparent to all. Taking
cues from organizational restructuring, they defined one IA and search,
  eliminating many issues from both the individual and company perspectives.
  In this winning design, people can find their information while hitting
  fewer pages and sites, so they can spend less time pursuing content and
  more time consuming it. <br/>
  The NCR intranet team: Sushil Bharwani, Naveen Verma, Abhishek Anand,
  Prashant Yadav, Prateek Narang, <strong>Anirudha Das</strong>, Jai Prakash
  Mishra, Rudresh Shrotriya, Abdul Momin Khan, Mohit Sharma, Kenny Monteith,
  Myria Williams, Vic Shoup, Omar Gosh, Joshua Smith, Colleen Swanger, Stuart
  Gray, and Angelo Kalevela.`
      },

      {
        title: 'Polymorphin Rangers (September 2015)',
        description: `Recognized by Bank of America GWBT for contribution towards hack/a/thon_
  innovation project.`
      },
      {
        title: 'Bank of America -Smile Award',
        description: `Recognized by Management of Bank of America for Enhancing a large customer facing application.`
      },
      {
        title: 'NCR Corporation -Smile Award',
        description: `Recognized by Management of NCR Corporation for contribution towards ARCS Customer account alignment project.`
      },
    ]
  }

  ngOnInit() {
  }

}
