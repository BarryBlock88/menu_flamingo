// Function to filter menu items based on category
function filterMenu(category) {
    var items = document.querySelectorAll('.menu-item');
    items.forEach(function(item) {
        if (item.id === category || category === 'all') {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
