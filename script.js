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

// Function to show/hide information box on hover
function showInfo(itemId, show) {
    var infoBox = document.getElementById(itemId + '-info');
    if (show) {
        infoBox.style.display = 'block';
    } else {
        infoBox.style.display = 'none';
    }
}
