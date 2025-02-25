document.addEventListener("DOMContentLoaded", () => {
  const filterGame = document.getElementById("game-filter");
  const games = document.querySelectorAll("figure");

  const homePageHidden = () => {
    games.forEach(game => {
      const items = game.querySelectorAll(".genre, .price, .rating");
      items.forEach((item) => {
        item.style.display = "none";
      });
    });
  };
  homePageHidden();
  
  filterGame.addEventListener("change", (event) => {
    const selectedOption = event.target.value;

    games.forEach(game => {
      const gameGenre = game.getAttribute("data-genre");
      const gameRating = game.getAttribute("data-rating");
      const genre = game.querySelector(".genre");
      const price = game.querySelector(".price");
      const rating = game.querySelector(".rating");

      game.style.display = "none";
      genre.style.display = "none";
      price.style.display = "none";
      rating.style.display = "none";

      if (selectedOption === "all") {
        game.style.display = "block";
      } else if (selectedOption === "price") {
        game.style.display = "block";
        price.style.display = "block";
      } else if (gameGenre === selectedOption) {
        game.style.display = "block";
        genre.style.display = "block";
      } else if (gameRating === selectedOption) {
        game.style.display = "block";
        rating.style.display = "block";
      }
    });
  });
});

