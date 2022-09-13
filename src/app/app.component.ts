import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, AfterViewInit } from '@angular/core';
declare var anime: any;              // declare like this


@Component({
  selector: 'app-root',
	animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '800px',
        opacity: 1,
        backgroundColor: '#333333'
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
        backgroundColor: '#222222'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'HappyBirthday';
	isOpen = true;

	toggle() {
    this.isOpen = true;
  }

	ngAfterViewInit(): void {
		console.log("made by hasan antakly")

	let textWrapper2 = document.querySelector('.c1');
	textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='el' style='display:inline-block;'>$&</span>");

	let textWrapper4 = document.querySelector('.c3');
	textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S/g, "<span class='letter' style='display:inline-block;'>$&</span>");
	
	anime.timeline({loop: false})
  .add({
    targets: '.a1 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: 3000
  })
	// .add({
  //   targets: '.a1',
  //   opacity: 0,
  //   duration: 1000,
  //   easing: "easeOutExpo",
  //   delay: 13000
  // });
	anime.timeline({loop: false})
  .add({
    targets: '.a2 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: 5000
  })
	// .add({
  //   targets: '.a2',
  //   opacity: 0,
  //   duration: 1000,
  //   easing: "easeOutExpo",
  //   delay: 11000
  // });
	anime.timeline({loop: false})
  .add({
    targets: '.a3 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: 7000
  })
	// .add({
  //   targets: '.a3',
  //   opacity: 0,
  //   duration: 1000,
  //   easing: "easeOutExpo",
  //   delay: 9000
  // });
	anime.timeline({loop: false})
  .add({
    targets: '.a4 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: 8000
  })
	// .add({
  //   targets: '.a4',
  //   opacity: 0,
  //   duration: 1000,
  //   easing: "easeOutExpo",
  //   delay: 8000
  // });
	anime.timeline({loop: false})
  .add({
    targets: '.a5 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: 8500
  })
	// .add({
  //   targets: '.a5',
  //   opacity: 0,
  //   duration: 1000,
  //   easing: "easeOutExpo",
  //   delay: 7500
  // });

	anime.timeline({loop: false})
  .add({
    targets: '.c1 .el',
    opacity: [0,1],
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: ((el, i) => 100 * i)
  })
	// .add({
  //   targets: '.c1',
  //   opacity: 0,
  //   duration: 1000,
  //   easing: "easeOutExpo",
  //   delay: 14000
  // });

	anime.timeline({loop: false})
  .add({
    targets: '.c3 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: ((el, i) => 500 + 30 * i)
  });
	// .add({
  //   targets: '.c3 .letter',
  //   translateX: [0,-30],
  //   opacity: [1,0],
  //   easing: "easeInExpo",
  //   duration: 1100,
  //   delay: ((el, i) => 14000 + 30 * i)
  // });

	// ____jhvjhgvhjgf


}
}





