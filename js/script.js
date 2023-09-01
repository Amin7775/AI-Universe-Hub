const loadData = async () => {
  // Fetch data from the API
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);

  const data = await res.json();

  const details = data.data.tools;

  console.log(typeof details);

  // Call your function to display the data
  displayCards(details);
  return details;
};

loadData();
const displayCards = (details) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.textContent = "";

  details.forEach((AI) => {
    const card = document.createElement("div");
    card.classList = `card w-80 lg:w-88 bg-base-100 border-2 border-gray-200 p-5 mx-auto`;

    card.innerHTML = `
        <figure class="">
          <img class="h-[190px]" src="${AI.image}" alt="Image Not Found" class="rounded-xl" />
        </figure>
        <div class="mt-4">
        <h1 class="text-xl font-semibold">Features</h1>
        <p class="count-track text-gray-500">1. ${AI.features[0]}</p>
        <p class="count-track text-gray-500">1. ${AI.features[1]}</p>
        <p class="count-track text-gray-500 pb-2">1. ${AI.features[2]}</p>
        <hr>
        <h1 class="text-xl font-semibold mt-2">Features</h1>
        <p class="count-track text-gray-500">Published in : ${AI.published_in}</p>
        </div>
      `;
    cardContainer.appendChild(card);
  });
};

const sortBtn = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);

  const data = await res.json();

  const details = data.data.tools;
  console.log(details);

  details.sort((a, b) => {
    let DateA = new Date(a.published_in);
    let DateB = new Date(b.published_in);

    // return DateB - DateA;
    return DateA - DateB;
  });

  // Call the displayCards function to update the displayed content with the sorted data
  displayCards(details);
};
