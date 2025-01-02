import RandomController from "./controllers/randomController.js";
import TrendingController from "./controllers/trendingController.js";
import SearchController from "./controllers/searchController.js";

// APP Initialization

const randomController = new RandomController();
const trendingController = new TrendingController();
const searchController = new SearchController();


randomController.execute();
trendingController.execute();

document.querySelector(".navigation").addEventListener("click", function (event) {
    //Select the button that was clicked
    const button = event.target.closest(".navigation__button");
    if (!button) return;
    //Remove the active class from all buttons
    document.querySelectorAll(".navigation__button").forEach(buttom => buttom.classList.remove("navigation__button--active"));
    button.classList.add("navigation__button--active");
    //Get the page number from the button
    const page = button.dataset.page;
    //Scroll to the next page
    document.querySelector(".main__container").style.left = `${-100 * page}vw`;
});
