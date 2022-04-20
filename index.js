// var panel1 = document.getElementById("panel-1")
// var panel2 = document.getElementById("panel-2")
// var panel3 = document.getElementById("panel-3")
// var panel4 = document.getElementById("panel-4")
// var panel5 = document.getElementById("panel-5")

// // function selectPanel(panelNo){
// // if (panelNo == 1) {
// //     panel1.classList.add("active")
// // }
// //  else if() {

// // } In order to have better option for multiple if and else if is switch 

// // Removing other active class....instead of writing evrytime
// // var panels = document.getElementsByClassName("panel")-- we can do this 

// function resetActivePanel() {
//     panel1.classList.remove("active")
//     panel2.classList.remove("active")
//     panel3.classList.remove("active")
//     panel4.classList.remove("active")
//     panel5.classList.remove("active")
// }
// function selectPanel(panelNo) {
//     resetActivePanel()
//     switch (panelNo) {

//         case 1: {
//             panel1.classList.add("active")
//             // panel2.classList.remove("active")
//             // panel3.classList.remove("active")
//             // panel4.classList.remove("active")
//             // panel5.classList.remove("active")
//             break//IMP
//         }
//         case 2: {
//             panel2.classList.add("active")
//             // panel1.classList.remove("active")
//             // panel3.classList.remove("active")
//             // panel4.classList.remove("active")
//             // panel5.classList.remove("active")
//             break
//         }
//         case 3: {
//             panel3.classList.add("active")
//             // panel1.classList.remove("active")
//             // panel2.classList.remove("active")
//             // panel4.classList.remove("active")
//             // panel5.classList.remove("active")
//             break
//         }
//         case 4: {
//             panel4.classList.add("active")
//             // panel1.classList.remove("active")
//             // panel2.classList.remove("active")
//             // panel3.classList.remove("active")
//             // panel5.classList.remove("active")
//             break
//         }
//         case 5: {
//             panel5.classList.add("active")
//             // panel1.classList.remove("active")
//             // panel2.classList.remove("active")
//             // panel3.classList.remove("active")
//             // panel4.classList.remove("active")
//             break
//         }

//     }

// }
// 

//Efficient solution
var panel1 = document.getElementById("panel-1")
var panel2 = document.getElementById("panel-2")
var panel3 = document.getElementById("panel-3")
var panel4 = document.getElementById("panel-4")
var panel5 = document.getElementById("panel-5")

function resetActivePanel(){
    panel1.classList.remove("active")
    panel2.classList.remove("active")
    panel3.classList.remove("active")
    panel4.classList.remove("active")
    panel5.classList.remove("active")
}
function selectPanel(panelId){
    resetActivePanel()
    document.getElementById(panelId).classList.add("active")
}

