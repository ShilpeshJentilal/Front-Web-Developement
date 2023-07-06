

document.getElementById("logotext").addEventListener("click", gotoHomePage);


function gotoContactMePage() {
    const btnHireMe = document.getElementById("hire-me-btn");
    parent.location = "contactme.html";
}

function gotoHomePage() {
    const btnlogotext = document.getElementById("logotext");
    parent.location = "index.html";
}



if (window.location.pathname === '/index.html') {

    document.getElementById("hire-me-btn").addEventListener("click", gotoContactMePage);
}


// appedning skillsbar


    const skillbar = document.getElementById("skill_bar_list");
    const skillList = [];

    async function addSkill(name, percentage) {
        skillList.push([name.toUpperCase(), percentage])
    }

    //add new skills
    addSkill("html", 90);
    addSkill("css", 90);
    addSkill("javascript", 70);


    for (let skill of skillList) {
        let newBarMargin = document.createElement('div');
        newBarMargin.classList.add('bar-margin');
        let newBarSkillDiv = document.createElement('div');
        newBarSkillDiv.classList.add('bar-' + skill[0].toLowerCase());
        let newDiv = document.createElement('div');
        newDiv.textContent = skill[0];
        let newSpan = document.createElement('span');
        newSpan.textContent = skill[1] + "%";

        newBarSkillDiv.appendChild(newDiv);
        newBarSkillDiv.appendChild(newSpan);
        newBarMargin.appendChild(newBarSkillDiv);
        skillbar.appendChild(newBarMargin);

        const style = document.createElement('style');
        const style2 = document.createElement('style2');


        style.textContent = `
    .skillsbar-container .bar-`+ skill[0].toLowerCase() + `{
        width:`+ newSpan.textContent + `;
        justify-content: space-between;

        display: flex;
        flex-direction: row;
        background-color: orangered;
        font-size: 20px;
    }
`;
        document.head.appendChild(style);

    }

    async function getJSON(url) {
        const response = await fetch(url);
        return response.json()
    }
    async function getUserRepositories(username) {
        return getJSON(`https://api.github.com/users/${username}/repos`);

    }



    async function addProject(x, projectnumber) {
        const t = document.getElementById("pcc");
        let respoName = x.name;
        let pLanguage = x.language;
        let newdiv = document.createElement('div');
        newdiv.classList.add('name-project')
        let imgTag = document.createElement('img');
        imgTag.classList.add('img-card');
        let imgId = Math.floor(Math.random() * 50);
        imgTag.src = "https://picsum.photos/id/" + imgId + "/500/500";
        imgTag.width = "300";
        imgTag.height = "300";
        let ndiv = document.createElement('div');
        ndiv.classList.add("project-text");
        let projecttitle = document.createElement('h2');
        projecttitle.textContent = "Project# " + projectnumber
        projecttitle.classList.add('project-title')
        let htitle = document.createElement('h1');
        htitle.textContent = respoName;
        let slanguage = document.createElement('span');
        slanguage.textContent = pLanguage
        t.appendChild(newdiv)
        newdiv.appendChild(imgTag)
        newdiv.appendChild(ndiv);
        ndiv.appendChild(projecttitle);
        ndiv.appendChild(htitle);
        ndiv.appendChild(slanguage);


    }

    getUserRepositories('ShilpeshJentilal').then(repos => {
        let projectnumber = 0
        repos.forEach(x => {
            projectnumber = projectnumber + 1
            return addProject(x, projectnumber)
        });

    });




    const contactForm = document.getElementById('contact-form');
    const submitButton = document.getElementById('submit-button');
    const myNameInput = contactForm.elements["name"];
    const pMessage = document.getElementById('thankyou_message');
    const m = ", thank you for getting in touch with me. I will try my best to reply as soon as possible! "


    const dialogBox = document.getElementById('dialog-box');
    const closeButton = document.getElementById('close-button');


    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const mainSection = document.querySelector('section');
        const headerSection = document.querySelector('header');
        const footerSection = document.querySelector('footer');
        const nameVal = myNameInput.value;

        pMessage.textContent = nameVal + m;

        mainSection.classList.add('blur');
        headerSection.classList.add('blur');
        footerSection.classList.add('blur');
        dialogBox.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        dialogBox.style.display = 'none';
        pMessage.textContent = "";

        const mainSection = document.querySelector('section');
        const headerSection = document.querySelector('header');
        const footerSection = document.querySelector('footer');
        mainSection.classList.remove('blur');
        headerSection.classList.remove('blur');
        footerSection.classList.remove('blur');

        contactForm.reset();
    });









