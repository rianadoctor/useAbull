/* js */


document.getElementById('button').addEventListener('click', function() {
    // Get the body element
    var body = document.body;

    // Change background color

    // Hide the h1 element
    document.getElementById('mainHeading').style.display = 'none';

     // Toggle visibility of the image
     document.getElementById('title-image').style.display = "block";
     document.getElementById('button').style.display = "none";





    // Create a new box element
    var newBox = document.createElement('button');
    newBox.style.width = '100px';
    newBox.style.height = '100px';
    newBox.style.backgroundColor = 'white';
    newBox.style.position = 'absolute';
    newBox.style.top = '52%';
    newBox.style.left = '38%';
    newBox.style.opacity= '0%';
    newBox.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(newBox);


    var enterImage = document.getElementById('title-image');

    newBox.addEventListener('mouseover', function() {
        enterImage.src = 'assets/img/enter.png'; 
    });


    newBox.addEventListener('mouseout', function() {
        // Change the src attribute back to the original image
        enterImage.src = 'assets/img/title.png';
    });

    
});