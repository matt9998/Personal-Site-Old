// local reviews data
const reviews = [
  {
    id: 1,
    name: "laura poff",
    job: "July 18 2021",
    text:
      "Just got home from the Newton NC show - the concert was absolutely mind blowing, the talent was unreal and they’re definitely a must-see band!  Thank you all so much for giving us a memorable evening!",
  },
  {
    id: 2,
    name: "chris mottram",
    job: "february 28 2021",
    text:
      "We just watched the January 37 Main Avondale show online and it was great! We hope to be able to attend live for the next show.",
  },
  {
    id: 3,
    name: "jb boyette",
    job: "january 22 2021",
    text:
      "Great sounding band. Spot on to Floyd. Have seen them three times and setlists have covered from Sid Barrett to Division Bell. They have an Angel on background vocals Eric Clapton on guitar",
  },
  {
    id: 4,
    name: "johm oneill",
    job: "march 9 2020",
    text:
      "Provides a tight groove and the sound samples that set the atmosphere for the show ",
  },
  {
    id: 4,
    name: "tim ford",
    job: "february 2 2020",
    text:
      "Saw their show at the variety playhouse and they were absolutely amazing were waiting to see them again",
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded',function () {
showPerson(currentItem);
});

// show person based on item
function showPerson(person){
	const item = reviews[person];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click',function(){
	currentItem++;
	if(currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson(currentItem);
});

prevBtn.addEventListener('click',function(){
	currentItem--;
	if(currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showPerson(currentItem);
});
	
	
	
	
