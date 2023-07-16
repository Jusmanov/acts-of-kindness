const quotes = [
  "Smile at someone.",
  "Hold the door open for someone.",
  "Offer a compliment to someone.",
  "Listen actively to someone without interrupting.",
  "Help a stranger with directions.",
  "Donate unused items to a local charity.",
  "Leave a kind note for someone.",
  "Offer to help a coworker with a task.",
  "Pay for the coffee or meal of the person behind you in line.",
  "Call or text a friend to check how they're doing.",
  "Offer to babysit or pet sit for a friend or neighbor.",
  "Share your umbrella with someone on a rainy day.",
  "Let someone go ahead of you in line.",
  "Volunteer at a local shelter or community organization.",
  "Help a neighbor with their groceries.",
  "Send a handwritten thank-you note to someone who has helped you.",
  "Offer to walk a neighbor's dog.",
  "Plant a tree or flowers in a public space.",
  "Donate blood to a local blood bank.",
  "Offer to tutor or mentor someone in need.",
  "Leave positive reviews for local businesses.",
  "Offer to carpool with a coworker or friend.",
  "Clean up litter in your neighborhood or a public park.",
  "Cook or bake something for a friend or neighbor.",
  "Give up your seat on public transportation for someone in need.",
  "Offer to help an elderly person with their errands or chores.",
  "Share inspirational or uplifting quotes on social media.",
  "Help someone carry heavy bags or luggage.",
  "Offer to do a household chore for a family member.",
  "Participate in a charity run or walk to raise funds for a good cause.",
  "Donate books to a local library or school.",
  "Offer to teach someone a new skill or hobby.",
  "Share your knowledge or expertise with others.",
  "Be patient and understanding with others, even in challenging situations.",
  "Practice self-kindness by taking care of your own well-being."
];

const generateButton = document.querySelector(".generate-button");
const mainSection = document.querySelector(".main-section");
let currentQuoteElement = null;

generateButton.addEventListener("click", () => {
  if (currentQuoteElement) {
    mainSection.removeChild(currentQuoteElement);
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  const quoteElement = document.createElement("p");
  quoteElement.style.fontFamily = "sans-serif";
  quoteElement.style.fontWeight = "bold";
  quoteElement.style.fontSize = "24px";
  quoteElement.textContent = randomQuote;

  mainSection.insertBefore(quoteElement, generateButton);
  currentQuoteElement = quoteElement;

  // Add squiggly animated underline effect
  const underlineElement = document.createElement("div");
  underlineElement.classList.add("underline-effect");
  quoteElement.appendChild(underlineElement);

  // Scroll to the newly added quote
  quoteElement.scrollIntoView({ behavior: "smooth", block: "start" });

  // Update the font size of the supporting text
  const supportingText = document.querySelector(".supporting-text");
  supportingText.style.fontSize = "12px";
});
