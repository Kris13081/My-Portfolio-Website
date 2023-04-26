const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions() {
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sections Active Class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id) {
            //resmove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active'); 
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

function sendFormData() {
   // Get form data
  const name = document.querySelector('input[placeholder="YOUR NAME"]').value;
  const email = document.querySelector('input[placeholder="YOUR EMAIL"]').value;
  const subject = document.querySelector('input[placeholder="ENTER SUBJECT"]').value;
  const content = document.querySelector('textarea[placeholder="Message here......"]').value;

  if (!name || !email || !subject || !content) {
    alert("Please fill out all required fields.");
    return;
  }

    const formData = {
      name: name,
      email: email,
      subject: subject,
      content: content,
    };
  
    fetch("http://localhost:8080/api/v1/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
      document.querySelector('input[placeholder="YOUR NAME"]').value = "";
      document.querySelector('input[placeholder="YOUR EMAIL"]').value = "";
      document.querySelector('input[placeholder="ENTER SUBJECT"]').value = "";
      document.querySelector('textarea[placeholder="Message here......"]').value= "";
  }

PageTransitions();