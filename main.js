    // 1. USA
    // Define function getUSA()
    // Find the html element that contains "USA".
    // Print that element's contents.
    function getUSA() {
        let page = document.getElementsByTagName('*');
        for(let i = 0; i < page.length; i++) {
  
          let words = page[i].innerHTML;
  
          if(words=='USA') {
  
            console.log(page[i]);
          }
        }
    }
        
      // 2. Sales
      // Define function getPeopleInSales()
      // Print the names of all the people in the sales department.
      function getPeopleInSales() {
            let tr = document.getElementsByTagName('tr');
            for(let i = 0; i<tr.length; i++) {
                let name= tr[i].childNodes[1].innerHTML;
                let dept= tr[i].childNodes[3].innerHTML;
                if(dept=="Sales") {
                    console.log(name);
                }
            }
      }
        
      // 3. Click Here
      // Define function getAnchorChildren()
      // Find all anchor elements with a <span> child.
      // Print the contents of <span>
        function getAnchorChildren() {
            let span = document.getElementsByTagName("a");
            for(let i = 0; i <span.length; i++) {
                for(let j = 0; j < span[i].childNodes.length; j++) {
                    if(span[i].childNodes[j].tagName == "SPAN") {
                        console.log(span[i].innerHTML)
                    }
                }
            }
        }
        
      // 4. Hobbies
      // Define function getHobbies()
      // Find all checked options in the 'skills' select element.
      // Print the value and the contents.
      function getHobbies() {
        let selects = document.getElementsByTagName("select");
        for(let i = 0; i < selects.length; i++) {
            if(selects[i].getAttribute("name") == "skills") {
                let skills = selects[i].childNodes;
                for(let j = 0; j < skills.length; j++) {
                    if(skills[j].tagName == "OPTION"&& skills[j].getAttribute("selected") == "selected")
                        console.log(skills[j].innerHTML);
                }
            }
	    }
    }
        
      // 5. Custom Attribute
      // Define function getCustomAttribute()
      // Find all elements with "data-customAttr" attribute
      // Print the value of the attribute.
      // Print the element that has the attribute.
      function getCustomAttribute() {
        let customs = document.querySelectorAll('[data-customAttr]');
        for(let i = 0; i < customs.length; i++) {
            console.log(customs[i]);
        }
      }
  
      // 6. Sum Event
      // NOTE: Write unobtrusive Javascript
      // Regarding these elements:
      // 	<input id="num1" class="nums" type="text"/>
      // 	<input id="num2" class="nums" type="text"/>
      // 	<h3>Sum: <span id="sum"></span></h3>
  
      // Define onchange event handler.
      // Add <input> element values.
      // Put the sum in the <span> element.
      // If values cannot be added, put "Cannot add" in the <span> element

      function sumEvent(){
        let nums = document.getElementsByClassName('nums');

        for (let i = 0; i < nums.length; i++) {
            nums[i].addEventListener("change", () => {
                document.getElementById('sum').innerText = `
                ${+document.getElementById('num1').value + +document.getElementById('num2').value}`;
            })
         }
        }
  
      // 7. Skills Event
      // NOTE: Write unobtrusive Javascript
      // When user selects a skill, create an alert with a message similar to:
      // 	"Are you sure CSS is one of your skills?"
      // NOTE: no alert should appear when user deselects a skill.

      let skill = document.getElementsByName("skills")[0];
      skill.addEventListener("change", chooseSkills);

      function chooseSkills(){
          for (let i = 0; i < skill.children.length; i++) {
              if (skill.children[i]["selected"]){    
                alert(`Are you sure that ${skill.children[i].innerHTML} is one of your skills?`)
                }
          }
        }
  
      // 8. Favorite Color Event
      // NOTE: Write unobtrusive Javascript
      // NOTE: This is regarding the favoriteColor radio buttons.
      // When a user selects a color, create an alert with a message similar to:
      // 	"So you like green more than blue now?"
      // In this example, green is the new value and blue is the old value.
      // Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
      //document.getElementsByTagName('colors').addEventListener('click', favoriteColor);
      //let colors = document.getElementsClassName('colors');
      let favoriteColor;
      colors = document.getElementsByName("favoriteColor");
      for (let i = 0; i < colors.length; i++){
          colors[i].addEventListener("click",() => {
                      if (favoriteColor && favoriteColor !== colors[i].value){
                          alert(`So you like ${colors[i].value} more than ${favoriteColor} now?`);
                      }
                      favoriteColor = colors[i].value;
                  }
          );
      }
  
      // 9. Show/Hide Event
      // NOTE: Write unobtrusive Javascript
      // When user hovers over an employees name:
      // 	Hide the name if shown.
      // 	Show the name if hidden.
      //document.getElementsByClassName("empName").addEventListener("mouseover", mouseHover);
      function hideNames() {
        let names = document.getElementsByClassName('empName');
        for (let i = 0; i < names.length; i++) {
            names[i].addEventListener('mouseover', () => {

            if (names[i].style.opacity == 100) {
                names[i].style.opacity = 0;
            }
            else {
                names[i].style.opacity = 100;
            }
            })
        }
      }

  
      // 10. Current Time
      // Regarding this element:
      // 	<h5 id="currentTime"></h5>
      // Show the current time in this element in this format: 9:05:23 AM
      // The time should be accurate to the second without having to reload the page.
      setInterval(function(){
        let time = document.getElementById("currentTime");
        let date = new Date;
        let s = date.getSeconds();
        let m = date.getMinutes();
        let h = date.getHours();
    
        if (h > 12) {
            time.innerText = `${h%12}:${m}:${s} PM`;
        }
        else {
            time.innerText = `${h%12}:${m}:${s} AM`;
        }
      }, 1000);
  
      // 11. Delay
      // Regarding this element:
      // 	<p id="helloWorld">Hello, World!</p>
      // Three seconds after a user clicks on this element, change the text to a random color.
      //document.getElementId("helloWorld").addEventListener("click", function () {
       // document.getElementId("helloWorld").style.color = randomColors();
      //});

    function delayColor() {
        let message = document.getElementById("helloWorld");
        setTimeout(()=> {
            message.style.color = "#"+((1<<24)*Math.random()|0).toString(16);
        }, 3000);
    }
  
      // 12. Walk the DOM
      // Define function walkTheDOM(node, func)
      // This function should traverse every node in the DOM. Use recursion.
      // On each node, call func(node).
    function walkTheDOM(node,func) {
	    let children = node.childNodes;
	    for(let i = 0; i < children.length; i++) {	
		    func(children[i]);
	    }
	    func(node);
    }