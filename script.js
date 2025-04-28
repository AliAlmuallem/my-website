// Form Validation
function validateForm() {
    // Get elements
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var nameErr = document.getElementById("nameErr");
    var emailErr = document.getElementById("emailErr");
    var isValid = true;

    nameErr.innerHTML = "";
    emailErr.innerHTML = "";
    document.getElementById("formSuccess").style.display = "none";

    // Name
    if (name == "") {
        nameErr.innerHTML = "Please enter your name!";
        isValid = false;
    }

    // Email
    if (email == "") {
        emailErr.innerHTML = "Please enter your email!";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailErr.innerHTML = "Please enter a valid email address";
        isValid = false;
    }

    // if valid success message
    if (isValid) {
        document.getElementById("formSuccess").textContent = "Thank you for your message! We will get back to you soon.";
        document.getElementById("formSuccess").style.display = "block";
        document.getElementById("contactForm").reset();
    }

    return isValid;
}

// Quiz
document.getElementById("checkQuiz").addEventListener("click", function() {
    const correctAnswers = {
        q1: "a", 
        q2: "a", 
        q3: "c" 
    };
    
    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;
    for (let i = 1; i <= totalQuestions; i++) {
        const questionName = "q" + i;
        const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
        const feedbackElement = document.getElementById("feedback" + i);
        
        if (selectedOption) {
            if (selectedOption.value === correctAnswers[questionName]) {
                feedbackElement.innerHTML = "Correct!";
                feedbackElement.style.color = "green";
                score++;
            } else {
                let correctAnswerText = "";
                if (questionName === "q1") correctAnswerText = "J.K. Rowling";
                else if (questionName === "q2") correctAnswerText = "1984 by George Orwell";
                else if (questionName === "q3") correctAnswerText = "J.R.R. Tolkien";
                
                feedbackElement.innerHTML = `Incorrect. The correct answer is ${correctAnswerText}`;
                feedbackElement.style.color = "red";
            }
        } else {
            feedbackElement.innerHTML = "Please select an answer";
            feedbackElement.style.color = "red";
        }
    }
    
    const quizResult = document.getElementById("quizResult");
    quizResult.innerHTML = `You scored ${score} out of ${totalQuestions}.`;
    quizResult.style.backgroundColor = score === totalQuestions ? "#d4edda" : "#f8d7da";
    quizResult.style.color = score === totalQuestions ? "#155724" : "#721c24";
});

// Smooth scroll
document.querySelectorAll('.glow-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                window.location.hash = targetId;
            }
        }
    });
});

document.querySelectorAll('details').forEach(detail => {
    if (!detail.hasAttribute('open')) {
        detail.setAttribute('open', '');
    }
    
    detail.addEventListener('toggle', function() {
        const summary = this.querySelector('summary');
        if (this.open) {
            summary.textContent = 'Hide Details';
        } else {
            summary.textContent = 'Show Details';
        }
    });
});

const menuItems = document.querySelectorAll('.glow-menu a');
menuItems.forEach((item, index) => {
    item.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (index + 1) % menuItems.length;
            menuItems[nextIndex].focus();
        }
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = (index - 1 + menuItems.length) % menuItems.length;
            menuItems[prevIndex].focus();
        }
    });
});

// Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.querySelectorAll('.glow-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navHeight = document.querySelector('.header-nav-wrapper').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                window.location.hash = targetId;
            }
        }
    });
});