// Conditional Statements
function checkNumber() {
    const num = document.getElementById("numberInput").value;
    const result = document.getElementById("numberResult");
    if (num > 0) {
      result.textContent = "The number is positive.";
    } else if (num < 0) {
      result.textContent = "The number is negative.";
    } else {
      result.textContent = "The number is zero.";
    }
  }
  
  // If-Else Statements
  function guessNumber() {
    const guess = document.getElementById("guessInput").value;
    const secret = 7;
    const result = document.getElementById("guessResult");
    if (guess == secret) {
      result.textContent = "Correct! You guessed the secret number.";
    } else {
      result.textContent = "Wrong guess! Try again.";
    }
  }
  
  // Switch Statements
  function selectFruit() {
    const fruit = document.getElementById("fruitSelect").value;
    const result = document.getElementById("fruitResult");
    switch (fruit) {
      case 'apple':
        result.textContent = "You selected Apple.";
        break;
      case 'banana':
        result.textContent = "You selected Banana.";
        break;
      case 'orange':
        result.textContent = "You selected Orange.";
        break;
      default:
        result.textContent = "Please select a fruit.";
    }
  }
  
  // Loops
  function countToFive() {
    const result = document.getElementById("countResult");
    result.innerHTML = ''; // Clear previous result
    for (let i = 1; i <= 5; i++) {
      const li = document.createElement('li');
      li.textContent = i;
      result.appendChild(li);
    }
  }
  
  // While Loops
  function printEvenNumbers() {
    const result = document.getElementById("evenNumbersResult");
    result.textContent = ''; // Clear previous result
    let i = 1;
    let evens = '';
    while (i <= 10) {
      if (i % 2 === 0) {
        evens += i + ' ';
      }
      i++;
    }
    result.textContent = evens;
  }
  
  // Authentication
  function authenticate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const result = document.getElementById("authResult");
    if (username === 'user' && password === 'password') {
      result.textContent = "Login successful!";
    } else {
      result.textContent = "Invalid credentials.";
    }
  }
  
  // HTTP Request (Example using Fetch API)
  function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        document.getElementById("dataResult").textContent = JSON.stringify(data, null, 2);
      })
      .catch(error => {
        document.getElementById("dataResult").textContent = "Error fetching data.";
      });
  }
  
  // Flask Session Example
  function setSession() {
    sessionStorage.setItem('user', 'John Doe');
    document.getElementById("sessionResult").textContent = "Session set!";
  }
  
  function getSession() {
    const user = sessionStorage.getItem('user');
    document.getElementById("sessionResult").textContent = user ? `Session user: ${user}` : "No session found.";
  }
  
  // Stateless HTTP
  let stateCount = 0;
  function checkState() {
    stateCount++;
    document.getElementById("stateResult").textContent = `This page has been accessed ${stateCount} times.`;
  }
  
  // Debugging
  function debugCode() {
    console.log("Debugging: Everything is working fine!");
    alert("Check the console for debugging output.");
  }
  