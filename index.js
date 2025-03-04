let prevCommand
document.getElementById("userAgent").innerHTML = navigator.userAgent
let lines

function command(array) { // function that makes the lines go down smoothly
let timer = 25
array.push(" ")
for (let i = 0; i < array.length; i++){
    // console.log("test")
    setTimeout(() => {
        document.getElementById("outputCon").innerHTML += `
            <pre>
`+ array[i] +`</pre>`
    }, i * timer);
    document.getElementById("dir").scrollIntoView({ behavior: "instant", block: "start" });
}
return 1
}


document.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        prevCommand = document.getElementById("input").innerHTML
        document.getElementById("outputCon").innerHTML += `<div id='outputIn'><p id="dir1">usr@website <span>$</span> </p>
        <div id="output" contenteditable="false" spellcheck="false">`+ prevCommand +`</div></div>`

        switch(prevCommand){
            case "help": //help for list of commands
            lines = [
                `learn [project_name]`,
                `   run 'learn list' for list of projects`,
                ` `,
                `theme [theme_name]`,
                `   run 'theme list' for list of color themes`
            ]
            command(lines)
               break;


            case "theme":
            lines = [
                `theme [theme_name]`,
                `   run 'theme list' for list of color themes`
            ]
            command(lines)
               break;
            case "theme list":
            lines = [
                `Possible themes:`,
                `   - dark`,
                `   - light`
            ]
            command(lines)
               break;

            case "theme dark":
            document.getElementById("html").style.filter = ""
            lines = [
                `Theme has been successfully set to 'Dark Mode'`
            ]
            command(lines)
               break;
            case "theme light":
            document.getElementById("html").style.filter = "hue-rotate(90deg) invert(100%) saturate(200%)"
            lines = [
                `Theme has been successfully set to 'Light Mode'`
            ]
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
                    "project names:",
                    "    - gd_levelloader",
                    "    - gd_levelloaderv2",
                    "    - switch-menu-web",
                    "    - terminal-website"
                ]
                command(lines)
                break;
            case "learn gd_levelloader":
                lines = [
                    `"Geometry Dash Level Loader" is a low quality, attempted recreation (by <a href='https://github.com/OLIVER427' target='_0'>OLIVER427</a> and <a href='https://github.com/Blockhead66' target='_0'>Blockhead66</a>) of the game `,
                    `"Geometry Dash", by RobTopGames. This project was started in late 2023, and abandoned soon after beginning. The project`,
                    `was picked up again, and given some new menus before "finishing" the project on December 19th 2024. Geometry Dash`,
                    `Level Loader V2 (which is expected to be a higher quality recreation) went into development shortly after the end of V1's.`,
                    `it is now viewable on Github here: <a href='https://github.com/OLIVER427/GD-LevelLoaderJS' target='_0'>https://github.com/OLIVER427/GD-LevelLoaderJS</a>`,
                ]
                command(lines)
                break;
            case "learn gd_levelloaderv2":
                lines = [
                    ``,
                ]
                command(lines)
                break;
            case "learn switch-menu-web":
                lines = [
                    `Basically, its the Switch menu, but in a web browser.`,
                ]
                command(lines)
                break;
            case "learn terminal-website":
                lines = [
                    `The website you are looking at right now! This website was created as a sort of portfolio as my "Personal Project"`,
                    `for English class. I am still very early into creating this website as I am writing this, but it has been fun so far!`,
                    `It was challenging to make this terminal at all, and I'm surprised I was even able to do it (considering how messy`,
                    `this code is). If you want to see how this was made, its up on Github at <a href='https://github.com/OLIVER427/oliver427.github.io' target='_0'>https://github.com/OLIVER427/oliver427.github.io</a>`
                ]
                command(lines)
                break;        
            



            case "": //nothing here so theres no "command not found" for an empty message
            document.getElementById("dir").scrollIntoView({ behavior: "instant", block: "start" });
               break;

            default:
                if (prevCommand.length > 74) {
                prevCommand = prevCommand.substring(0, 75) + "&#8230 "
                }
                lines = [
                    window.location.pathname+`: `+ prevCommand +`: command not found`
                ]
                command(lines)
            break;
        }


        document.getElementById("input").innerHTML = ""
        setTimeout(() => {
                    document.getElementById("input").innerHTML = ""
        }, 1);

    }
})

