// // Import stylesheets
// import './style.css';


// const form: HTMLFormElement = document.querySelector('defineform');
// const input = document.getElementById('searchInput');
// const btn = document.getElementById('searchBtn');



// form.onsubmit = () => {
//   const formData = new FormData(form);

//   console.log(formData);
//   const text = formData.get('defineword') as string;
//   console.log(text);
//   return false; // prevent reload
// };
document.addEventListener("DOMContentLoaded", function(){
  const searchInput: HTMLInputElement = document.getElementById('searchInput') as HTMLInputElement;
  const searchBtn: HTMLElement = document.getElementById('searchBtn') as HTMLElement;
  const words: HTMLElement = document.getElementById('word') as HTMLElement;
  const definitions: HTMLElement = document.getElementById('definition')as HTMLElement;
  const examples: HTMLElement = document.getElementById('example') as HTMLElement;
  const synonym: HTMLElement = document.getElementById('synonyms')as HTMLElement;

  const dictionary = async (word: string) => {
      try {
          const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
          const data = await response.json();
          words.textContent = data[0].word;
          const definition = data[0].meanings[0].definitions[0].definition;
          definitions.textContent = definition;
          if (data[0].meanings[0].definitions[1] && data[0].meanings[0].definitions[1].example) {
              examples.textContent = data[0].meanings[0].definitions[1].example;
          } else {
              if (data[0].meanings[0].definitions[0].example) {
                  examples.textContent = data[0].meanings[0].definitions[0].example;
              } else {
                  examples.textContent = "No example found.";
              }
          }
          const synonyms = data[0].meanings[0].synonyms;
          synonym.textContent = synonyms.join(', ');
          console.log(data);
      } catch (error) {
          console.error(error);
      }
  };
  
  searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      dictionary((searchInput as HTMLInputElement).value);
  });
});
