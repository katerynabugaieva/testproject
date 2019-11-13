import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  today = 12;
  dateArray = []
  dayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  ngOnInit() {
    for (let i = 0; i < 24; i++) {
      this.dateArray.push({ id: (i + 1), isOpen: false })
      if (i + 1 < this.today + 1)
        this.dateArray[i].isOpen = true
    }
  }

  calculateTheDate(dayIncome) {
    return "day" + dayIncome
  }

  openDoor(event: Event) {
    // var queryResult = element[0].querySelector('.multi-files');
   // var queryResult = Element[0].querySelector('#modal')
   // console.log(queryResult)
    /*
    if ($(this).hasClass('future')) {
      $('#modal').addClass('active');
      $('#modal .wrapper .content .box').html("<h2>Naughty, naughty.</h2> <p>You can't look early! Check back on that day to see what I've left for you.</p>");
    }
    if ($(this).hasClass('past')) {
      var content = $(this).children('.surprise').html();
      $('#modal').addClass('active');
      $('#modal .wrapper .content .box').html('');
      $('#modal .wrapper .content .box').html(content);
    }
    */
  }
}
