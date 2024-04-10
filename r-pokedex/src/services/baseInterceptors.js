/*
gets a resource = url and a init object for fetch
unwraps the init object where it goes and does the same with the headers
*/

export function requestInterceptor(resource, init) {
  return fetch(resource, {
    ...init,
    headers: {
      "content-type": "application/json",
      ...init.headers,
    },
  });
}
/**
 * If the response is 200 it returns it in json format
 * otherwise creates an error and throws it.
 */
export function responseInterceptor(response) {
  if (response.ok) {
    return response.json();
  } else {
    return response.json().then((data) => {
      let error = new Error(response.status);
      error.response = data;
      error.status = response.status;
      throw error;
    });
  }
}

// let timeBetweenSlides = 5000
// let numCards = 4;
// let currentStep = 2;
// let articles = document.querySelectorAll(".journal-content-article:has(.banner-lateral)");
// let container = document.querySelector(".row .ocultar_titulo");
// container.style.overflow="hidden";

// function initiateSlideCards(articles, num){
//   articles.forEach((article, index)=>{
//     if(index  <= (num -1)){
//       article.classList.add("slide-right-in")
//     }else{
//       article.classList.add("slide-left-out")
//     }
//   });
// }

// function slideCards(articles, step, num){
//   let rStep = step
//   rStep > num ? rStep = 1 : rStep;
//   rStep <= 0 ? rStep = 1 : rStep;

//   articles.forEach((article, index) => {
//     if(index < ((rStep * num) ) && (index >= ((rStep -1) * num))){
//       console.log(index)
//       article.classList.replace("slide-left-out", "slide-right-in");
//     }else{
//       article.classList.replace("slide-right-in", "slide-left-out");
//     }
//   });

//   return rStep + 1;
// }

// initiateSlideCards(articles, numCards)

// let interval = setInterval(()=>{
//   currentStep = slideCards(articles,currentStep,numCards)
//   console.log(`currentStep: ${currentStep}`)
// },timeBetweenSlides)
