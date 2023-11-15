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


    //emoji 
    var newImage = document.createElement('img');
    newImage.src = 'assets/img/emoji.png'; 
    newImage.alt = 'Purple Emoji';
    newImage.id = 'emoji';
    newImage.style.width = '300px';
    newImage.style.position = 'absolute';
    newImage.style.top = '60%';
    newImage.style.left = '40%';
    newImage.className = 'title'; 
    document.body.appendChild(newImage);


    var newBox2 = document.createElement('button');
    newBox2.style.width = '80px';
    newBox2.style.height = '40px';
    newBox2.style.backgroundColor = 'white';
    newBox2.style.position = 'absolute';
    newBox2.style.top = '77%';
    newBox2.style.left = '49.5%';
    newBox2.style.opacity= '0%';
    newBox2.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(newBox2);


    var enterImage = document.getElementById('title-image');

    newBox.addEventListener('mouseover', function() {
        enterImage.src = 'assets/img/enter.png'; 
    });


    newBox.addEventListener('mouseout', function() {
        // Change the src attribute back to the original image
        enterImage.src = 'assets/img/title.png';
    });


        // Add event listener for click on the new box
    newBox.addEventListener('click', function () {
            // Change the background color of the website
        document.body.style.backgroundColor = 'mediumpurple'; 
    
            // Remove the images
        document.getElementById('title-image').style.display = 'none';
        document.getElementById('enter-image').style.display = 'none';
        document.getElementById('emoji').style.display = 'none';


        //newspaper
        var newsImage = document.createElement('img');
        newsImage.src = 'assets/img/news.png'; 
        newsImage.alt = 'News Paper';
        newsImage.id = 'news'
        newsImage.style.width = '300px';
        newsImage.style.position = 'absolute';
        newsImage.style.top = '30%';
        newsImage.style.left = '43%';
        newsImage.className = 'news'; 
        newsImage.classList.add('floating-animation');
        document.body.appendChild(newsImage);

        //text below newspaper
        var newsWriting = document.createElement('p');
        newsWriting.textContent = 'You have a simple task. Read the digital newspaper.';
        newsWriting.id = 'news-text'
        newsWriting.style.position = 'absolute';
        newsWriting.style.top = '65%';
        newsWriting.style.left = '52%';
        newsWriting.style.fontSize = '30px';
        newsWriting.style.color = 'white';
        newsWriting.style.transform = 'translateX(-50%)';
        document.body.appendChild(newsWriting);


        setTimeout(function () {
            showCookieConsent();
        }, 1800); 

     });


    
});


function showCookieConsent() {
    var cookieConsent = document.createElement('div');
    cookieConsent.className = 'cookie-consent';
    cookieConsent.innerHTML = 'This website uses cookies. ' +
        '<button onclick="acceptCookies()">Accept</button>' +
        '<button onclick="declineCookies()">Decline</button>';
    document.body.appendChild(cookieConsent);
}


// Function to handle accepting cookies (you can extend this function to set a cookie)
function acceptCookies() {
    document.body.removeChild(document.querySelector('.cookie-consent'));
    document.getElementById('news').style.display = 'none';
    document.getElementById('news-text').style.display = 'none';
  

    document.body.style.backgroundColor = 'mediumslateblue';
    var newsBlur = document.createElement('img');
    newsBlur.src = 'assets/img/blur.png'; 
    newsBlur.alt = 'News Paper Blurred';
    newsBlur.id = 'blur'
    newsBlur.style.width = '600px';
    newsBlur.style.position = 'absolute';
    newsBlur.style.top = '3%';
    newsBlur.style.left = '33%';
    document.body.appendChild(newsBlur); 

    var subscriptionPopUp = document.createElement('div');
    subscriptionPopUp.className = 'subscription-pop-up';
    subscriptionPopUp.innerHTML = '<p>Subscribe to our newsletter:</p>' +
        '<input type="text" id="emailInput" placeholder="Enter your email">' +
        '<button onclick="subscribe()">Subscribe</button>' +
        '<button onclick="closeAndReopenPopUp()">Exit</button>';
    document.body.appendChild(subscriptionPopUp);
}

//cookie counter
let declineCount = 0;

function declineCookies() {
    declineCount++;

    var declineButton = document.querySelector('.cookie-consent button:nth-child(2)'); //selecting second button
    
    if (declineCount === 1) {
        declineButton.textContent = 'Are you sure?';
    } else if (declineCount === 2) {
        declineButton.textContent = 'This wont hurt you I promise';
    } else if (declineCount === 3) {
        // Reload the website after the third decline
        alert('ERROR!');
        location.reload();
    }


}


function subscribe() {
    var emailInput = document.getElementById('emailInput').value;


    // For demonstration purposes, displaying an alert indicating successful subscription
    alert('Thank you for subscribing!');

    // Remove the subscription pop-up
    document.body.removeChild(document.querySelector('.subscription-pop-up'));
}


function closeAndReopenPopUp() {
    var subscriptionPopUp = document.querySelector('.subscription-pop-up');
    subscriptionPopUp.style.display = 'none';

    // Set a timeout to display the pop-up again after 1 second
    setTimeout(function () {
        subscriptionPopUp.style.display = 'block';
    }, 1000);
}