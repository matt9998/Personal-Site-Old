// local reviews data
const reviews = [
  {
    id: 1,
    name: "Unmanned Combat Air Vehicle (Jan-May 2021)",
    job: "| Aircraft Design | Aircraft Performance Analysis |",
	hyper: "https://expo.gatech.edu/prod1/portal/portal.jsp?c=17462&p=413142918&g=413665329&id=413930211",
    img:	
      "./jim.jpg",
    text:
      "Goals: Design unmanned air-to-air fighter aircraft to perform given combat mission requirement while being a cheaper alternative and supplement to Gen 5 fighters. Challenges: Simultaneously integrating and iterating across multiple design parameters while being limited to initial cost, performance, and sizing constraints. Results: Developed unmanned aircraft for which 3.3 units can be purchased per single F-22 and achieved 9.75 flight hours per F-22 hour.",
  },
  {
    id: 2,
    name: "eVTOL Systems Design (Aug-Dec 2020)",
    job: "| Systems Engineering | Research-Based |",
	hyper: "./Summative.pdf",
    img:
      "./chris.jpg",
    text:
      "Goals: Develop marketable program for the growing Urban Air Mobility industry from CONOPS to program timelinewhile adhering to Uber Air vehicle requirements. Challenges: Utilizing optimization methods to select ideal vehicle configuration, functions, and high-to-low level requirements across large range of design space. Results: Final vehicle mission and configuration allowed for transportation of over 150 passengers per vehicle-day. Program timeline demonstrated functionality in major US cities by 2024.",
  },
  {
    id: 3,
    name: "Hypersonic Flight Program (May-Aug 2021)",
    job: "| Flight Condition Simulation | MATLAB Programming |",
	hyper: "https://github.com/matt9998/Hypersonic-Flight-Calculator",
    img:
      "./dave.jpg",
    text:
      "Goals: Create interactive program where user can input details of hypersonic vehicle and quickly obtain downstream conditions, aerodynamic forces, and heating. Challenges: Hypersonic downstream shock conditions required iterative programming solution. Heating values heavily dependent on varying vehicle geometry. Results: Program rapidly provides downstream conditions and vehicle heat flux within 4 percent of exact equilibrium code solution.",
  },
  {
    id: 4,
    name: "Mars Rover (Jan-May 2020)",
    job: "Physical Design and Assembly | SolidWorks",
	hyper: "./Rover.pdf",
    img:
      "./mike.jpg",
    text:
      "Goals: Design 3D CAD model and assembly for functional Mars terraforming vehicle, including structure, mobility system, engine, and components for assembly. Challenges: Ensuring individually produced parts are consistent with desired dimensions for final assembly, creative solutions for 150+ interlocking parts. Results: Conceptualized, designed, assembled, and rendered final terraforiming vehicle prototype consisting of parts made by each team member.",
  },
  {
    id: 5,
    name: "Model Rocket (Sep-Nov 2019)",
    job: "Physical Deisgn and Testing | Flight Simulation",
	hyper: "./Rocket.pdf",
    img:	
      "./eric.jpg",
    text:
      "Goals: Given desired apogee height for launch, select model rocket configuration and motor to perform given task, using simulation to verify performance. Challenges: Modification of initial rocket kit required use of 3D printing custom parts to store payload and motor, simulation of custom modifications and parts. Results: Rocket launch test achieved apogee of 98 feet, producing only a 2% error from performance requirement and simulation expectations.",
  },
  {
    id: 6,
    name: "Orbital Location Program (Sep-Dec 2020)",
    job: "Orbital Mechanics Analysis | MATLAB Programming",
	hyper: "https://github.com/matt9998/Orbital-Location-Calculator",
    img:	 
      "./iss.jpg",
    text:
      "Goals: Given position and velocity vectors of ISS taken from known radar location, obtain orbital elements and knew position and velocity vectors after certain time. Challenges: Utilization of multiple coordinate systems needed for effective computation, creation of user-friendly program for variable time and vector inputs. Results: MATLAB program that quickly computes all 6 primary orbital elements and initial + final vectors for object's position and velocity",
  },
  {
    id: 7,
    name: "Wind Farm Analysis (May-Aug 2021)",
    job: "Market Study | Sytems Engineering | Project Planning",
	hyper: "./Wind.pdf",
    img:	
      "./farm.jpg",
    text:
      "Goals: Verify feasibility of large-scale wind farm in region of interest, design turbine and compare performance results with economic and environmental goals. Challenges: Turbine blade and tower design required multiple iteration before performance results could demonstrate the economic feasibility of the proposed farm. Results: Final farm could produce energy at a cost of roughly 8 cents per kilowatt-hour, able to outcompete natural gas and coal energy providers in the region.",
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
	img.onclick = function() {
		window.location.href = item.hyper;
	};
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

	
	
	
	
