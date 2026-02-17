let calories = localStorage.getItem("calories") || 0;
let workouts = localStorage.getItem("workouts") || 0;
let protein = localStorage.getItem("protein") || 0;

function login(){
const email=document.getElementById("email").value;
document.getElementById("username").innerText=email.split("@")[0];

document.getElementById("loginScreen").classList.add("hidden");
document.getElementById("app").classList.remove("hidden");

updateUI();
}

function logout(){
location.reload();
}

function showPage(page){
["dashboard","analytics","profile"].forEach(p=>{
document.getElementById(p+"Page").classList.add("hidden");
});
document.getElementById(page+"Page").classList.remove("hidden");

if(page==="analytics") loadChart();
}

function addCalories(){
calories=Number(calories)+250;
localStorage.setItem("calories",calories);
updateUI();
}

function addProtein(){
protein=Number(protein)+30;
localStorage.setItem("protein",protein);
updateUI();
}

function completeWorkout(){
if(workouts<6){
workouts++;
localStorage.setItem("workouts",workouts);
updateUI();
}
}

function updateUI(){
document.getElementById("calories").innerText=calories;
document.getElementById("protein").innerText=protein+"g";

document.getElementById("workoutText").innerText=
workouts+" / 6 sessions";

document.getElementById("progressFill").style.width=
(workouts/6)*100+"%";
}

function saveProfile(){
const name=document.getElementById("nameInput").value;
document.getElementById("username").innerText=name;
}

function toggleTheme(){
document.body.style.background=
document.body.style.background==="white"
? "#0b1220"
: "white";
}

function loadChart(){
new Chart(document.getElementById("chart"),{
type:"line",
data:{
labels:["Mon","Tue","Wed","Thu","Fri","Sat"],
datasets:[{
label:"Calories",
data:[1800,2100,2000,2300,2400,2200],
borderColor:"#39ff14",
tension:.4
}]
}
});
}
