
// document.addEventListener("DOMContentLoaded", function(){
//     const searchInput = document.getElementById('searchInput');
//     const searchBtn = document.getElementById('searchBtn');
//     const words = document.getElementById('word');
//     const definitions = document.getElementById('definition');
//     const examples = document.getElementById('example');
//     const synonym = document.getElementById('synonyms');

//     const dictionary = async (word) => {
//         try {
//             const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
//             const data = await response.json();
//             words.textContent = data[0].word;
//             const definition = data[0].meanings[0].definitions[0].definition;
//             // document.getElementById("definition").innerText = definition;
//             definitions.textContent = definition;
//             // const example = data[0].meanings[0].definitions[0].definition[0].example;
//             if (data[0].meanings[0].definitions[1] && data[0].meanings[0].definitions[1].example) {
//                 examples.textContent = data[0].meanings[0].definitions[1].example;
//             } else {
//                 // Check other potential locations for an example
//                 if (data[0].meanings[0].definitions[0].example) {
//                     examples.textContent = data[0].meanings[0].definitions[0].example;
//                 } else {
//                     examples.textContent = "No example found.";
//                 }
//             }
//             const synonyms = data[0].meanings[0].synonyms;
//             synonym.textContent = synonyms.join(', ');
//             console.log(data);

//         } catch (error) {
//             console.error(error);
//         }
//     };
    
//     searchBtn.addEventListener("click", (e) => {
//         e.preventDefault();
//         dictionary(searchInput.value);
//     });
    
// });


