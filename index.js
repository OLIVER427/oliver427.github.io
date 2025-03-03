let prevCommand
document.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        prevCommand = document.getElementById("input").innerHTML
        document.getElementById("outputCon").innerHTML += `<div id='outputIn'><p id="dir">usr@website <span>$</span> </p>
        <div id="output" contenteditable="false" spellcheck="false">`+ prevCommand +`</div></div>`

        if (prevCommand == "help") {
            document.getElementById("outputCon").innerHTML += `
<pre>
To access my other projects, use " [PLACEHOLDER] "
</pre>`
        }else if (prevCommand == "" || prevCommand === " ") {

        } else {
            document.getElementById("outputCon").innerHTML += `
<pre>
`+window.location.pathname+`: `+ prevCommand +`: command not found
</pre>`
        }

        document.getElementById("input").innerHTML = ""
        setTimeout(() => {
                    document.getElementById("input").innerHTML = ""
        }, 1);

    }
})