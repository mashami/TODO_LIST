// const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// document.querySelector("#enter").addEventListener("click", () => {
//   const item = document.querySelector("#item")
//   createItem(item)
// })

function displayDate(){
  let date = new Date()
  date = date.toString().split(" ")
  date = date[1] + " " + date[2] + " " + date[3] 
  document.querySelector("#date").innerHTML = date 
}


window.onload = function() {
  displayDate()
  
};
