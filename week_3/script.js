document.addEventListener("DOMContentLoaded", () => {
    
    // Feature 1: Dynamic Typing Effect (DOM Manipulation & Animation)
    const typingElement = document.getElementById("typing-text");
    const textToType = "Initialize Connection...";
    let charIndex = 0;

    function typeText() {
        if (charIndex < textToType.length) {
            typingElement.innerHTML = textToType.substring(0, charIndex + 1) + '<span class="cursor">&nbsp;</span>';
            charIndex++;
            setTimeout(typeText, 100); // Speed of typing
        } else {
            // Keep blinking cursor at the end
            typingElement.innerHTML = textToType + '<span class="cursor">&nbsp;</span>';
        }
    }
    
    // Initiate typing effect slightly after load
    setTimeout(typeText, 500);


    // Feature 2: Color Flipper / Theme Toggle (Event Handling)
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("alt-theme");
        
        // Update button text dynamically based on current state
        if (document.body.classList.contains("alt-theme")) {
            themeToggleBtn.textContent = "Revert UI Theme";
        } else {
            themeToggleBtn.textContent = "Toggle UI Theme";
        }
    });


    // Feature 3: Client-Side Form Validation (Data Handling & DOM Updates)
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const successMsg = document.getElementById("success-msg");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent page reload
        
        // Reset error states
        document.getElementById("name-error").textContent = "";
        document.getElementById("email-error").textContent = "";
        document.getElementById("message-error").textContent = "";
        successMsg.textContent = "";

        let isValid = true;

        // Validate Name
        if (nameInput.value.trim() === "") {
            document.getElementById("name-error").textContent = "Error: Alias is required.";
            isValid = false;
        }

        // Validate Email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (emailInput.value.trim() === "") {
            document.getElementById("email-error").textContent = "Error: Comlink is required.";
            isValid = false;
        } else if (!emailInput.value.match(emailPattern)) {
            document.getElementById("email-error").textContent = "Error: Invalid Comlink format.";
            isValid = false;
        }

        // Validate Message
        if (messageInput.value.trim() === "") {
            document.getElementById("message-error").textContent = "Error: Transmission body cannot be empty.";
            isValid = false;
        }

        // Execute Success State
        if (isValid) {
            successMsg.textContent = "Transmission successful. Awaiting response...";
            contactForm.reset(); // Clear input fields
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMsg.textContent = "";
            }, 5000);
        }
    });
});