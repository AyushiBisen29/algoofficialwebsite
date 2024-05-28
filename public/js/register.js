
// const container = document.querySelector(".container"),
//       pwShowHide = document.querySelectorAll(".showHidePw"),
//       pwFields = document.querySelectorAll(".password"),
//       signUp = document.querySelector(".signup-link"),
//       login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    // pwShowHide.forEach(eyeIcon =>{
    //     eyeIcon.addEventListener("click", ()=>{
    //         pwFields.forEach(pwField =>{
    //             if(pwField.type ==="password"){
    //                 pwField.type = "text";

    //                 pwShowHide.forEach(icon =>{
    //                     icon.classList.replace("uil-eye-slash", "uil-eye");
    //                 })
    //             }else{
    //                 pwField.type = "password";

    //                 pwShowHide.forEach(icon =>{
    //                     icon.classList.replace("uil-eye", "uil-eye-slash");
    //                 })
    //             }
    //         }) 
    //     })
    // })
    // function validateEmail(email) {
        // Email validation pattern
//         var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return pattern.test(email);
//      }

     
// function validateLoginForm() {
//             var emailInput = document.getElementById("loginEmail");
//             var passwordInput = document.getElementById("loginPassword");
            
            // Check if email and password are blank
            // if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
            //     // Add shake class
            //     emailInput.classList.add("shake");
            //     passwordInput.classList.add("shake");
            //     setTimeout(function(){
            //         emailInput.classList.remove("shake");
            //         passwordInput.classList.remove("shake");
            //     }, 1000);
            //     return false;
            // }
            
            // Validate email pattern
            // if (!validateEmail(emailInput.value)) {
            //     alert("Please enter a valid email address.");
            //     return false;
            // }
            
            // If all validations pass, allow form submission
        //     return true;
        //  }

        //  function validateSignupForm() {
        //     var nameInput = document.getElementById("signupName");
        //     var emailInput = document.getElementById("signupEmail");
        //     var passwordInput = document.getElementById("signupPassword");
        //     var confirmPasswordInput = document.getElementById("confirmPassword");
            
            // Check if any field is blank
            // if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || passwordInput.value.trim() === "" || confirmPasswordInput.value.trim() === "") {
                // Add shake class
                // nameInput.classList.add("shake");
                // emailInput.classList.add("shake");
                // passwordInput.classList.add("shake");
                // confirmPasswordInput.classList.add("shake");
                // setTimeout(function(){
                //     nameInput.classList.remove("shake");
                //     emailInput.classList.remove("shake");
                //     passwordInput.classList.remove("shake");
                //     confirmPasswordInput.classList.remove("shake");
                // }, 1000);
                // return false;
          //  }
            
            // Validate email pattern
            // if (!validateEmail(emailInput.value)) {
            //     alert("Please enter a valid email address.");
            //     return false;
            // }
            
            // Check if passwords match
        //     if (passwordInput.value !== confirmPasswordInput.value) {
        //         alert("Passwords do not match.");
        //         return false;
        //     }
            
        //     // If all validations pass, allow form submission
        //     return true;
        //  } 
     
    // js code to appear signup and login form
    // signUp.addEventListener("click", ( )=>{
    //     container.classList.add("active");
    // });
    // login.addEventListener("click", ( )=>{
    //     container.classList.remove("active");
    // });


//     const container = document.querySelector(".container"),
//       pwShowHide = document.querySelectorAll(".showHidePw"),
//       pwFields = document.querySelectorAll(".password"),
//       signUp = document.querySelector(".signup-link"),
//       login = document.querySelector(".login-link");

//     //   js code to show/hide password and change icon
//     pwShowHide.forEach(eyeIcon =>{
//         eyeIcon.addEventListener("click", ()=>{
//             pwFields.forEach(pwField =>{
//                 if(pwField.type ==="password"){
//                     pwField.type = "text";

//                     pwShowHide.forEach(icon =>{
//                         icon.classList.replace("uil-eye-slash", "uil-eye");
//                     })
//                 }else{
//                     pwField.type = "password";

//                     pwShowHide.forEach(icon =>{
//                         icon.classList.replace("uil-eye", "uil-eye-slash");
//                     })
//                 }
//             }) 
//         })
//     })
//     function validateEmail(email) {
//         // Email validation pattern
//         var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return pattern.test(email);
//      }

     
// function validateLoginForm() {
//             var emailInput = document.getElementById("loginEmail");
//             var passwordInput = document.getElementById("loginPassword");
            
//             // Check if email and password are blank
//             if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
//                 // Add shake class
//                 emailInput.classList.add("shake");
//                 passwordInput.classList.add("shake");
//                 setTimeout(function(){
//                     emailInput.classList.remove("shake");
//                     passwordInput.classList.remove("shake");
//                 }, 1000);
//                 return false;
//             }
            
//             // Validate email pattern
//             if (!validateEmail(emailInput.value)) {
//                 alert("Please enter a valid email address.");
//                 return false;
//             }
            
//             // If all validations pass, allow form submission
//             return true;
//          }

//          function validateSignupForm() {
//             var nameInput = document.getElementById("signupName");
//             var emailInput = document.getElementById("signupEmail");
//             var passwordInput = document.getElementById("signupPassword");
//             var confirmPasswordInput = document.getElementById("confirmPassword");
            
//             // Check if any field is blank
//             if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || passwordInput.value.trim() === "" || confirmPasswordInput.value.trim() === "") {
//                 // Add shake class
//                 nameInput.classList.add("shake");
//                 emailInput.classList.add("shake");
//                 passwordInput.classList.add("shake");
//                 confirmPasswordInput.classList.add("shake");
//                 setTimeout(function(){
//                     nameInput.classList.remove("shake");
//                     emailInput.classList.remove("shake");
//                     passwordInput.classList.remove("shake");
//                     confirmPasswordInput.classList.remove("shake");
//                 }, 1000);
//                 return false;
//             }
            
//             // Validate email pattern
//             if (!validateEmail(emailInput.value)) {
//                 alert("Please enter a valid email address.");
//                 return false;
//             }
            
//             // Check if passwords match
//             if (passwordInput.value !== confirmPasswordInput.value) {
//                 alert("Passwords do not match.");
//                 return false;
//             }
            
//             // If all validations pass, allow form submission
//             return true;
//          } 
     
//     // js code to appear signup and login form
//     signUp.addEventListener("click", ( )=>{
//         container.classList.add("active");
//     });
//     login.addEventListener("click", ( )=>{
//         container.classList.remove("active");
//     });




