let prevCommand

document.getElementById("userAgent").innerHTML = navigator.userAgent

document.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        prevCommand = document.getElementById("input").innerHTML
        document.getElementById("outputCon").innerHTML += `<div id='outputIn'><p id="dir">usr@website <span>$</span> </p>
        <div id="output" contenteditable="false" spellcheck="false">`+ prevCommand +`</div></div>`

        switch(prevCommand){
            case "help": //(emailSubject == "Subject1")
            document.getElementById("outputCon").innerHTML += `
            <pre>
To access my other projects, use " [PLACEHOLDER] "
            </pre>`
               break;

            case "": //nothing here so theres no "command not found" for an empty message
               break;

            default:
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