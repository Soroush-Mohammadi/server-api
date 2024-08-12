const fs = require('fs');


// Sample data to be transformed
const categories = require('./categories');

const imageUrls = [
  "https://placehold.co/600x400/blue/white",
  "https://placehold.co/600x400/red/white",
  "https://placehold.co/600x400/white/black",
  "https://placehold.co/600x400/green/white"
];

const sizes = ["sm", "md", "large"];
const colors = ["red", "blue", "green"];

// Helper function to generate unique IDs
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

// Update categories and products with new fields
for (let category of categories) {
  category.id = generateUniqueId();
  for (let product of category.products) {
    product.id = generateUniqueId();
    product.images = imageUrls;
    product.sizes = sizes;
    product.colors = colors;
    product.category = category.category
    if ('imageUrl' in product) {
      delete product.imageUrl;
    }
  }
}

// Save the updated data to a file
const updatedData = `const categories = ${JSON.stringify(categories, null, 2)};`;
fs.writeFile('newCategories.js', updatedData, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File successfully written!');
  }
});
