let output = ""

let code_as_array = []

let variable_values = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

let change = false

load()

function fanum(input) {

    if (input.includes("'")) {
        let count = (input.match(new RegExp("'", "g")) || []).length;
        console.log(count); 

        if (!(count == 2)) {
            return false
        }
    }

    if (input.includes("'")) {
        let index = 0
        let index_pointer = input.charAt(index)
        while (true) {
            index += 1
            index_pointer = input.charAt(index)
            if (index_pointer == "'") {
                break
            }
        }

        index_pointer = input.charAt(index)
        let message = ""

        while (true) {
            index += 1;
            index_pointer = input.charAt(index)
            if (index_pointer == "'") {
                break
            }
            message = message + index_pointer
        }
        output = message
    } else {
        output = variable_values
        let variable = input.charAt(6).charCodeAt(0)-97
        output = variable_values[variable]
    }
}

function declare(input) {
    if (!(input.includes("input"))) {
    let index = 5
    while (true) {
        index += 1
        if (!(input.charAt(index) == " ")) {
            break
        }
    }
    let variable = input.charAt(index).charCodeAt(0) - 97
    while (true) {
        index += 1
        if (!(input.charAt(index) == " ")) {
            break
        }
    }
    while (true) {
        index += 1
        if ((input.charAt(index) == " ")) {
            break
        }
    }

    let number = ""

    while (true) {
        index += 1
        if (input.charAt(index) == "$") {
            break
        }
        number += input.charAt(index)
    }
    variable_values[variable] = number
    } else {
        let variable = input.charAt(6).charCodeAt()-97
        variable_values[variable] = document.getElementById("input_console").value
        document.getElementById("output").innerText += ">"+document.getElementById("input_console").value + "\n"
    }
}

function nerd_math(input) {
    let index = 0
    let problom = ""

    let a = parseFloat(variable_values[0])
    let b = parseFloat(variable_values[1])
    let c = parseFloat(variable_values[2])
    let d = parseFloat(variable_values[3])
    let e = parseFloat(variable_values[4])
    let f = parseFloat(variable_values[5])
    let g = parseFloat(variable_values[6])
    let h = parseFloat(variable_values[7])
    let i = parseFloat(variable_values[8])
    let j = parseFloat(variable_values[9])
    let k = parseFloat(variable_values[10])
    let l = parseFloat(variable_values[11])
    let m = parseFloat(variable_values[12])
    let n = parseFloat(variable_values[13])
    let o = parseFloat(variable_values[14])
    let p = parseFloat(variable_values[15])
    let q = parseFloat(variable_values[16])
    let r = parseFloat(variable_values[17])
    let s = parseFloat(variable_values[18])
    let t = parseFloat(variable_values[19])
    let u = parseFloat(variable_values[20])
    let v = parseFloat(variable_values[21])
    let w = parseFloat(variable_values[22])
    let x = parseFloat(variable_values[23])
    let y = parseFloat(variable_values[24])
    let z = parseFloat(variable_values[25])

    while (true) {
        index += 1
        if (input.charAt(index) == "'") {
            break
        }
    }
    while (true) {
        index += 1
        if (input.charAt(index) == "'") {
            break
        }
        problom += input.charAt(index)
    }

    index += 2

    variable_values[input.charAt(index).charCodeAt()-97] = parseFloat(eval(problom))
}

function run_code(input) {
    if (input.includes("fanum")) {
        fanum(input)
        document.getElementById("output").innerText += output + "\n"
    } else if (input.includes("taper")) {
        declare(input)
    } else if (input.includes("nerd")) {
        nerd_math(input)
    } else if (input == "bye sigma") {
        cls()
    } else if (input == "tldr") {
        document.getElementById("output").innerText += "\n"
    }
    
}

function previewFile() {
    const content = document.getElementById("code")
    const [file] = document.querySelector("input[type=file]").files;
    const reader = new FileReader();
  
    reader.addEventListener(
      "load",
      () => {
        // this will then display a text file
        content.value = reader.result;
      },
      false,
    );
  
    if (file) {
      reader.readAsText(file);
    }
  }

function interpret() {
    variable_values = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    code_as_array = document.getElementById("code").value.split("\n")
    for (let index = 0;index < code_as_array.length;index ++) {
        run_code(code_as_array[index])
        if (!(document.getElementById.innerText == "")) {
            document.getElementById("code").style.borderStyle = "solid"
        } else {
            document.getElementById("code").style.borderStyle = "none"
        }
    }
}

function cls() {
    document.getElementById("output").innerText = ""
}

function save() {
    localStorage.Project1 = document.getElementById("code").value
    change = false
    document.getElementById("saved?").innerText = "Saved!"
}

function load() {
    document.getElementById("code").value = localStorage.Project1
}

function txt_box_change() {
    document.getElementById("saved?").innerText = "Haven't Saved"
}

function save_as() {
    const file = new Blob([document.getElementById("code").value], { type: "text/plain" });
    const url = window.URL.createObjectURL(file);
    saveFile(url, "FILE.rot");
    window.URL.revokeObjectURL(url);

}

function saveFile(url, filename) {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || "file-name";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }