const adjectiveList = [
  "Cloud",
  "Serverless",
  "Secure",
  "Scalable",
  "Modern",
  "Persistent",
  "Analytical",
  "Enterprise",
  "Hybrid",
  "Active",
  "Asynchronous",
  "Eventually-Consistent",
  "Realtime",
  "Data-Driven",
  "Streamlined",
  "Discoverable",
  "Maintainable",
  "Resilient",
  "Conditional",
  "Logical",
  "Minimum Viable",
  "Deployable",
  "Accelerated",
  "Transformational",
  "Monolithic",
  "Multicloud",
  "Advanced",
  "Generative",
  "High-Performance",
  "Globally-Distributed",
  "Binary",
  "Insightful",
  "Non-Relational",
  "Synchronously-Replicated",
  "Multi-Version",
  "Balanced",
  "Unified",
  "Simple",
  "Service-Oriented",
];

const animalList = [
  "Alligator",
  "Anteater",
  "Armadillo",
  "Auroch",
  "Axolotl",
  "Badger",
  "Bat",
  "Bear",
  "Beaver",
  "Buffalo",
  "Camel",
  "Capybara",
  "Chameleon",
  "Cheetah",
  "Chinchilla",
  "Chipmunk",
  "Chupacabra",
  "Cormorant",
  "Coyote",
  "Crow",
  "Dingo",
  "Dinosaur",
  "Dog",
  "Dolphin",
  "Duck",
  "Elephant",
  "Ferret",
  "Fox",
  "Frog",
  "Giraffe",
  "Gopher",
  "Grizzly",
  "Hedgehog",
  "Hippo",
  "Hyena",
  "Ibex",
  "Ifrit",
  "Iguana",
  "Jackal",
  "Kangaroo",
  "Koala",
  "Kraken",
  "Lemur",
  "Leopard",
  "Liger",
  "Lion",
  "Llama",
  "Loris",
  "Manatee",
  "Mink",
  "Monkey",
  "Moose",
  "Narwhal",
  "Nyan Cat",
  "Orangutan",
  "Otter",
  "Panda",
  "Penguin",
  "Platypus",
  "Pumpkin",
  "Python",
  "Quagga",
  "Rabbit",
  "Raccoon",
  "Rhino",
  "Sheep",
  "Shrew",
  "Skunk",
  "Squirrel",
  "Tiger",
  "Turtle",
  "Walrus",
  "Wolf",
  "Wolverine",
  "Wombat",
];

export const generateName = (): string => {
  const randomColor = adjectiveList[Math.floor(Math.random() * adjectiveList.length)];
  const randomAnimal = animalList[Math.floor(Math.random() * animalList.length)];
  return `${randomColor} ${randomAnimal}`
} 