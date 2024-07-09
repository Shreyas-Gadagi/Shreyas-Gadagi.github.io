const roleElement = document.getElementById('role');
const roles = ["Undergraduate Researcher", "Aspiring Software Engineer"];
let index = 0;

function typeRole() {
    let role = roles[index];
    let letters = role.split('');
    let i = 0;
    
    // Clear previous animation classes
    roleElement.textContent = '';
    roleElement.style.visibility = 'visible';
    roleElement.classList.remove('blink');
    
    // Type out the role
    let typingInterval = setInterval(function() {
        if (i < letters.length) {
            roleElement.textContent += letters[i++];
        } else {
            clearInterval(typingInterval);
            roleElement.classList.add('blink');
            setTimeout(switchRole, 2000); // Blink for 2 seconds
        }
    }, 75); // Typing speed
}

function switchRole() {
    roleElement.style.visibility = 'hidden';
    index = (index + 1) % roles.length;
    setTimeout(typeRole, 500); // Wait for half a second before typing next role
}

// Start the typing animation
document.addEventListener('DOMContentLoaded', function() {
    typeRole();
});


var tablinks = document.querySelectorAll('.tab-links');
var tabcontents = document.querySelectorAll('.tab-contents');

document.addEventListener('DOMContentLoaded', function() {
    const skillBoxes = document.querySelectorAll('.skill-box');
    const categoryButtons = document.querySelectorAll('.category-button');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = button.dataset.category;

            // Show all skill boxes initially
            skillBoxes.forEach(box => {
                box.style.display = 'block';
            });

            // Filter and display only the selected category
            if (category !== 'all') {
                skillBoxes.forEach(box => {
                    if (!box.classList.contains(category)) {
                        box.style.display = 'none';
                    }
                });
            }
        });
    });    
    
});

function filterSkills(category) {
    const buttons = document.querySelectorAll('.button');
    const skillBoxes = document.querySelectorAll('.skill-box');

    buttons.forEach(button => {
        if (button.dataset.category === category) {
            if (button.classList.contains('highlight')) {
                button.classList.remove('highlight');
                skillBoxes.forEach(box => box.classList.remove('filtered-out'));
            } else {
                buttons.forEach(btn => btn.classList.remove('highlight'));
                button.classList.add('highlight');
                skillBoxes.forEach(box => {
                    if (!box.classList.contains(category)) {
                        box.classList.add('filtered-out');
                    } else {
                        box.classList.remove('filtered-out');
                    }
                });
            }
        } else {
            button.classList.remove('highlight');
        }
    });
}
