// Example 1: Change Picture on Button Click
    function changeImage() {
      document.getElementById("image1").src = "assets/img2.jpg";
    }

    // Example 2: Display Current Time
    function updateTime() {
      document.getElementById("currentTime").innerHTML = new Date().toLocaleTimeString();
    }
    setInterval(updateTime, 1000);
    updateTime();

    // Example 3: Toggle Text on Button Click
    function toggleText() {
      var text = document.getElementById("toggleText");
      if (text.innerHTML === "Hello, World!") {
        text.innerHTML = "Goodbye, World!";
      } else {
        text.innerHTML = "Hello, World!";
      }
    }

    // Example 4: Change Background Color on Button Click
    function changeColor() {
      document.body.style.backgroundColor = "lightblue";
    }

    // Example 5: Show/Hide an Element
    function toggleElement() {
      var text = document.getElementById("toggleElement");
      if (text.style.display === "none") {
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
    }

    // Example 6: Update Text on Button Click
    function updateText() {
      document.getElementById("updateText").innerHTML = "Updated Text!";
    }

    // Example 7: Calculate and Display Sum
    function calculateSum() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var sum = num1 + num2;
      document.getElementById("sumResult").innerHTML = "Sum: " + sum;
    }

    // Example 8: Change Text Color on Mouse Over
    function changeTextColor() {
      document.getElementById("mouseoverText").style.color = "red";
    }
    function resetTextColor() {
      document.getElementById("mouseoverText").style.color = "black";
    }

    // Example 9: Alert Box on Button Click
    function showAlert() {
      alert("Hello! This is an alert box.");
    }
    // Example 10: Display Random Number
    function displayRandomNumber() {
      var randomNumber = Math.floor(Math.random() * 100) + 1;
      document.getElementById("randomNumber").innerHTML = "Random Number: " + randomNumber;
    }

    // Example 11: Change Text Content on Double Click
    function changeText() {
      document.getElementById("dblclickText").innerHTML = "Text has been changed!";
    }

    // Example 12: Count Button Clicks
    var count = 0;
    function countClicks() {
      count++;
      document.getElementById("clickCount").innerHTML = "Clicks: " + count;
    }

    // Example 13: Display Length of Text Input
    function displayLength() {
      var length = document.getElementById("textInput").value.length;
      document.getElementById("textLength").innerHTML = "Length: " + length;
    }

    // Example 14: Convert Temperature from Celsius to Fahrenheit
    function convertTemperature() {
      var celsius = parseFloat(document.getElementById("celsius").value);
      var fahrenheit = (celsius * 9/5) + 32;
      document.getElementById("fahrenheit").innerHTML = "Fahrenheit: " + fahrenheit.toFixed(2);
    }

    // Example 15: Reverse a String
    function reverseString() {
      var str = document.getElementById("stringInput").value;
      var reversed = str.split('').reverse().join('');
      document.getElementById("reversedString").innerHTML = "Reversed String: " + reversed;
    }

    // Example 16: Calculate Factorial of a Number
    function calculateFactorial() {
      var num = parseInt(document.getElementById("factorialInput").value);
      var factorial = 1;
      for (var i = 1; i <= num; i++) {
        factorial *= i;
      }
      document.getElementById("factorialResult").innerHTML = "Factorial: " + factorial;
    }

    // Example 17: Change Font Size on Button Click
    function changeFontSize() {
      document.getElementById("fontText").style.fontSize = "24px";
    }

    // Example 18: Validate Email Format
    function validateEmail() {
      var email = document.getElementById("emailInput").value;
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var isValid = regex.test(email);
      document.getElementById("emailResult").innerHTML = isValid ? "Valid Email" : "Invalid Email";
    }

    // Example 19: Change Text on Key Press
    function displayKey() {
      var key = document.getElementById("keyInput").value;
      document.getElementById("keyOutput").innerHTML = "You pressed: " + key;
    }

    // Example 20: Count Words in Text Area
    function countWords() {
      var text = document.getElementById("textArea").value;
      var wordCount = text.trim().split(/\s+/).length;
      document.getElementById("wordCount").innerHTML = "Word Count: " + wordCount;
    }

    // Example 21: Display Current Date
    function displayDate() {
      var currentDate = new Date().toLocaleDateString();
      document.getElementById("currentDate").innerHTML = "Current Date: " + currentDate;
    }

    // Example 22: Change Background Color Based on Time of Day
    function changeBackgroundColor() {
      var hour = new Date().getHours();
      if (hour < 12) {
        document.body.style.backgroundColor = "lightyellow";
      } else if (hour < 18) {
        document.body.style.backgroundColor = "lightgreen";
      } else {
        document.body.style.backgroundColor = "lightblue";
      }
    }

    // Example 23: Check if a Number is Even or Odd
    function checkEvenOdd() {
      var number = parseInt(document.getElementById("numberInput").value);
      var result = (number % 2 === 0) ? "Even" : "Odd";
      document.getElementById("evenOddResult").innerHTML = "The number is " + result;
    }

    // Example 24: Convert Text to Uppercase
    function convertToUppercase() {
      var text = document.getElementById("uppercaseInput").value;
      var uppercaseText = text.toUpperCase();
      document.getElementById("uppercaseResult").innerHTML = "Uppercase: " + uppercaseText;
    }

    // Example 25: Convert Text to Lowercase
    function convertToLowercase() {
      var text = document.getElementById("lowercaseInput").value;
      var lowercaseText = text.toLowerCase();
      document.getElementById("lowercaseResult").innerHTML = "Lowercase: " + lowercaseText;
    }

    // Example 26: Calculate Area of a Circle
    function calculateCircleArea() {
      var radius = parseFloat(document.getElementById("radiusInput").value);
      var area = Math.PI * Math.pow(radius, 2);
      document.getElementById("circleArea").innerHTML = "Area: " + area.toFixed(2);
    }

    // Example 27: Change Text Color on Button Click
    function changeTextColor() {
      document.getElementById("colorText").style.color = "blue";
    }

    // Example 28: Display Alert on Form Submission
    function displayFormAlert(event) {
      event.preventDefault();
      var inputText = document.getElementById("formInput").value;
      alert("Form submitted with: " + inputText);
    }

    // Example 29: Disable Button After Click
    function disableButton() {
      document.getElementById("disableButton").disabled = true;
    }

    // Example 30: Display User's Age
    function displayAge() {
      var birthYear = parseInt(document.getElementById("birthYear").value);
      var currentYear = new Date().getFullYear();
      var age = currentYear - birthYear;
      document.getElementById("ageDisplay").innerHTML = "Your age is: " + age;
    }

    // Example 31: Change Background Color on Mouse Over
    function changeBackgroundColor() {
      document.body.style.backgroundColor = "lightcoral";
    }
    function resetBackgroundColor() {
      document.body.style.backgroundColor = "white";
    }

    // Example 32: Display Current Month
    function displayMonth() {
      var currentMonth = new Date().toLocaleString('default', { month: 'long' });
      document.getElementById("currentMonth").innerHTML = "Current Month: " + currentMonth;
    }

    // Example 33: Calculate Square of a Number
    function calculateSquare() {
      var number = parseFloat(document.getElementById("squareInput").value);
      var square = Math.pow(number, 2);
      document.getElementById("squareResult").innerHTML = "Square: " + square;
    }

    // Example 34: Greet User Based on Time of Day
    function greetUser() {
      var hour = new Date().getHours();
      var greeting;
      if (hour < 12) {
        greeting = "Good Morning!";
      } else if (hour < 18) {
        greeting = "Good Afternoon!";
      } else {
        greeting = "Good Evening!";
      }
      document.getElementById("greeting").innerHTML = greeting;
    }

    // Example 35: Display Random Quote
    function displayQuote() {
      var quotes = [
        "The only limit to our realization of tomorrow is our doubts of today.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Do not watch the clock; do what it does. Keep going.",
        "The best way to predict the future is to invent it."
      ];
      var randomIndex = Math.floor(Math.random() * quotes.length);
      document.getElementById("randomQuote").innerHTML = quotes[randomIndex];
    }

    // Example 36: Change Font Style on Button Click
    function changeFontStyle() {
      document.getElementById("fontStyleText").style.fontFamily = "Courier New";
    }

    // Example 37: Toggle Background Color
    function toggleBackgroundColor() {
      document.body.style.backgroundColor = document.body.style.backgroundColor === 'white' ? 'gray' : 'white';
    }

    // Example 38: Show Alert with Input Value
    function showAlertWithInput() {
      var input = document.getElementById("alertInput").value;
      alert("You entered: " + input);
    }

    // Example 39: Calculate and Display Square Root
    function calculateSqrt() {
      var number = parseFloat(document.getElementById("sqrtInput").value);
      var sqrt = Math.sqrt(number);
      document.getElementById("sqrtResult").innerHTML = "Square Root: " + sqrt.toFixed(2);
    }

    // Example 40: Change Text Alignment
    function changeTextAlignment() {
      var text = document.getElementById("alignmentText");
      text.style.textAlign = text.style.textAlign === "left" ? "right" : "left";
    }

    // Example 41: Highlight Text on Button Click
    function highlightText() {
      document.getElementById("highlightedText").style.backgroundColor = "yellow";
    }

    // Example 42: Display Current Day of the Week
    function displayDay() {
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var currentDay = days[new Date().getDay()];
      document.getElementById("currentDay").innerHTML = "Today is: " + currentDay;
    }

    // Example 43: Display Countdown Timer
    function startCountdown() {
      var seconds = parseInt(document.getElementById("countdownInput").value);
      var countdown = setInterval(function() {
        document.getElementById("countdownTimer").innerHTML = "Time left: " + seconds + "s";
        seconds--;
        if (seconds < 0) {
          clearInterval(countdown);
          document.getElementById("countdownTimer").innerHTML = "Time's up!";
        }
      }, 1000);
    }

    // Example 44: Create and Display List from Array
    function displayList() {
      var items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
      var list = document.getElementById("listDisplay");
      list.innerHTML = "";
      items.forEach(function(item) {
        var li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
      });
    }

    // Example 45: Change Paragraph Text on Button Click
    function changeParagraphText() {
      document.getElementById("paragraphText").innerHTML = "Updated paragraph text.";
    }

    // Example 46: Display Random Color
    function displayRandomColor() {
      var colors = ["Red", "Green", "Blue", "Yellow", "Orange"];
      var randomIndex = Math.floor(Math.random() * colors.length);
      document.getElementById("randomColor").innerHTML = "Random Color: " + colors[randomIndex];
    }

    // Example 47: Generate Random Password
    function generatePassword() {
      var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      var password = "";
      for (var i = 0; i < 8; i++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
      }
      document.getElementById("password").innerHTML = "Generated Password: " + password;
    }

    // Example 48: Display Text with Typing Effect
    function startTypingEffect() {
      var text = "This text is displayed with a typing effect.";
      var i = 0;
      function typeWriter() {
        if (i < text.length) {
          document.getElementById("typingText").innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      }
      document.getElementById("typingText").innerHTML = "";
      typeWriter();
    }

    // Example 49: Display Character Count of Text Input
    document.getElementById("charCountInput").addEventListener("input", function() {
      var count = document.getElementById("charCountInput").value.length;
      document.getElementById("charCount").innerHTML = "Character Count: " + count;
    });

    // Example 50: Display Fibonacci Sequence
    function displayFibonacci() {
      var numTerms = parseInt(document.getElementById("fibonacciInput").value);
      var fibonacci = [0, 1];
      for (var i = 2; i < numTerms; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
      }
      document.getElementById("fibonacciResult").innerHTML = "Fibonacci Sequence: " + fibonacci.join(", ");
    }