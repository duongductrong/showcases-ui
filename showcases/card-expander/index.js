document.addEventListener("DOMContentLoaded", () => {
  // Selectors all card item
  const selectorItems = (callback) =>
    document.querySelectorAll(".flexible-cards__item").forEach(callback);

  // Loop to every card item
  selectorItems((cardItem) => {
    // Listen clicking in card item
    cardItem.addEventListener("click", () => {
      // Remove all current active
      selectorItems((_cardItem) => _cardItem.classList.remove("active"));

      // and add "active" class for current card was clicked
      cardItem.classList.add("active");
    });
  });
});
