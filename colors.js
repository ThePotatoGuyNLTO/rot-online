const colorMap = {"fanum": "red", "taper": "red", "bye": "red","sigma":"cyan","nerd":"red","fade":"cyan","input":"yellow"};
let textArea = document.getElementById("code");
let customArea = document.querySelector(".custom-area");
let backdrop = document.querySelector(".backdrop");

// Event listeners.

customArea.innerHTML = applyColors(textArea.value);

textArea.addEventListener("input", function()
{
    customArea.innerHTML = applyColors(textArea.value);
});

textArea.addEventListener("scroll", function()
{
    backdrop.scrollTop = textArea.scrollTop;
});

function applyColors(text)
{
    let re = new RegExp(Object.keys(colorMap).join("|"), "gi");

    return text.replace(re, function(m)
    {
        let c = colorMap[m.toLowerCase()];
        return `<spam style="color:${c}">${m}</spam>`;
    });
}