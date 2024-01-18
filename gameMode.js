let dif;
const btnn = document.getElementById('slowBtn');
btnn.addEventListener("click", function(e){
    console.log("your mum yeah");
    
    console.log("your mum yeah");
    dif = 250;
    localStorage.setItem("slow", dif);
    console.log(localStorage);
});
const btnnn = document.getElementById('medBtn');
btnnn.addEventListener("click", function(e){
    console.log("your mum yeah");
    
    console.log("your mum yeah");
    dif = 125;
    localStorage.setItem("slow", dif);
    console.log(localStorage);
});
const btnnnn = document.getElementById('fastBtn');
btnnnn.addEventListener("click", function(e){
    console.log("your mum yeah");
    
    console.log("your mum yeah");
    dif = 50;
    localStorage.setItem("slow", dif);
    console.log(localStorage);
});