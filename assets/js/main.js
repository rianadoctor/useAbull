/* js */


document.getElementById('button').addEventListener('click', function() {
    // Get the body element
    var body = document.body;

    // Change background color
    body.style.backgroundColor = 'lightblue';

    // Hide the h1 element
    document.getElementById('mainHeading').style.display = 'none';

    // Create a new box element
    var newBox = document.createElement('div');
    newBox.style.width = '100px';
    newBox.style.height = '100px';
    newBox.style.backgroundColor = 'red';
    newBox.style.position = 'absolute';
    newBox.style.top = '50%';
    newBox.style.left = '50%';
    newBox.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(newBox);
});