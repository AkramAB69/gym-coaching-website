function login(){
let email=document.getElementById("email").value;
if(!email) return;

localStorage.setItem("gymUser",email.split("@")[0]);
updateUI();
loginModal.style.display="none";
initChart();
}

function logout(){
localStorage.clear();
location.reload();
}

function updateUI(){
let user=localStorage.getItem("gymUser");
if(!user){
loginModal.style.display="flex";
}else{
document.getElementById("username").textContent=user;
}
}

function showPage(page){
dashboardPage.style.display="none";
analyticsPage.style.display="none";
profilePage.style.display="none";
document.getElementById(page+"Page").style.display="block";
}

let kcal=Number(localStorage.getItem("kcal")||0);
document.getElementById("calories").innerText=kcal;

function addCalories(){
kcal+=250;
localStorage.setItem("kcal",kcal);
document.getElementById("calories").innerText=kcal;
notify();
}

function saveProfile(){
let name=document.getElementById("nameInput").value;
if(!name) return;
localStorage.setItem("gymUser",name);
updateUI();
notify();
}

function notify(){
let t=document.getElementById("toast");
t.style.opacity=1;
setTimeout(()=>t.style.opacity=0,2000);
}

function toggleTheme(){
document.body.classList.toggle("light");
}

function initChart(){
const ctx=document.getElementById('chart');
if(!ctx) return;

new Chart(ctx,{
type:'line',
data:{
labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
datasets:[{
label:'Strength Progress',
data:[40,45,50,55,60,65,70],
borderColor:'#39ff14',
tension:.4
}]
}
});
}

updateUI();
if(localStorage.getItem("gymUser")) initChart();
