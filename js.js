
const selectedDateP = document.getElementById("selectedDate");
const currentDate = document.querySelector(".current-date");
daysTag = document.querySelector(".days");
prevNextIcon = document.querySelectorAll(".icons span");

let selectedDate;
// getting new date, current year and month
let date = new Date();
currYear = date.getFullYear(), 
currMonth = date.getMonth();
let dayNum = 0;
const months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];



const renderCalendar = () => {
    selectedDateP.textContent = `Select Date`;
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";
  
    for (let i = firstDayofMonth; i > 0; i--) {
      liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
      dayNum += i;
    }
  
    for (let i = 1; i <= lastDateofMonth; i++) {
      const isActive = currYear === date.getFullYear() && currMonth === date.getMonth() && i === selectedDate;
      liTag += `<li class="${isActive ? 'active' : ''}" onclick="selectDate(${i})">${i}</li>`;
      dayNum+=i;
    }
  
    for (let i = lastDayofMonth; i < 6; i++) {
      liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
      dayNum+=i;
      if(dayNum<42)
      {
        for (let i = 1; i < 42-dayNum; i++) {
            
            liTag += `<li class="inactive">N/A</li>`;
        }
      }
    }
  
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
  };
  
  function selectDate(date) {
    selectedDate = date;
    renderCalendar();
    selectedDateP.textContent = `${months[currMonth]} ${date}, ${currYear}`;
  }
  
  renderCalendar();
  
  prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
      if (icon.id === "prev") {
        currMonth--;
      } else {
        currMonth++;
      }
  
      if (currMonth < 0) {
        currYear--;
        currMonth = 11;
      } else if (currMonth > 11) {
        currYear++;
        currMonth = 0;
      }
  
      date = new Date(currYear, currMonth); // Update date based on currYear and currMonth
      selectedDate = null;
      renderCalendar();
    });
  });

  let selectedTimeElement = null;

  // Function to select a time
  function selectTimeToBook(selectedId) {
    const selectedElement = document.getElementById(selectedId);
    
    if (selectedElement === selectedTimeElement) {
      // The same element is clicked again, deselect it
      selectedElement.classList.remove("selectedTime");
      selectedElement.style.fontWeight = "normal";
      selectedElement.style.cursor = "pointer";
      selectedElement.style.color = "";
      selectedTimeElement = null;
    } else {
      // Deselect the previously selected element (if any)
      if (selectedTimeElement) {
        selectedTimeElement.classList.remove("selectedTime");
        selectedTimeElement.style.fontWeight = "normal";
        selectedTimeElement.style.color = "";
      }
      
      // Select the new element
      selectedElement.classList.add("selectedTime");
      selectedElement.style.fontWeight = "bold";
      selectedElement.style.color = "aqua";
      selectedTimeElement = selectedElement;
    }
  }
  
  const bookRoomButton = document.getElementById("bookRoomButton");
  const popup = document.getElementById("popup1");
  
  // Function to show the popup
  function showPopup() {
    popup.style.display = "flex"; // Show the popup
  }
  
  // Function to hide the popup with animation
  function hidePopup() {
    popup.style.animation = "slide-out 0.5s ease-in-out"; // Add exit animation
    setTimeout(() => {
      popup.style.display = "none"; // Hide the popup after the animation
      popup.style.animation = "none"; // Reset animation
    }, 500); // Adjust the time to match your animation duration
  }
  
  // Add a click event listener to the "Book Room" button
  bookRoomButton.addEventListener("click", showPopup);
  
  // Add a click event listener to close the popup when clicking outside it
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      hidePopup();
    }
  });
  