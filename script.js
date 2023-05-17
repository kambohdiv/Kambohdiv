
// links 
//https://ahkamboh.github.io/Portfolio/
//https://ahkamboh.github.com/@ahkamboh


// left right align button formations
let bold = document.querySelectorAll(".font button")[0];
let italic = document.querySelectorAll(".font button")[1];
let underline = document.querySelectorAll(".font button")[2];
let alignLeft = document.querySelectorAll(".align button")[0];
let alignCenter = document.querySelectorAll(".align button")[1];
let alignRight = document.querySelectorAll(".align button")[2];
let alignJustify = document.querySelectorAll(".align button")[3];
let artBoard = document.querySelector(".artboard");
let bullet = document.getElementById("bullet");
// bold formation
bold.addEventListener("click", function () {
  artBoard.classList.toggle("bold");
  bold.classList.toggle("b");
});
// italic formation
italic.addEventListener("click", function () {
  artBoard.classList.toggle("italic");
  italic.classList.toggle("i");
});
// underline formation
underline.addEventListener("click", function () {
  artBoard.classList.toggle("underline");
  underline.classList.toggle("u");
});
// alignLeft formation
alignLeft.addEventListener("click", function () {
  artBoard.classList.add("alignLeft");
  alignLeft.classList.add("l");
  artBoard.classList.remove("alignCenter");
  alignCenter.classList.remove("c");
  artBoard.classList.remove("alignRight");
  alignRight.classList.remove("r");
  artBoard.classList.remove("alignJustify");
  alignJustify.classList.remove("j");
});
// alignCenter formation
alignCenter.addEventListener("click", function () {
  artBoard.classList.remove("alignLeft");
  alignLeft.classList.remove("l");
  artBoard.classList.add("alignCenter");
  alignCenter.classList.add("c");
  artBoard.classList.remove("alignRight");
  alignRight.classList.remove("r");
  artBoard.classList.remove("alignJustify");
  alignJustify.classList.remove("j");
});
// alignRight formation
alignRight.addEventListener("click", function () {
  artBoard.classList.remove("alignLeft");
  alignLeft.classList.remove("l");
  artBoard.classList.remove("alignCenter");
  alignCenter.classList.remove("c");
  artBoard.classList.add("alignRight");
  alignRight.classList.add("r");
  artBoard.classList.remove("alignJustify");
  alignJustify.classList.remove("j");
});
// alignJustify formation
alignJustify.addEventListener("click", function () {
  artBoard.classList.remove("alignLeft");
  alignLeft.classList.remove("l");
  artBoard.classList.remove("alignCenter");
  alignCenter.classList.remove("c");
  artBoard.classList.remove("alignRight");
  alignRight.classList.remove("r");
  artBoard.classList.add("alignJustify");
  alignJustify.classList.add("j");
});
// Font change
 changeFont = (font) => {
  document.getElementById("font").style.fontFamily = font.value;
}
// Text Formation change
TextTransform = (textTransform)=> {
  document.getElementById("font").style.textTransform = textTransform.value;
}
// color change 
changecolor= () =>{
  let input = document.getElementById("inputColor").value;
  let artBoardtextcolor = document.querySelector(".artboard");
  artBoardtextcolor.style.color = input;
}

// file save formation
let textarea = document.querySelector(".artboard");
let filenameInput = document.querySelector(".file-name input");
let selectMenu = document.querySelector(".save-as select");
let btn = document.querySelector(".btn");

//on user selected file format
selectMenu.addEventListener("change", () => {
  //getting user selected format
  let selectedFormat = selectMenu.options[selectMenu.selectedIndex].text;

  //chanGing button text accorind to selected option
  btn.innerText = `Save as ${selectedFormat.split(" ")[0]} file`;
});

//on button click
btn.addEventListener("click", () => {
  //creating new blob with textarea value and selected file format
  let blob = new Blob([textarea.value], { type: selectMenu.value });

  //creating temporary url for the blob
  let fileUrl = URL.createObjectURL(blob);

  //creating new a tag
  let link = document.createElement("a");

  //passing file name input value as download value for the link
  link.download = filenameInput.value;

  //passing temporary url to link
  link.href = fileUrl;

  //on link click, file will be downloaded
  link.click();
});
//  speak to text 
runSpeechRecog = () => {
  let action = document.querySelector("textarea");
  action.innerText = "Loading text...";
  let recognization = new webkitSpeechRecognition();
  recognization.onresult = (e) => {
    let transcript = e.results[0][0].transcript;
    action.innerText = transcript;
  }
  recognization.start();
}
