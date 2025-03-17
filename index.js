let prevCommand
let lines
let history = []
let historyNum = 0
let justOpened = true //for things that should only run at the beginning.
let commandRunning = false
let mode
let color = 1
let lineTimer = 25

document.getElementById("input").focus()

setTimeout(() => {
    console.log("Hi there! ignore the 'cant access property innerHTML' errors, those are just gonna have to be there.")
}, 1000);

let startText = [
    "    ",
    "    ",
    "     _____ _     _____ _   _ ___________  ___  _____  ______",
    "    |  _  | |   |_   _| | | |  ___| ___ \\/   |/ __  \\|___  /",
    "    | | | | |     | | | | | | |__ | |_/ / /| |`' / /'   / / ",
    "    | | | | |     | | | | | |  __||    / /_| |  / /    / /  ",
    "    \\ \\_/ / |_____| |_\\ \\_/ / |___| |\\ \\___  |./ /___./ /   ",
    "     \\___/\\_____/\\___/ \\___/\\____/\\_| \\_|  |_/\\_____/\\_/    ",
    "    ",
    "    ",
    "    ",
    `<span id="userAgent"></span>`,
    "Copyright (c) 2025 OLIVER427",
    "    ",
    "Use the 'help' command for info on how to use this.",
    "    ",

]

// function that makes the lines go down smoothly on start of page
for (let i = 0; i < startText.length; i++) {
    setTimeout(() => {
        document.getElementById("outputCon").innerHTML += `
                <pre class='outText'>
`+ startText[i] + `</pre>`
        document.getElementById("userAgent").innerHTML = navigator.userAgent
    }, i * 25);
}

function command(array) { // function that makes the lines go down smoothly

    document.getElementById("input").contentEditable = "false"
    commandRunning = true
    array.push(" ")
    for (let i = 0; i < array.length; i++) {
        // console.log("test")
        setTimeout(() => {
            document.getElementById("outputCon").innerHTML += `
            <pre class='outText'>
`+ array[i] + `</pre>`
            document.getElementById("input").scrollIntoView({ behavior: "instant", block: "start" });

            if (i == array.length - 1) {
                commandRunning = false
                document.getElementById("input").contentEditable = "true"
                document.getElementById("input").focus()
            }
        }, i * lineTimer);
    }
    lineTimer = 25
    return 1
}


document.addEventListener('keydown', (event) => {
    if (event.key == "Enter" && commandRunning == false) {
        if (justOpened === true) {
            justOpened = false
        }
        prevCommand = document.getElementById("input").innerHTML
        document.getElementById("outputCon").innerHTML += `<div id='outputIn'><p id="dir">usr@website <span>$</span> </p>
        <div id="output" contenteditable="false" spellcheck="false">`+ prevCommand + `</div></div>`
        if (prevCommand.replaceAll("&nbsp;", " ").replaceAll("<br>", "").trim() !== "") {
            history.push(prevCommand)
            historyNum = history.length
        }

        switch (prevCommand.replaceAll("&nbsp;", " ").replaceAll("<br>", "").trim()) {
            case "help": //help for list of commands
                lines = [
                    `newgrounds`,
                    `   I put music on Newgrounds sometimes, this links you there.`,
                    ` `,
                    `youtube`,
                    `   I upload content on YouTube a little, this links you to my channel.`,
                    ` `,
                    `history`,
                    `   run 'history display' to display command history`,
                    // `   run 'history clear' to clear command history`,
                    ` `,
                    `learn [project_name/creation_name]`,
                    `   run 'learn list' for list of projects and other things`,
                    ` `,
                    `theme [theme_name]`,
                    `   run 'theme list' for list of color themes`,
                    ` `,
                    //`iamapersonwhocannotfigureouthowtouseaterminalbecauseionlyusewindowspleasehelpme`,
                    //`   um...`
                ]
                command(lines)
                break;

            case "newgrounds":
                lines = [
                    `I usually make chiptune sounding remakes of video game songs, and`,
                    `you can check them out on my Newgrounds page here! <a href="https://oliver427.newgrounds.com/" target='_0'>https://oliver427.newgrounds.com/</a>`,
                ]
                command(lines)
                break;

            case "youtube":
                lines = [
                    `I make videos on YouTube sometimes, mostly about Geometry Dash or Minecraft, but other games and unrelated things as well.`,
                    `I have a lot of fun making those videos, and you can check them out here! <a href="https://www.youtube.com/@OLIVER427" target='_0'>https://www.youtube.com/@OLIVER427</a>`
                ]
                command(lines)
                break;

            case "history":
                lines = [
                    `No parameter specified`,
                    `   run 'history display' to display command history`
                    // `   run 'history clear' to clear command history`,
                ]
                command(lines)
                break;
            case "history display":
                lines = history
                command(lines)
                break;
            case "theme":
                lines = [
                    `No theme specified`,
                    `   run 'theme list' for list of color themes`
                ]
                command(lines)
                break;
            case "theme list":
                lines = [
                    `Possible themes:`,
                    `   - dark`,
                    `   - light`,
                    `   - sepia`,
                ]
                command(lines)
                break;

            case "theme dark":
                document.getElementById("html").style.filter = ""
                lines = [
                    `Theme has been successfully set to 'Dark'`
                ]
                command(lines)
                break;
            case "theme light":
                document.getElementById("html").style.filter = "hue-rotate(90deg) invert(100%) saturate(500%)"
                lines = [
                    `Theme has been successfully set to 'Light'`
                ]
                command(lines)
                break;
            case "theme sepia":
                document.getElementById("html").style.filter = "hue-rotate(90deg) saturate(100%) sepia(2000%)"
                lines = [
                    `Theme has been successfully set to 'Sepia'`
                ]
                command(lines)
                break;
            case "gay":
                lines = [
                    `Theme has been successfully set to 'Super epic rainbow cool awesome theme'`,
                    `[WARNING]: This feature is EXPERIMENTAL and will not persist beyond page reload`,
                    // `<span style="font-size:5.13vw">DEAN, WHYYYYYYYYYYYYYYYYYYYYYYYYYYYYY</span>`
                ]
                document.getElementById("outputCon").style.color = "lime"
                mode = "rainbow"
                command(lines)
                break;
                
            case "learn": // the beginning of the learn commands
                lines = [
                    `No project specified.`,
                    `   run 'learn list' for list of projects`
                ]
                command(lines)
                break;
            case "learn list":
                lines = [
                    "Project names:",
                    "    - levelloader",
                    "    - levelloader2",
                    "    - switchmenu",
                    "    - webterminal",
                ]
                command(lines)
                break;
            case "learn levelloader":
                lines = [
                    `"Geometry Dash Level Loader" is a low quality, attempted recreation (by <a href='https://github.com/OLIVER427' target='_0'>OLIVER427</a> and <a href='https://github.com/Blockhead66' target='_0'>Blockhead66</a>) of the game `,
                    `"Geometry Dash", by RobTopGames. This project was started in late 2023, and abandoned soon after beginning. The project`,
                    `was picked up again, and given some new menus before "finishing" the project on December 19th 2024. Geometry Dash`,
                    `Level Loader V2 (which is expected to be a higher quality recreation) went into development shortly after the end of V1's.`,
                    `it is now viewable on Github here: <a href='https://github.com/OLIVER427/GD-LevelLoaderJS' target='0'>https://github.com/OLIVER427/GD-LevelLoaderJS</a>`,
                ]
                command(lines)
                break;
            case "learn levelloader2":
                lines = [
                    `"Geometry Dash Level Loader V2" is an attempted recreation (by <a href='https://github.com/OLIVER427' target='_0'>OLIVER427</a> and <a href='https://github.com/Blockhead66' target='_0'>Blockhead66</a>) of the game `,
                    `"Geometry Dash", by RobTopGames. I helped start this project in late 2024, and unlike before, it seems like`,
                    `this recreation might not be as inaccurate. So far, my job has been to work on the menu screens, such as the`,
                    `title screen, level select screen, search menu, etc. It probably won't be released for a very long time, but`,
                    `you can watch the tiny little sneak peek video I posted on YouTube: <a href='https://www.youtube.com/watch?v=mVNlV4SU1W4' target='_0'>https://www.youtube.com/watch?v=mVNlV4SU1W4</a>`,
                ]
                command(lines)
                break;
            case "learn switchmenu":
                lines = [
                    `Basically, its the Switch menu, but made for a web browser. All of the images you see in that website`,
                    `(excluding the game cover arts) were recreated by me since none of them are on the internet anywhere.`,
                    `The CSS was probably the hardest part of this for me to do and its probably pretty messy, but you can check`,
                    `out the whole project on Github here: <a href='https://github.com/OLIVER427/Switch-Menu-Web' target='0'>https://github.com/OLIVER427/Switch-Menu-Web</a>`,
                    `I think I need to become better at making things on my own, rather than trying to make accurate recreations of things.`,
                    `Making the recreations is really fun for me, but I think I should start being more creative with my projects.`
                ]
                command(lines)
                break;
            case "learn webterminal":
                lines = [
                    `The website you are looking at right now! This website was created as my "Personal Project"`,
                    `but I'm pretty sure I broke some of the rules in my rubric so that might turn out to be a problem`,
                    `later. One big mistake I made was waiting until the month it was due to start it (I should have started`,
                    `five months before). If you want to see how this was made, its up on Github at <a href='https://github.com/OLIVER427/oliver427.github.io' target='_0'>https://github.com/OLIVER427/oliver427.github.io</a>`
                ]
                command(lines)
                break;

            case "whoami":
                lines = [ //why is this an actual command
                    `Well since I cant tell who you are, I have no idea. your... uhhhh, you? yeah that sounds about right.`,
                    `actually it says that your name is "usr" but that doesnt sound very human to me so idk.`
                ]
                command(lines)
                break;

            case "iamapersonwhocannotfigureouthowtouseaterminalbecauseionlyusewindowspleasehelpme":
                lines = [ // :sob:
                    `uhhh... not sure how to help you there. you just type in the commands and the commands do stuff`
                ]
                command(lines)
                break;

            case "ls":
            case "cd":
                lines = [ // this one is for commands that people know exist, and that I will never add.
                    `The command "` + prevCommand + `" has not been implemented yet.`,
                    //`Thank you for your patience.`
                ]
                command(lines)
                break;
            
            case "": //nothing here so theres no "command not found" for an empty message
                document.getElementById("input").scrollIntoView({ behavior: "instant", block: "start" });
                break;

            default:
                if (prevCommand.length > 74) { // this cuts down the command in the output if its too long 
                    prevCommand = prevCommand.substring(0, 75) + "&#8230 " // " &#8230 " is the unicode thingie for the "…" character since it cant just be typed in
                }
                lines = [
                    window.location.pathname + `: ` + prevCommand + `: command not found`
                ]
                command(lines)
                break;
        }


        document.getElementById("input").innerHTML = ""
        setTimeout(() => {
            document.getElementById("input").innerHTML = ""
        }, 1);

    }

    // the following lines save history
    let justPressedDown = false
    if (event.key === "ArrowUp" && commandRunning == false) {
        event.preventDefault();
        if (justOpened === true && history.length == 0) {
            return;
        } else if (historyNum > 0 && justPressedDown == true) {
            historyNum--
        } else if (historyNum > 0 && justPressedDown == false) {
            historyNum--
        }
        document.getElementById("input").innerHTML = history[historyNum]
        // document.getElementById("input").setSelectionRange(document.getElementById("input").innerHTML.length, document.getElementById("input").innerHTML.length);
        justPressedDown = false
        // console.log(historyNum)
        document.getElementById("input").focus()
        document.execCommand('selectAll', false, null); //execCommand is depricated, but I cant find any other solutions.
        document.getSelection().collapseToEnd();
    }
    if (event.key === "ArrowDown") {
        event.preventDefault();
        if (historyNum < history.length && justPressedDown == false) {
            historyNum++
        } else if (historyNum < history.length - 1 && justPressedDown == true) {
            historyNum++
        }

        if (historyNum === history.length && justPressedDown == false) {
            document.getElementById("input").innerHTML = ""
        } else {
            document.getElementById("input").innerHTML = history[historyNum]
        }
        justPressedDown = true
        // console.log(historyNum)
        document.getElementById("input").focus()
        document.execCommand('selectAll', false, null); //execCommand is depricated, but I cant find any other solutions.
        document.getSelection().collapseToEnd();
    }
})

function animationFrame() { //a loop but cooler

    //dynamic title
    if (document.getElementById("input").innerHTML.replaceAll("&nbsp;", " ").replaceAll("<br>", "").trim().length === 0) {
        document.title = "usr@website $"
    } else {
        document.title = "$ " + document.getElementById("input").innerHTML.replaceAll("&nbsp;", " ").replaceAll("<br>", "").trim()
    }

    if (commandRunning == true) {

    } else {

    }


    if (mode == "rainbow") {
        color += 12
        document.getElementById("html").style.filter = "hue-rotate(" + color + "deg) saturate(20000%) sepia(20%)"
    }
    requestAnimationFrame(animationFrame);
}
animationFrame();