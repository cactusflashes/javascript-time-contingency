function getGreeting() {
  let currentHour = new Date().getHours();
  
    if (currentHour >= 5 && currentHour < 12) {
      return "Good Morning,"; //if the time is past 5am and before noon => Good Morning 
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Good Afternoon,"; //if the time is past noon but before 6pm => Good Afternoon
    } else if (currentHour >= 18 && currentHour < 21) {
      return "Good Evening,"; //if the time is past 6pm but before 9pm => Good Evening
    } else {
      return "Good Night,"; //anything past 9pm before 5am => Good Night 
    }
  }

let greeting = getGreeting(); 

//usage: document.element.innerHTML = `${greeting}, everyone!`
  
