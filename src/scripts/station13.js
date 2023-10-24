const element = document.getElementById("check");
const p_element = document.getElementById("text");
element.addEventListener("change", changeBackgroundColor);

function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  console.log(element.checked);
  if (element.checked) {
    console.log("trueだよん");
    p_element.style.backgroundColor = "red";
  } else {
    p_element.style.backgroundColor = "transparent";
  }
}
