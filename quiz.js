const quizData = [
    { question: "What does 'typeof null' return in JavaScript?", a: "object", b: "null", c: "undefined", d: "number", correct: "a" },
    { question: "Which method is used to add an element at the end of an array?", a: "push()", b: "pop()", c: "shift()", d: "unshift()", correct: "a" },
    { question: "What is the output of '2' + 2 in JavaScript?", a: "4", b: "'22'", c: "NaN", d: "Error", correct: "b" },
    { question: "Which keyword is used to declare a variable in JavaScript?", a: "var", b: "let", c: "const", d: "All of the above", correct: "d" },
    { question: "What does the '===' operator check in JavaScript?", a: "Equality of value only", b: "Equality of type only", c: "Equality of both value and type", d: "None of the above", correct: "c" },
    { question: "Which function is used to parse a string into an integer in JavaScript?", a: "parseFloat()", b: "parseInt()", c: "Number()", d: "toFixed()", correct: "b" },
    { question: "What will 'console.log([] == false)' output?", a: "true", b: "false", c: "undefined", d: "Error", correct: "a" },
    { question: "Which loop is best for iterating over object properties?", a: "for loop", b: "for...in", c: "for...of", d: "while", correct: "b" },
    { question: "What does 'NaN' stand for?", a: "Not a Number", b: "Negative and Null", c: "New and Null", d: "None of the Above", correct: "a" },
    { question: "How do you declare an arrow function in JavaScript?", a: "()=>{}", b: "function(){}", c: "=> function(){}", d: "None of the above", correct: "a" },
    { question: "Which array method removes the last element from an array?", a: "pop()", b: "shift()", c: "slice()", d: "splice()", correct: "a" },
    { question: "Which of the following is NOT a JavaScript data type?", a: "Boolean", b: "Float", c: "Number", d: "Object", correct: "b" },
    { question: "What does 'this' refer to in JavaScript?", a: "Current object", b: "Global object", c: "Function itself", d: "None of the above", correct: "a" },
    { question: "Which method converts a JSON string into a JavaScript object?", a: "JSON.parse()", b: "JSON.stringify()", c: "JSON.objectify()", d: "JSON.toObject()", correct: "a" },
    { question: "What is the default value of an uninitialized variable in JavaScript?", a: "null", b: "0", c: "undefined", d: "NaN", correct: "c" },
    { question: "Which operator is used to assign a default value in JavaScript?", a: "??", b: "||", c: "&&", d: "?:", correct: "a" },
    { question: "Which method is used to combine two or more arrays?", a: "concat()", b: "push()", c: "merge()", d: "append()", correct: "a" },
    { question: "What does 'map()' do in JavaScript?", a: "Transforms each element in an array", b: "Filters elements in an array", c: "Reduces an array", d: "None of the above", correct: "a" },
    { question: "How do you create a JavaScript promise?", a: "new Promise()", b: "Promise.create()", c: "promise()", d: "None of the above", correct: "a" },
    { question: "What is the result of 'typeof NaN'?", a: "undefined", b: "number", c: "NaN", d: "object", correct: "b" },
    { question: "What is the result of 'typeof NaN'?", a: "undefined", b: "number", c: "NaN", d: "object", correct: "b" },
  { question: "Which JavaScript feature allows function calls before declaration?", a: "Hoisting", b: "Closure", c: "Currying", d: "Async/Await", correct: "a" },
  { question: "What does 'Object.freeze()' do?", a: "Prevents object properties from being changed", b: "Deletes an object", c: "Turns an object into JSON", d: "Prevents object copying", correct: "a" },
  { question: "What is the difference between 'let' and 'var'?", a: "'let' is block-scoped, 'var' is function-scoped", b: "No difference", c: "'var' allows reassignment, 'let' doesn't", d: "'var' is more secure", correct: "a" },
  { question: "Which statement is true about closures?", a: "They allow functions to access outer function variables", b: "They prevent variable hoisting", c: "They make JavaScript asynchronous", d: "They stop functions from being nested", correct: "a" },
  { question: "What will 'console.log(typeof [])' output?", a: "array", b: "object", c: "undefined", d: "list", correct: "b" },
  { question: "How do you deep copy an object in JavaScript?", a: "JSON.parse(JSON.stringify(obj))", b: "Object.assign({}, obj)", c: "obj.clone()", d: "obj.copy()", correct: "a" },
  { question: "What is the purpose of the 'apply()' method in JavaScript?", a: "Calls a function with a given 'this' value and arguments", b: "Applies a function to an object", c: "Modifies object properties", d: "None of the above", correct: "a" },
  { question: "Which of the following is NOT a valid JavaScript event?", a: "onhover", b: "onclick", c: "onchange", d: "onload", correct: "a" },
  { question: "What is an Immediately Invoked Function Expression (IIFE)?", a: "A function that runs as soon as it's defined", b: "A function that executes after a delay", c: "A function that never runs", d: "A function that is attached to an object", correct: "a" },
  { question: "Which JavaScript method is used to iterate over an array?", a: "forEach()", b: "loop()", c: "repeat()", d: "map()", correct: "a" },
  { question: "What is the difference between '==' and '==='?", a: "'===' checks both value and type, '==' only checks value", b: "They are the same", c: "'==' checks only type, '===' checks value", d: "None of the above", correct: "a" },
  { question: "Which function removes the first element of an array?", a: "shift()", b: "pop()", c: "splice()", d: "slice()", correct: "a" },
  { question: "What is the output of 'console.log(1 + '1' - 1);'?", a: "10", b: "11", c: "NaN", d: "0", correct: "a" },
  { question: "What is the difference between 'async' and 'defer' attributes in a script tag?", a: "'async' loads in parallel, 'defer' waits until DOM is ready", b: "They are the same", c: "'defer' blocks rendering", d: "'async' is only for CSS", correct: "a" },
  { question: "What does the 'bind()' method do?", a: "Binds a function to an object", b: "Creates a new function with fixed arguments", c: "Prevents changes to a function", d: "None of the above", correct: "a" },
  { question: "How does 'setTimeout()' work?", a: "Executes a function after a delay", b: "Runs a function immediately", c: "Stops a function", d: "Repeats a function", correct: "a" },
  { question: "What will 'console.log([] + {});' output?", a: "'[object Object]'", b: "{}", c: "[]{}", d: "Error", correct: "a" },
  { question: "What is a promise in JavaScript?", a: "An object representing a future value", b: "A function that always runs", c: "A variable with no value", d: "A global variable", correct: "a" },
  { question: "Which function is used to stop an interval?", a: "clearInterval()", b: "stopInterval()", c: "endInterval()", d: "pauseInterval()", correct: "a" },
  { question: "What does the 'fetch()' function return?", a: "A Promise", b: "A string", c: "An object", d: "A number", correct: "a" },
  { question: "How do you check if an object is an instance of a specific class?", a: "obj instanceof Class", b: "typeof obj === 'Class'", c: "obj.type === Class", d: "None of the above", correct: "a" },
  { question: "What does 'event.preventDefault()' do?", a: "Stops default event behavior", b: "Stops JavaScript execution", c: "Reloads the page", d: "None of the above", correct: "a" },
  { question: "Which keyword is used to define a JavaScript class?", a: "class", b: "constructor", c: "object", d: "prototype", correct: "a" },
  { question: "What does 'Object.keys(obj)' return?", a: "An array of keys in the object", b: "An array of values in the object", c: "An array of objects", d: "Undefined", correct: "a" },
  { question: "What is the purpose of the 'new' keyword in JavaScript?", a: "Creates an instance of an object", b: "Declares a variable", c: "Defines a new function", d: "None of the above", correct: "a" },
  { question: "Which method is used to convert a JavaScript object to a JSON string?", a: "JSON.stringify()", b: "JSON.parse()", c: "toString()", d: "None of the above", correct: "a" },
  { question: "What does 'Array.prototype.reduce()' do?", a: "Applies a function to reduce array values to a single value", b: "Filters an array", c: "Maps values to a new array", d: "None of the above", correct: "a" },
  { question: "How do you check if a number is finite in JavaScript?", a: "isFinite()", b: "Number.isFinite()", c: "parseFloat()", d: "Math.isFinite()", correct: "b" },
  { question: "What does 'async/await' do in JavaScript?", a: "Handles asynchronous operations more cleanly", b: "Creates a new function", c: "Runs code in a separate thread", d: "None of the above", correct: "a" },
  { question: "Which operator is used for exponentiation in JavaScript?", a: "**", b: "^", c: "exp()", d: "Math.pow()", correct: "a" },
  { question: "What is the purpose of 'Symbol' in JavaScript?", a: "Creates a unique identifier", b: "Defines a new class", c: "Encodes a string", d: "None of the above", correct: "a" },
  { question: "What is the 'rest parameter' in JavaScript?", a: "A way to accept multiple function arguments as an array", b: "Pauses function execution", c: "Deletes array elements", d: "None of the above", correct: "a" }
  ];
  
  for (let i = 20; i < 50; i++) {
    quizData.push({
      question: `Sample Question ${i + 1}?`,
      a: "Option A",
      b: "Option B",
      c: "Option C",
      d: "Option D",
      correct: "a"
    });
  }
  
  const quiz = document.getElementById("quiz");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
  }
  
  function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
                          <button onclick="location.reload()">Restart Quiz</button>`;
      }
    }
  });
  
  loadQuiz();
  