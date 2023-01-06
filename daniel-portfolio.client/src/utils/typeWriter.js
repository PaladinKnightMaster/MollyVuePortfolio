
export default  function typeWriter(element) {
  const text = element.textContent; // The text to be typed
  element.innerHTML = ""; // Clear the element

  // Initialize the variables for the type writer effect
  let i = 0;
  let speed = 50; // The speed of the type writer, in milliseconds

  // Create the type writer effect
  const typeWriterInterval = setInterval(() => {
    // If all the text has been typed, stop the interval
    if (i >= text.length) {
      clearInterval(typeWriterInterval);
    } else {
      // Append the next character to the element
      element.innerHTML += text.charAt(i);
      i++;
    }
  }, speed);
}
