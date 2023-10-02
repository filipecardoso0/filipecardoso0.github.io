const inputfield = document.getElementById("consoletext")

const availablecommands = new Array("help", "about", "projects", "personalprojects", "clear");

inputfield.addEventListener("keyup", function(event) {

  if (event.keyCode === 13) {

    const mainsection = document.getElementById("consoleoutput")
    const activeline = document.getElementById("commandline")

    let foundcommand = false

    //Verifies if command exists
    for(availablecommand of availablecommands){
      if(availablecommand === event.target.value.toString())
          foundcommand = true
      else 
        continue
    }

    //Draws Elmements into WebPage using JS DOM
    if(!foundcommand){

      outputConsoleLine()

      //Output Text
      const p = document.createElement('p')
      p.innerHTML = "Invalid Command, please write 'help' in order to find the list of available commands."
      p.classList.add("text-white")
      const newsec = document.createElement('section')
      newsec.appendChild(p)

      mainsection.appendChild(newsec)

    }
    else{

      if(event.target.value.toString() === "about"){

        outputConsoleLine()

        const h1 = document.createElement('h1')
        h1.innerHTML = "About Filipe Cardoso"
        h1.classList.add('text-center', 'mb-2', 'text-2xl', 'my-8') 

        const ul = document.createElement('ul')
        ul.classList.add('list-disc', 'text-justify', 'space-y-4')

        const p = document.createElement('p')
        p.classList.add('text-justify')

        p.innerHTML = "Hello, I'm Filipe Cardoso, a <span class='text-red-500'>video games enthusiast</span> and <span class='text-red-500'>aspiring software developer</span>. <br> I'm an <span class='text-red-500'>Informatics and Computer Engineering Bsc third year student @ FEUP</span>, who is currently looking forward to learning <span class='text-red-500'>Unity</span> and/or <span class='text-red-500'>React</span>. <br> I am thrilled about every aspect of <span class='text-red-500'>software development</span>, either developing on a lower level by working with <span class='text-red-500'>C/C++</span> or working on an upper level by working with <span class='text-red-500'>Java Threads</span> or developing <span class='text-red-500'>Web Applications</span>. <br>I love to develop game related contents as a hobby. <br> Finally, I am looking forward to <span class='text-red-500'>developing solutions on a real world scenario in order to acquire experience and define what technologies I like to work with the most</span>. <br> Below, you can find a list of the technologies that I have previously worked with:"
        
        const l1 = document.createElement('li')
        const l2 = document.createElement('li') 
        const l3 = document.createElement('li')
        const l4 = document.createElement('li')
        const l5 = document.createElement('li')
        const l6 = document.createElement('li')

        l1.innerHTML = "I have acquired experience programming in: <span class='text-red-500'>Visual Basic, C, C++, Java, Haskell, Prolog, HTML5, CSS(Tailwind & Bootstrap Frameworks), Java, Javascript(Vanilla), Flutter, Php(Vanilla & Laravel), SQLite, ProsgreSQL, WebGL</span>."
        l2.innerHTML = "I have also acquired a little knowledge in <span class='text-red-500'>Test Driven Development</span> in the unit testing area using <span class='text-red-500'>JUnit</span> and <span class='text-red-500'>Spock.</span>" 
        l3.innerHTML = "I have learned several design patterns, being <span class='text-red-500'>State, Singletton and MVC</span> the ones that I am familiar with the most."
        l4.innerHTML = "Very familiar with the use of <span class='text-red-500'>GIT</span> (used it very wisely throughout the whole degree course)."
        l5.innerHTML = "Used <span class='text-red-500'>Gradle and Docker</span> once each in the course."
        l6.innerHTML = "Familiar with the concepts of <span class='text-red-500'>UI, UX, Agile Software development</span>."
      

        ul.appendChild(l1)
        ul.appendChild(l2)
        ul.appendChild(l3)
        ul.appendChild(l4)
        ul.appendChild(l5)
        ul.appendChild(l6)

        let aboutsec = document.createElement('section')
        aboutsec.classList.add('text-white', 'space-y-2', 'text-lg')
        aboutsec.appendChild(h1)
        aboutsec.appendChild(p)
        aboutsec.appendChild(ul)

        mainsection.appendChild(aboutsec)

      } else if (event.target.value.toString() === "clear"){
        
        document.getElementById("consoleoutput").innerHTML = ""

      } else if (event.target.value.toString() === "help") { 

        outputConsoleLine()
        
        const welcomep = document.createElement('p')
        welcomep.innerHTML = "Welcome! Here is the list of all available commands:"
        welcomep.classList.add('text-white', 'text-lg')
        

        const commands = document.createElement('section')
        commands.classList.add('text-white', 'md:space-y-2', 'space-y-8', 'text-lg')

        const article1 = document.createElement('article')
        article1.classList.add('flex', 'flex-col', 'md:flex-row', 'justify-between')
        const article1h2 = document.createElement('h2')
        article1h2.classList.add('text-red-500')
        article1h2.innerHTML = "help"
        const article1p = document.createElement('p')
        article1p.innerHTML = "- Need Help? Find the full list of commands available"
        article1.appendChild(article1h2)
        article1.appendChild(article1p)

        const article2 = document.createElement('article')
        article2.classList.add('flex', 'flex-col', 'md:flex-row', 'justify-between')
        const article2h2 = document.createElement('h2')
        article2h2.classList.add('text-red-500')
        article2h2.innerHTML = "about"
        const article2p = document.createElement('p')
        article2p.innerHTML = "- A Section about Filipe Cardoso"
        article2.appendChild(article2h2)
        article2.appendChild(article2p)

        const article3 = document.createElement('article')
        article3.classList.add('flex', 'flex-col', 'md:flex-row', 'justify-between')
        const article3h2 = document.createElement('h2')
        article3h2.classList.add('text-red-500')
        article3h2.innerHTML = "projects"
        const article3p = document.createElement('p')
        article3p.innerHTML = "- Filipe Cardoso's Projects done in a professional context"
        article3.appendChild(article3h2)
        article3.appendChild(article3p)

        const article4 = document.createElement('article')
        article4.classList.add('flex', 'flex-col', 'md:flex-row', 'justify-between')
        const article4h2 = document.createElement('h2')
        article4h2.classList.add('text-red-500')
        article4h2.innerHTML = "personalprojects"
        const article4p = document.createElement('p')
        article4p.innerHTML = "- Filipe Cardoso's Personal Projects"
        article4.appendChild(article4h2)
        article4.appendChild(article4p)

        const article5 = document.createElement('article')
        article5.classList.add('flex', 'flex-col', 'md:flex-row', 'justify-between')
        const article5h2 = document.createElement('h2')
        article5h2.classList.add('text-red-500')
        article5h2.innerHTML = "clear"
        const article5p = document.createElement('p')
        article5p.innerHTML = "- Clear console GUI"
        article5.appendChild(article5h2)
        article5.appendChild(article5p)

        commands.appendChild(article1)
        commands.appendChild(article2)
        commands.appendChild(article3)
        commands.appendChild(article4)
        commands.appendChild(article5)

        const helpsec = document.createElement('section')
        helpsec.classList.add('my-4', 'space-y-4')
        helpsec.appendChild(welcomep)
        helpsec.appendChild(commands)

        mainsection.appendChild(helpsec)

      } else if (event.target.value.toString() === "personalprojects"){

        outputConsoleLine()

        const h1 = document.createElement("h1")
        h1.innerHTML = "Win Fast VPN"
        h1.classList.add('text-center', 'mb-2', 'text-2xl', 'my-8')

        const article = document.createElement("article")

        const p1 = document.createElement("p")
        p1.classList.add('text-justify')
        p1.innerHTML = "WinFastVPN was a VPN service developed and merchandised with the purpose of ease the gameplay experience on Call of Duty: Warzone 2 by only forwarding a small part of the user's packets, that were responsible for sharing the location data with Call of Duty's game servers. By forwarding those packets to a country far away from the actual player's location Call of Duty's Skilled Based Matchmaking would have trouble finding games, and therefore deactivated causing players to get matched into fairly easy matches."

        const p2 = document.createElement("p")
        p2.classList.add('text-justify')
        p2.innerHTML = "Packets routing was forwared using <span class='text-red-500'>OpenVPN VPN framework.</span>"

        const p3 = document.createElement("p")
        p3.classList.add('text-justify')
        p3.innerHTML = "VPS's providers used: <span class='text-red-500'>DigitalOcean, Vulture, Azure</span>"

        const p4 = document.createElement("p")
        p4.classList.add('text-justify')
        p4.innerHTML = "The website was designed using <span class='text-red-500'>HTLM5, Bootstrap 5 and Laravel, PostgreSQL as well as Vanilla JavaScript.</script>"

        const p5 = document.createElement("p")
        p5.classList.add('text-justify')
        p5.innerHTML = "<span class='text-red-500'>Paypal's SDK</span> was used to handle Credit Card and Paypal Transactions. <span class='text-red-500'>Mailtrap</span> was used for password recovery."

        const p6 = document.createElement("p")
        p6.classList.add('text-justify')
        p6.innerHTML = "Deployment was done using <span class='text-red-500'>Laravel Forge and AWS.</span>"

        const projectvideos = document.createElement("div")
        projectvideos.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'my-4', 'space-y-16')

        const video1a = document.createElement('a')
        video1a.href = "https://gyazo.com/36b1687c35523e28a6d5e61f8c5c41bc"
        const video1vid = document.createElement('video')
        video1vid.autoplay = true
        video1vid.muted = true
        video1vid.playsinline = true
        video1vid.controls = true
        video1vid.width = "800"
        video1src = document.createElement('source')
        video1src.src = "https://i.gyazo.com/36b1687c35523e28a6d5e61f8c5c41bc.mp4"
        video1src.type = "video/mp4"
        video1vid.appendChild(video1src)
        video1a.appendChild(video1vid)
        projectvideos.appendChild(video1a)

        const video2a = document.createElement('a')
        video2a.href = "https://gyazo.com/0d31cadb5be717e055413010d39ef47f"
        const video2vid = document.createElement('video')
        video2vid.autoplay = true
        video2vid.muted = true
        video2vid.playsinline = true
        video2vid.controls = true
        video2vid.width = "800"
        video2src = document.createElement('source')
        video2src.src = "https://i.gyazo.com/0d31cadb5be717e055413010d39ef47f.mp4"
        video2src.type = "video/mp4"
        video2vid.appendChild(video2src)
        video2a.appendChild(video2vid)
        projectvideos.appendChild(video2a)

        const video3a = document.createElement('a')
        video3a.href = "https://gyazo.com/2c21475ee134ca4bc09eb8628ea1ead2"
        const video3vid = document.createElement('video')
        video3vid.autoplay = true
        video3vid.muted = true
        video3vid.playsinline = true
        video3vid.controls = true
        video3vid.width = "800"
        video3src = document.createElement('source')
        video3src.src = "https://i.gyazo.com/2c21475ee134ca4bc09eb8628ea1ead2.mp4"
        video3src.type = "video/mp4"
        video3vid.appendChild(video3src)
        video3a.appendChild(video3vid)
        projectvideos.appendChild(video3a)

        const a = document.createElement("a")
        a.innerHTML = "See Project's Code"
        a.classList.add('text-green-500', 'text-justify', 'hover:underline', 'inline-block', 'hover:duration-300', 'cursor-pointer')
        a.href = "https://github.com/filipecardoso0/WinFastVPN"

        const pprojsec = document.createElement("section")
        article.appendChild(h1)
        article.appendChild(p1)
        article.appendChild(p2)
        article.appendChild(p3)
        article.appendChild(p4)
        article.appendChild(p5)
        article.appendChild(p6)
        article.appendChild(a)
        article.classList.add('text-lg', 'mt-8', 'mb-4', 'space-y-2')
        pprojsec.appendChild(article)
        pprojsec.classList.add("text-white")
        pprojsec.appendChild(projectvideos)

        mainsection.appendChild(pprojsec)
        
      } else if (event.target.value.toString() === "projects"){

        outputConsoleLine()

        projsec = document.createElement('section')
        projsec.classList.add('text-white', 'space-y-2')

        headingsection = document.createElement('section')
        headingsection.classList.add('my-4', 'space-y-4')
        headingsectionh1 = document.createElement('h1')
        headingsectionh1.classList.add('text-center', 'text-4xl')
        headingsectionh1.innerHTML = "Course Projects"
        headingsectionp = document.createElement('p')
        headingsectionp.classList.add('text-center', 'text-3xl')
        headingsectionp.innerHTML = "In this section you can see the list of the most important course jobs that I have done yet, where some of them were actually very challenging"
        headingsection.appendChild(headingsectionh1)
        headingsection.appendChild(headingsectionp)

        projsec.appendChild(headingsection)

        bodysection = document.createElement('section')
        bodysection.classList.add('space-y-16')

        article1 = document.createElement('article')
        article1h2 = document.createElement('h2')
        article1h2.classList.add('text-center', 'mb-2', 'text-2xl', 'my-8')
        article1h2.innerHTML = "CG - 3D Game Using WebGL (3rd Year 2nd Semester)"
        article1p = document.createElement('p')
        article1p.classList.add('text-lg', 'mt-8', 'mb-4')
        article1p.innerHTML = "The purpose of this project was to create a <span class='text-red-500'>3D Game on WebGL</span> where a bird had to place his eggs on a nest. Using the techniques that we had learned throughout the whole course we had to <span class='text-red-500'>build complex shapes using triangles or circles as the base shape</span>. Then, we had to animate the bird wings and movement as well as <span class='text-red-500'>handle its colisions and ambient interactions</span>. <br>This was a fun project, because we applied our knowledge in Computer Graphics that we learned on the course. <br>To sum up, this was not of the most difficult projects yet important, because <span class='text-red-500'>we understood how computer graphics work</span> in a more pratical manner."
        article1a = document.createElement('a')
        article1a.classList.add('text-green-500', 'text-justify', 'hover:underline', 'inline-block', 'hover:duration-300', 'cursor-pointer')
        article1a.innerHTML = "Link to the project Github repository for screenshots, as well as a more detailed description."
        article1a.href = "https://github.com/filipecardoso0/FEUP-CG/tree/master/project"

        article1.appendChild(article1h2)
        article1.appendChild(article1p)
        article1.appendChild(article1a)

        bodysection.appendChild(article1)

        article2 = document.createElement('article')
        article2h2 = document.createElement('h2')
        article2h2.classList.add('text-center', 'mb-2', 'text-2xl', 'my-8')
        article2h2.innerHTML = "LCOM - 2D on Minix OS (2nd Year 2nd Semeste)"
        article2p = document.createElement('p')
        article2p.classList.add('text-lg', 'mt-8')
        article2p.innerHTML = "Troughout the whole course we learned how to implement <span class='text-red-500'>mouse, keyboard, clock and gpu device driver's on the Minix 3 OS</span>. Therefore, on course's final project we had to implement all we had learned by <span class='text-red-500'>creating a simple 2D game on Minix 3</span>. This as <span class='text-red-500'>one of the most complex projects</span> in the course, because we had to create everything from scratch, once <span class='text-red-500'>Minix is a very outdated OS having no graphical interface</span> like we are used with the most up to date operative system. <br>The game created was Snake. <br>Thanks to this project & course we learned how the device drivers work and how to program them, and implementations of <span class='text-red-500'>MVC and State design pattern were made on the C language, using C Structs in order to get 'Vanilla' to work like a Object Oriented Programming language, without actually using Ojective-C.</span>"
        article2div = document.createElement('div')
        article2div.classList.add('flex', 'flex-col', 'space-y-2', 'mt-4')
        article2diva1 = document.createElement('a')
        article2diva1.classList.add('text-green-500', 'text-justify', 'hover:underline', 'inline-block', 'hover:duration-300', 'cursor-pointer')
        article2diva1.href = "https://www.youtube.com/watch?v=JX9leq8zDMg"
        article2diva1.innerHTML = "Project Demo Video"
        article2diva2 = document.createElement('a')
        article2diva2.classList.add('text-green-500', 'text-justify', 'hover:underline', 'inline-block', 'hover:duration-300', 'cursor-pointer')
        article2diva2.href = "https://github.com/filipecardoso0/LCOM/tree/main/proj"
        article2diva2.innerHTML = "Github Repository"

        article2div.appendChild(article2diva1)
        article2div.appendChild(article2diva2)
        article2.appendChild(article2h2)
        article2.appendChild(article2p)
        article2.appendChild(article2div)

        bodysection.appendChild(article2)

        article3 = document.createElement('article')
        article3h2 = document.createElement('h2')
        article3h2.classList.add('text-center', 'mb-2', 'text-2xl', 'my-8')
        article3h2.innerHTML = "CPD - Multiplayer(2+ Players) Text Based Game (like <a href='https://www.kahoot.com'>Kahoot</a>) (3rd Year 2nd Semester)"
        article3p = document.createElement('p')
        article3p.classList.add('text-lg', 'mt-8', 'mb-4')
        article3p.innerHTML = "This project was a project developed using Java Only. Being this purpose a part of the Parallel and Concurrent Programming course we learned how to use <span class='text-red-500'>threads</span> and how <span class='text-red-500'>distributed systems</span> work. Therefore the goal of this project was to code a <span class='text-red-500'>text based game that would support 2+ clients at the same time and 1 game server that would handle all the data</span>. The <span class='text-red-500'>game idea was inspired by <a class='hover:underline, inline-block, hover:duration-300, cursor-pointer' href='https://www.kahoot.com'>Kahoot</a> and the database used was a simple .txt document</span>, once the aim of the project was more arround the distributed and parallel programming using threads and sockets to fullfil those needs. This was one of the projects I had the most fun in the whole Bsc once I learned how real world multiplayer games work."
        article3a = document.createElement('a')
        article3a.classList.add('text-green-500', 'text-justify', 'hover:underline', 'inline-block', 'hover:duration-300', 'cursor-pointer')
        article3a.innerHTML = "Github Repository"
        article3a.href = "https://github.com/filipecardoso0/FEUP-CPD/tree/main/assign2"

        article3.appendChild(article3h2)
        article3.appendChild(article3p)
        article3.appendChild(article3a)

        bodysection.appendChild(article3)

        article4 = document.createElement('article')
        article4h2 = document.createElement('h2')
        article4h2.classList.add('text-center', 'mb-2', 'text-2xl', 'my-8')
        article4h2.innerHTML = "LBAW - Easy Shopping -> Videogames Web Commerce website (like <a href='https://www.eneba.com'>Eneba</a>/<a href='https://www.kinguin.net'>Kinguin</a>) (3rd Year 1st Semester)"
        article4p = document.createElement('p')
        article4p.classList.add('text-lg', 'mt-8', 'mb-4')
        article4p.innerHTML = "Throught this project we used an <span class='text-red-500'>Iteractive Development Process, dividing the whole process in different iterations (9 total)</span>. We haod to <span class='text-red-500'>simulate a real world process, identifying things such as business rules, actors and users stories</span>, as well as doing UML Modeling at several stages of the project. The project it self was an online video game store like <a class='text-red-500' href='https://www.eneba.com'>Eneba</a> or <a class='text-red-500' href='https://www.kinguin.net'>Kinguin</a>. The website needed to have a <span class='text-red-500'>wishslist, shopping cart</span> (that had to work in 2 different manners) and a <span class='text-red-500'>realistic checkout process</span> (we opted to use PayPal). <br>Aditionally the <span class='text-red-500'>shopping cart</span> had to work by <span class='text-red-500'>Cookies</span> (if the user wasn't logged in). If the user was logged in the shopping cart had to be store in the <span class='text-red-500'>database, in order to maintain its state independently of the device/browser the user logged in</span>. In Case the user logged in after adding items to its 'not logged in shopping cart' the items that were not on his logged in shopping cart had to be added. <br>Technologies used were: <span class='text-red-500'>HTML5, TailwindCSS, Laravel, JavaScript, Docker and PostgreSQL</span>. <br>To sum up, this was a complex project that taught us a lot, once we had to work like in a real world scenario, using an iteractive development process and build a realistic E-Commerce website, therefore being careful about factors such as <span class='text-red-500'>SQL injection and Cross Site Scripting</span> while programming."
        article4a = document.createElement('a')
        article4a.classList.add('text-green-500', 'text-justify', 'hover:underline', 'inline-block', 'hover:duration-300', 'cursor-pointer')
        article4a.innerHTML = "Github Repository"
        article4a.href = "https://github.com/filipecardoso0/LBAW-EasyShopping"
        article4div = document.createElement('div')
        article4div.classList.add('flex', 'items-center', 'justify-center', 'my-4')
        article4diva = document.createElement('a')
        article4diva.href = "https://gyazo.com/d9161dd8d8e68ee6dddafd021291f4ac"
        article4video = document.createElement('video')
        article4video.width = "800"
        article4video.autoplay = true
        article4video.muted = true
        article4video.loop = true
        article4video.playsinline = true
        article4video.controls = true
        article4source = document.createElement('source')
        article4source.src = "https://i.gyazo.com/d9161dd8d8e68ee6dddafd021291f4ac.mp4"
        article4source.type = "video/mp4"
        article4video.appendChild(article4source)
        article4diva.appendChild(article4video)
        article4div.appendChild(article4diva)

        article4.appendChild(article4h2)
        article4.appendChild(article4p)
        article4.appendChild(article4a)
        article4.appendChild(article4div)

        bodysection.appendChild(article4)

        article5 = document.createElement('article')
        article5h2 = document.createElement('h2')
        article5h2.classList.add('text-center', 'mb-2', 'text-2xl', 'my-8')
        article5h2.innerHTML = "ES - ClasStats -> Android Mobile App in order to provide a better UX when doing FEUP's Pedagogical Surveys. (2nd Year 2nd Semester)"
        article5p = document.createElement('p')
        article5p.classList.add('text-lg', 'mt-8', 'mb-4')
        article5p.innerHTML = "The purpose of the project was to <span class='text-red-500'>develop a new feature to the <a href='https://play.google.com/store/apps/details?id=pt.up.fe.ni.uni&hl=pt_PT'>UNI</a> app created by <a href='https://www.instagram.com/niaefeup/'NIAEFEUP</a></span>, that would have some utility to the Universidade do Porto Students, and therefore be added to the <a class='text-red-500' href='https://play.google.com/store/apps/details?id=pt.up.fe.ni.uni&hl=pt_PT'>UNI</a> app. <br><span class='text-red-500'>The main idea was to make the Pedagogical Surveys questionaires easier more pratical and easier to answers, once the answer rates of them were very low</span>. Also, students were able to <span class='text-red-500'>rate teachers and classrooms, so teachers could improve/keep going based on the reviews and students choose their schedule based on the highest rated teachers/classrooms, so they wouldn't get frustrated so easily</span>. Once XCode and a Macbook was needed to develop the app for IOS, it was <span class='text-red-500'>developed</span> only on Android users, <span class='text-red-500'>using the Flutter framework</span>. Being this project a part of the Software Engineering course <span class='text-red-500'>we used an interactive development process in order to simulate a real world scenario, started by learning Flutter from scratch</span>. <br>Finally, this was not one of the harder projects I have worked on, but once we had to learn Flutter from scratch and code on a different enviroment (mobile) it was very challenging, yet rewarding. Screenshots of the final product, project vision, etc. can be visualized on the github repository."
        article5a = document.createElement('a')
        article5a.classList.add('text-green-500', 'text-justify', 'hover:underline', 'inline-block', 'hover:duration-300', 'cursor-pointer')
        article5a.innerHTML = "Github Repository"
        article5a.href = "https://github.com/filipecardoso0/ES-ClasStats"
        article5div = document.createElement('div')
        article5div.classList.add('flex', 'items-center', 'justify-center', 'my-4')
        article5img = document.createElement('img')
        article5img.src = "https://user-images.githubusercontent.com/57409348/162583353-7d1131cf-f7b9-45b5-b232-68408e6110c1.png"
        article5img.classList.add('h-96')
        article5img.alt = "Image of the final application"
        article5div.appendChild(article5img)

        article5.appendChild(article5h2)
        article5.appendChild(article5p)
        article5.appendChild(article5a)
        article5.appendChild(article5div)

        bodysection.appendChild(article5)

        projsec.appendChild(bodysection)

        mainsection.appendChild(projsec)

      }
    }

    //Resets Input Field
    event.target.value  = ""

    activeline.scrollIntoView()
  }

});

function outputConsoleLine(){

  const mainsection = document.getElementById("consoleoutput")
  const activeline = document.getElementById("commandline")
  const oldinput = event.target.value.toString()

  const cmdp = document.createElement('p')
  const cmdtxt = document.createElement('p')
  const cmdspan = document.createElement('span')
  cmdp.classList.add("text-blue-500")
  cmdspan.classList.add("text-green-500")
  cmdtxt.classList.add('text-white', 'mx-2')
  cmdp.innerHTML="visitor"
  cmdspan.innerHTML = "@filipecardoso0terminal:~$ "
  cmdtxt.innerHTML = oldinput
  cmdp.appendChild(cmdspan)
  const cmdsec = document.createElement('section')
  cmdsec.classList.add('flex', 'flex-column', 'text-lg', 'my-2', 'text-justify', 'flex-wrap')
  cmdsec.appendChild(cmdp)
  cmdsec.appendChild(cmdtxt)

  mainsection.appendChild(cmdsec)
}

