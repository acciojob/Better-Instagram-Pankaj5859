//your code here
// Variables to store the dragged element
let draggedElement = null;

// Add event listeners to all draggable items
const draggables = document.querySelectorAll('.draggable');
draggables.forEach((draggable) => {
  // When dragging starts
  draggable.addEventListener('dragstart', function (e) {
    draggedElement = this; // Store the currently dragged element
    setTimeout(() => this.classList.add('hidden'), 0); // Hide the dragged element briefly
  });

  // When dragging ends
  draggable.addEventListener('dragend', function () {
    this.classList.remove('hidden'); // Show the dragged element again
    draggedElement = null; // Clear the stored dragged element
  });

  // Prevent default behavior for dragover
  draggable.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  // When another element is dragged over this element
  draggable.addEventListener('dragenter', function (e) {
    e.preventDefault(); // Allow drop by preventing default
  });

  // When dropping on another element
  draggable.addEventListener('drop', function () {
    if (draggedElement && draggedElement !== this) {
      // Swap the background images between the two elements
      const tempBackground = this.style.backgroundImage;
      this.style.backgroundImage = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = tempBackground;
    }
  });
});
