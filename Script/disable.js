function disableButtonById(buttonId) {
    let button = document.getElementById(buttonId);
    if (button) {
        button.disabled = true;
    }
}
function updateSidebar(event) {
    let taskId = event.target.getAttribute("data-task");
    let taskName = document.getElementById(taskId).innerText;
    let currentTime = new Date().toLocaleTimeString();
    let message = `You have completed the assigned task: "${taskName}" at ${currentTime}`;
    
    let newEntry = document.createElement("p");
            newEntry.classList.add("activity");
            newEntry.innerText = message;

    let sidebarContent = document.getElementById('sidebar')
    sidebarContent.innerHTML = "";
    sidebarContent.appendChild(newEntry);
}

function clearHistory() {
    let sidebarContent = document.getElementById("sidebar");
    sidebarContent.innerHTML = "";
}

function updateDateTime() {
    let now = new Date();
    let date = now.toLocaleDateString();
    let dateOptions = { weekday: 'short', day: '2-digit', month: 'long' };
    let formattedDate = now.toLocaleDateString('en-GB', dateOptions);
    document.getElementById("dateTime").innerText = `${formattedDate}`;
}
updateDateTime();

function showAlert() {
    alert("Well Done!, You Completed your Task");
}



document.querySelectorAll(".taskButton").forEach(button => {
    button.addEventListener("click", updateSidebar);
})

document.getElementById('disable-btn-1').addEventListener('click', function(event){
    event.preventDefault();
    disableButtonById('disable-btn-1')
})
document.getElementById("disable-btn-1").addEventListener("click", function() {
    let counterElement = document.getElementById("task");
    let currentValue = parseInt(counterElement.innerText);
    counterElement.innerText = currentValue - 1;
});
document.getElementById('disable-btn-1').addEventListener('click', function(){
    let count = document.getElementById("completed");
    let finalCount = parseInt(count.innerText);
    count.innerText = finalCount + 1;
})
document.getElementById("disable-btn-1").addEventListener("click", updateSidebar);
document.getElementById("disable-btn-1").addEventListener("click", showAlert);


document.getElementById('disable-btn-2').addEventListener('click', function(event){
    event.preventDefault();
    disableButtonById('disable-btn-2')
})
document.getElementById("disable-btn-2").addEventListener("click", function() {
    let counterElement = document.getElementById("task");
    let currentValue = parseInt(counterElement.innerText);
    counterElement.innerText = currentValue - 1;
});
document.getElementById('disable-btn-2').addEventListener('click', function(){
    let count = document.getElementById("completed");
    let finalCount = parseInt(count.innerText);
    count.innerText = finalCount + 1;
})
document.getElementById("disable-btn-2").addEventListener("click", updateSidebar);
document.getElementById("disable-btn-2").addEventListener("click", showAlert);

document.getElementById('disable-btn-3').addEventListener('click', function(event){
    event.preventDefault();
    disableButtonById('disable-btn-3')
})
document.getElementById("disable-btn-3").addEventListener("click", function() {
    let counterElement = document.getElementById("task");
    let currentValue = parseInt(counterElement.innerText);
    counterElement.innerText = currentValue - 1;
});
document.getElementById('disable-btn-3').addEventListener('click', function(){
    let count = document.getElementById("completed");
    let finalCount = parseInt(count.innerText);
    count.innerText = finalCount + 1;
})
document.getElementById("disable-btn-3").addEventListener("click", updateSidebar);
document.getElementById("disable-btn-3").addEventListener("click", showAlert);

document.getElementById('disable-btn-4').addEventListener('click', function(event){
    event.preventDefault();
    disableButtonById('disable-btn-4')
})
document.getElementById("disable-btn-4").addEventListener("click", function() {
    let counterElement = document.getElementById("task");
    let currentValue = parseInt(counterElement.innerText);
    counterElement.innerText = currentValue - 1;
});
document.getElementById('disable-btn-4').addEventListener('click', function(){
    let count = document.getElementById("completed");
    let finalCount = parseInt(count.innerText);
    count.innerText = finalCount + 1;
})
document.getElementById("disable-btn-4").addEventListener("click", updateSidebar);
document.getElementById("disable-btn-4").addEventListener("click", showAlert);

document.getElementById('disable-btn-5').addEventListener('click', function(event){
    event.preventDefault();
    disableButtonById('disable-btn-5')
})
document.getElementById("disable-btn-5").addEventListener("click", function() {
    let counterElement = document.getElementById("task");
    let currentValue = parseInt(counterElement.innerText);
    counterElement.innerText = currentValue - 1;
});
document.getElementById('disable-btn-5').addEventListener('click', function(){
    let count = document.getElementById("completed");
    let finalCount = parseInt(count.innerText);
    count.innerText = finalCount + 1;
})
document.getElementById("disable-btn-5").addEventListener("click", updateSidebar);
document.getElementById("disable-btn-5").addEventListener("click", showAlert);

document.getElementById('disable-btn-6').addEventListener('click', function(event){
    event.preventDefault();
    disableButtonById('disable-btn-6')
})
document.getElementById("disable-btn-6").addEventListener("click", function() {
    let counterElement = document.getElementById("task");
    let currentValue = parseInt(counterElement.innerText);
    counterElement.innerText = currentValue - 1;
});
document.getElementById('disable-btn-6').addEventListener('click', function(){
    let count = document.getElementById("completed");
    let finalCount = parseInt(count.innerText);
    count.innerText = finalCount + 1;
})
document.getElementById("disable-btn-6").addEventListener("click", updateSidebar);
document.getElementById("disable-btn-6").addEventListener("click", showAlert);


document.getElementById("clearHistory").addEventListener("click", clearHistory);