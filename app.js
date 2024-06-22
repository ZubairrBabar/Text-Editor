var bold = document.getElementById("Bold")
var italic = document.getElementById("Italic")
var underline = document.getElementById("Underline")
var color = document.getElementById("color")
var text = document.getElementById("text")
var fontSize = document.getElementById("fontSize")
var font_Family = document.getElementById("fontFamily")


bold.addEventListener("click", function () {
   
    if (text.style.fontWeight === "bold") {
        text.style.fontWeight = "normal"
    }else{

        text.style.fontWeight = "bold"

    }
})

italic.addEventListener("click", function () {
    if(text.style.fontStyle === "italic"){

        text.style.fontStyle =  "normal"

    }else{
        text.style.fontStyle = "italic"
    }
    
})


underline.addEventListener("click", function () {
    if(text.style.textDecoration === "underline"){

        text.style.textDecoration =  "none"

    }else{
        text.style.textDecoration = "underline"
    }
    
})


color.addEventListener("input", function () {
    text.style.color = color.value
})


fontSize.addEventListener("change" , function () {
    console.log(this.value);
  if (this.value === 'Heading') {
    text.style.fontSize = "80px"
  } 
  if (this.value === 'Sub Heading') {
    text.style.fontSize = "60px"
  } 
  if (this.value === 'Normal') {
    text.style.fontSize = "40px"
  } 

 
})

font_Family.addEventListener("change", function () {
    
 
    if(this.value === 'Lucida Sans'){
        text.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif, 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif "
    }
   
    if(this.value === 'Gill Sans'){
        text.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
    }
    if(this.value === 'Cambria'){
        text.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
    }
    if(this.value === 'Time New Roman'){
        text.style.fontFamily = "'Times New Roman', Times, serif"
    }
   
    if(this.value === 'Cursive'){
        text.style.fontFamily = "cursive"
    }
    if(this.value === 'Courier New'){
        text.style.fontFamily = " 'Courier New', Courier, monospace"
    }
})

