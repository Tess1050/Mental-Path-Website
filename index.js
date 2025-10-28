/*var h2Elements= document.querySelectorAll("h2");
 h2Elements.forEach((h2) => {
    h2.style.marginTop = "0px";
    h2.style.textAlign="left";
    h2.style.marginBottom="10px";
    h2.style.color="#4b0082";
    h2.style.fontSize="2em";
    h2.style.paddingLeft="10px";
 });*/

 // to change button color when clicked ued jquery
 
$("button").on("click",function(){
   $(this).css("backgroundColor" ,"green");


//having the contactbtn directing you to sending email when clicked (js).
  const email = "t.tech1com@gmail.com"; // 🔹 change to your real email
  const subject = "Inquiry from Mindful Mental Path website";
  const body = "Hello Coach Vivian,%0D%0A%0D%0AI would like to learn more about your mental health coaching services.%0D%0A%0D%0ABest regards,";

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${body}`;

  
  // Open Gmail compose in a new tab
  window.open(gmailUrl, "_blank");
});

//for smooth scrolling in the buttons using js.
document.querySelectorAll('#contactbtn, .book-button').forEach(trigger => {
   trigger.addEventListener('click', function(e) {
      e.preventDefault();
      const targetSelector = this.getAttribute('data-target') || this.getAttribute('href');
      const target = document.querySelector(targetSelector);
      if (target) {
         target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
   });
});