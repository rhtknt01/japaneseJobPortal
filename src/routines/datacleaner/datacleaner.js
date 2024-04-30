
// Function to clean up the text data
function cleanUpText(text) {
    // Replace special characters with HTML entities
    text = text.replace(/▼/g, '&#x25BC;'); // Replace ▼ with its HTML entity
    text = text.replace(/- (\d+,\d+)/g, '- $1'); // Correct the salary format
    // You can add more cleanup operations as needed
  
    return text;
  }
  
  // Function to clean up an array of text data
  function cleanUpData(data) {
    return data.map(entry => {
      // Assuming each entry is an object with a 'text' property containing the text data
      entry.text = cleanUpText(entry.text);
      return entry;
    });
  }
  export {cleanUpData};
  // Example usage with an array of data received from an API