let prevCommand
document.getElementById("userAgent").innerHTML = navigator.userAgent

document.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        prevCommand = document.getElementById("input").innerHTML
        document.getElementById("outputCon").innerHTML += `<div id='outputIn'><p id="dir">usr@website <span>$</span> </p>
        <div id="output" contenteditable="false" spellcheck="false">`+ prevCommand +`</div></div>`

        switch(prevCommand){
            case "help": //help for list of commands
            document.getElementById("outputCon").innerHTML += `
            <pre>
learn [project_name]
    run 'learn list' for list of projects
            </pre>`
               break;



            case "learn": // the beginning of the learn commands
            document.getElementById("outputCon").innerHTML += `
            <pre>
No project specified.
    run 'learn list' for list of projects
            </pre>`
                break;
            case "learn list":
            document.getElementById("outputCon").innerHTML += `
            <pre>
project names:
    - gd_levelloader
    - gd_levelloaderv2
    - switch-menu-web
    - terminal-website
            </pre>`
                break;
            case "learn gd_levelloader":
                document.getElementById("outputCon").innerHTML += `
                <pre>
"Geometry Dash Level Loader" is a low quality, attempted recreation (by <a href='https://github.com/OLIVER427' target='_0'>OLIVER427</a> and <a href='https://github.com/Blockhead66' target='_0'>Blockhead66</a>) of the game 
"Geometry Dash", by RobTopGames. This project was started in late 2023, and abandoned soon after beginning. The project
was picked up again, and given some new menus before "finishing" the project on December 19th 2024. Geometry Dash
Level Loader V2 (which is expected to be a higher quality recreation) went into development shortly after the end of V1's.
it is now viewable on Github here: <a href='https://github.com/OLIVER427/GD-LevelLoaderJS' target='_0'>https://github.com/OLIVER427/GD-LevelLoaderJS</a>
                </pre>`
                break;
            case "learn gd_levelloaderv2":
                document.getElementById("outputCon").innerHTML += `
                <pre>

                </pre>`
                break;
            case "learn switch-menu-web":
                document.getElementById("outputCon").innerHTML += `
                <pre>
Basically, its the Switch menu, but in a web browser.
                </pre>`
                break;
            case "learn terminal-website":
                document.getElementById("outputCon").innerHTML += `
                <pre>
The website you are looking at right now! This website was created as a sort of portfolio as my "Personal Project"
for English class. I am still very early into creating this website as I am writing this, but it has been fun so far!
It was challenging to make this terminal at all, and I'm surprised I was even able to do it (considering how messy
this code is). If you want to see how this was made, its up on Github at <a href='https://github.com/OLIVER427/oliver427.github.io' target='_0'>https://github.com/OLIVER427/oliver427.github.io</a>
                </pre>`
                break;        
            



            case "": //nothing here so theres no "command not found" for an empty message
               break;

            default:
                if (prevCommand.length > 74) {
                prevCommand = prevCommand.substring(0, 75) + "... "
                }
                document.getElementById("outputCon").innerHTML += `
                <pre>
`+window.location.pathname+`: `+ prevCommand +`: command not found
                </pre>`
            break;
        }


        document.getElementById("input").innerHTML = ""
        setTimeout(() => {
                    document.getElementById("input").innerHTML = ""
        }, 1);

    }
})

