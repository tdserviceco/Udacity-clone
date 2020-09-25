function openThis(event) {
  event.classList.toggle('open');
} 

function openNav() {
  let navID = document.getElementById("main-navigation");
  let Body = document.getElementsByTagName("BODY")[0];
  let Header = document.getElementsByTagName("HEADER")[0];
  navID.classList.toggle('active');
  Body.classList.toggle('active');
  Header.classList.toggle('active');
}