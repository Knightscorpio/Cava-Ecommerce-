// function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//     const convert = dna.replace("T",  "U");
//     console.log(convert);
//    }

// DNAtoRNA("GCAT")

const names = document.getElementById("name");

const submit = document.getElementById("submit");

const pop = document.getElementById("popup");
const popname = document.getElementById("popname");

submit.addEventListener("click", function(e){
    
    console.log(pop.style)
    const nameValue = names.value;
    // pop.style = "display: block";
    pop.style.setProperty('display', 'block')
    popname.textContent = nameValue 
 });
// function show(){
//     alert("Hello");
// };
