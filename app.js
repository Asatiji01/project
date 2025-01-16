const question = [
     { question: "Who has most century in all formats?", option: ["Virat", "Sachin", "Devanshu", "Rohit"], answer: "Sachin" },
     { question: "Who has the highest individual score in ODI cricket?", option: ["Rohit Sharma", "Chris Gayle", "Virender Sehwag", "Martin Guptill"], answer: "Rohit Sharma" },
     { question: "Who holds the record for the fastest century in ODI cricket?", option: ["Virat Kohli", "AB de Villiers", "Shahid Afridi", "Corey Anderson"], answer: "AB de Villiers" },
     { question: "Who is the highest run-scorer in Test cricket history?", option: ["Ricky Ponting", "Sachin Tendulkar", "Jacques Kallis", "Kumar Sangakkara"], answer: "Sachin Tendulkar" },
     { question: "Which bowler has the most wickets in Test cricket?", option: ["Shane Warne", "Anil Kumble", "Muttiah Muralitharan", "James Anderson"], answer: "Muttiah Muralitharan" },
     // Add the rest of your questions...
   ];
   
   function random() {
     const data = new Set();
     while (data.size !== 5) {
       let index = Math.floor(Math.random() * question.length);
       data.add(question[index]);
     }
     return [...data];
   }
   
   const problem = random();
   const o = {};
   problem.forEach((obj, index) => {
     const form = document.querySelector("form");
     const div_ele = document.createElement("div");
     div_ele.className = "question";
     const paragraph = document.createElement("p");
     paragraph.textContent = `${index + 1}. ${obj.question}`;
     div_ele.appendChild(paragraph);
     o[`q${index + 1}`] = obj.answer; // Properly store answers
     obj.option.forEach((data) => {
       const label = document.createElement("label");
       const input = document.createElement("input");
       input.type = "radio";
       input.name = `q${index + 1}`;
       input.value = data;
       label.appendChild(input);
       label.appendChild(document.createTextNode(data));
       div_ele.appendChild(label);
       div_ele.appendChild(document.createElement("br"));
       form.appendChild(div_ele);
     });
   });
   
   const form = document.querySelector("form");
   const b = document.createElement("button");
   b.type = "submit";
   b.innerHTML = "Submit";
   form.appendChild(b);
   
   form.addEventListener("submit", (e) => {
     e.preventDefault();
     const data = new FormData(form);
     const answer = Array.from(data.entries()); // Retrieve name-value pairs
     let result = 0;
     answer.forEach(([key, value]) => {
       if (value === o[key]) {
         result++;
       }
     });
   
     const r = document.getElementById("result") || document.createElement("div");
     r.id = "result";
     r.innerHTML = `${result} out of 5 are correct`;
     r.style.fontSize = "20px";
     r.style.margin = "30px";
     document.getElementById("quiz").appendChild(r);
   });
   
