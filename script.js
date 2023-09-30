const products = [
    { name: "Drill", category: "category1", price: 100, image: "item (1).jpg" },
    { name: "Measuring Tape", category: "category2", price: 150, image: "item (2).jpg" },
    { name: "Tool Set", category: "category8", price: 120, image: "item (114).jpg" },
    { name: "Screw Driver Set", category: "category8", price: 100, image: "item (111).jpg" },
    { name: "Study Table", category: "category6", price: 150, image: "item (57).jpg" },
    { name: "Chop Saw", category: "category1", price: 120, image: "item (6).jpg" },
    { name: "Marvel Cutter", category: "category1", price: 100, image: "item (108).jpg" },
    { name: "Auto Air Compressor", category: "category4", price: 120, image: "item (109).jpg" },
    { name: "Shop", category: "category9", price: 100, image: "item (10).jpg" },
    { name: "Wheel Barrow", category: "category6", price: 150, image: "item (11).jpg" },
    { name: "Electric Planner", category: "category10", price: 120, image: "item (106).jpg" },
    { name: "Wheel", category: "category6", price: 220, image: "item (13).jpg" },
    { name: "Aluminium Ladder", category: "category6", price: 220, image: "item (14).jpg" },
    { name: "Air Compressor", category: "category4", price: 220, image: "item (15).jpg" },
    { name: "Mini Compressor", category: "category4", price: 220, image: "item (16).jpg" },
    { name: "items", category: "category9", price: 220, image: "item (17).jpg" },
    { name: "Shop", category: "category9", price: 220, image: "item (18).jpg" },
    { name: "Wrench Box", category: "category8", price: 220, image: "item (19).jpg" },
    { name: "Air Compressor(portable)", category: "category4", price: 220, image: "item (20).jpg" },
    { name: "Cordless Electric Drill", category: "category10", price: 220, image: "item (21).jpg" },
    { name: "Wrench Set", category: "category8", price: 220, image: "item (22).jpg" },
    { name: "Adjustable Wrench", category: "category5", price: 220, image: "item (23).jpg" },
    { name: "Salai Wrench", category: "category5", price: 220, image: "item (24).jpg" },
    { name: "Wire Cutter", category: "category5", price: 220, image: "item (25).jpg" },
    { name: "Harpic", category: "category7", price: 220, image: "item (27).jpg" },
    { name: "Colin", category: "category7", price: 220, image: "item (28).jpg" },
    { name: "Ratchet Wrench", category: "category5", price: 220, image: "item (29).jpg" },
    { name: "Hole Saw Drill Bit Set", category: "category1", price: 220, image: "item (30).jpg" },
    { name: "Mop", category: "category7", price: 220, image: "item (31).jpg" },
    { name: "Angle Grinder", category: "category5", price: 220, image: "item (32).jpg" },
    { name: "Empty Tool Box", category: "category8", price: 220, image: "item (33).jpg" },
    { name: "Marvel Cutter", category: "category5", price: 220, image: "item (35).jpg" },
    { name: "Screw Driver", category: "category5", price: 220, image: "item (36).jpg" },
    { name: "Pruner Shears", category: "category5", price: 220, image: "item (37).jpg" },
    { name: "Life Jacket", category: "category3", price: 220, image: "item (38).jpg" },
    { name: "Blower", category: "category7", price: 220, image: "item (43).jpg" },
    { name: "Traffic Cone", category: "category3", price: 220, image: "item (44).jpg" },
    { name: "Cutting Wheel", category: "category1", price: 220, image: "item (45).jpg" },
    { name: "Impact Drill", category: "category1", price: 220, image: "item (46).jpg" },
    { name: "Grinding Discs", category: "category6", price: 220, image: "item (48).jpg" },
    { name: "Mosquito Killer Racket", category: "category6", price: 220, image: "item (49).jpg" },
    { name: "Ring Spanner set", category: "category5", price: 220, image: "item (50).jpg" },
    { name: "Mini chop Saw", category: "category1", price: 220, image: "item (51).jpg" },
    { name: "Fiber Glass Measuring Tape", category: "category2", price: 220, image: "item (53).jpg" },
    { name: "Polishing Pads", category: "category7", price: 220, image: "item (54).jpg" },
    { name: "Drill bit", category: "category1", price: 220, image: "item (59).jpg" },
    { name: "Compact Bike Pressure Washer", category: "category5", price: 220, image: "item (60).jpg" },
    { name: "Electric Hammer Drill", category: "category10", price: 220, image: "item (62).jpg" },
    { name: "Drill and Saw tools Bundle", category: "category8", price: 220, image: "item (63).jpg" },
    { name: "Measuring Tape Long Length", category: "category2", price: 220, image: "item (64).jpg" },
    { name: "List of item", category: "category9", price: 220, image: "item (65).jpg" },
    { name: "Safety Helmet", category: "category3", price: 220, image: "item (66).jpg" },
    { name: "Arc Welding Machine", category: "category5", price: 220, image: "item (67).jpg" },
    { name: "Drill Bundle", category: "category8", price: 220, image: "item (68).jpg" },
    { name: "Welding Helmet", category: "category3", price: 220, image: "item (70).jpg" },
    { name: "Worker's Gloves", category: "category3", price: 220, image: "item (71).jpg" },
    { name: "Welding Goggles", category: "category3", price: 220, image: "item (73).jpg" },
    { name: "Welding Holder", category: "category3", price: 220, image: "item (74).jpg" },
    { name: "Cut Off Saw", category: "category1", price: 220, image: "item (75).jpg" },
    { name: "Floor Rag", category: "category6", price: 220, image: "item (76).jpg" },
    { name: "Cordless Hammer Drill", category: "category1", price: 220, image: "item (77).jpg" },
    { name: "Gardening Tools", category: "category6", price: 220, image: "item (79).jpg" },
    { name: "Submersible Pump", category: "category5", price: 220, image: "item (80).jpg" },
    { name: "Rotary Hammer", category: "category5", price: 220, image: "item (87).jpg" },
    { name: "Flashing Tape", category: "category5", price: 220, image: "item (92).jpg" },
    { name: "Tool Box", category: "category6", price: 220, image: "item (93).jpg" },
    { name: "Measuring Tape Small Length", category: "category2", price: 220, image: "item (96).jpg" },
    { name: "Circular Saw", category: "category1", price: 220, image: "item (98).jpg" },
    { name: "Garden Pipe", category: "category7", price: 220, image: "item (101).jpg" },
];

const categorySelect = document.getElementById("categorySelect");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const productsContainer = document.querySelector(".products");
const modeToggle = document.getElementById("modeToggle");
const body = document.body;

// Function to toggle between Dark Mode and Light Mode
function toggleMode() {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        modeToggle.textContent = "Dark Mode";
    } else {
        body.classList.add("dark-mode");
        modeToggle.textContent = "Light Mode";
    }

    // Reapply the filter to update the product cards
    filterProducts();

    // Update styles for dark mode
    updateStyles();
}

// Function to update the styles based on the selected mode
function updateStyles() {
    const isDarkMode = body.classList.contains("dark-mode");
    const backgroundColor = isDarkMode ? "#4e4e4e" : "#cccccc";
    const textColor = isDarkMode ? "#fff" : "#000";

    // Update background color and text color
    body.style.backgroundColor = backgroundColor;
    body.style.color = textColor;

    // Update background color for header
    const header = document.querySelector("header");
    header.style.backgroundColor = isDarkMode ? "#333" : "#333";
}

// Function to filter and display products based on the selected category and search query
function filterProducts() {
    const selectedCategory = categorySelect.value;
    const searchQuery = searchInput.value.toLowerCase();

    // Clear the current products in the container
    productsContainer.innerHTML = "";

    // Filter and display products based on the selected category and search query
    products.forEach(product => {
        const productName = product.name.toLowerCase();
        if ((selectedCategory === "all" || product.category === selectedCategory) &&
            (searchQuery === "" || productName.includes(searchQuery))) {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                
            `;
            productsContainer.appendChild(productDiv);
        }
    });
}

// Initialize the styles and filter products based on the current mode, category, and search query
updateStyles();
filterProducts();

// Add an event listener to the category select dropdown
categorySelect.addEventListener("change", () => {
    // Update the styles when the category is changed
    updateStyles();
    // Filter and display products based on the selected category and search query
    filterProducts();
});

// Add an event listener to the search button
searchButton.addEventListener("click", () => {
    // Filter and display products based on the selected category and search query
    filterProducts();
});

// Add an event listener to the search input for real-time search
searchInput.addEventListener("input", () => {
    // Filter and display products based on the selected category and search query
    filterProducts();
});

// Add a click event listener to the mode toggle button
modeToggle.addEventListener("click", toggleMode);

// Add a click event listener to each product card's image
productsContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        const imgSrc = event.target.getAttribute("src");
        displayImageModal(imgSrc);
    }
});
// Function to display the modal with the enlarged image that fits the screen size
// Function to display the modal with the enlarged image
function displayImageModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modalImage.src = imageSrc;

    // Calculate the maximum dimensions to fit the screen size
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    // Calculate the maximum width and height for the enlarged image (e.g., 80% of the screen size)
    const maxWidth = screenWidth * 0.8;
    const maxHeight = screenHeight * 0.8;

    // Set modal dimensions
    modal.style.width = `${maxWidth}px`;
    modal.style.height = `${maxHeight}px`;

    // Set the modal image dimensions
    modalImage.style.maxWidth = `${maxWidth}px`;
    modalImage.style.maxHeight = `${maxHeight}px`;

    // Display the modal
    modal.style.display = "block";
}


// Function to display the modal with the enlarged image
function displayImageModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modalImage.src = imageSrc;
    modal.style.display = "block";
}

// Function to close the modal when the close button is clicked
const modalClose = document.querySelector(".close");
modalClose.addEventListener("click", () => {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
});

// Function to close the modal when clicking outside of the image
window.addEventListener("click", (event) => {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});