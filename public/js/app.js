
function toggleDarkMode() {
    // Check if dark mode is enabled
    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
  
    // Toggle dark mode
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
  
    // Nav
    const nav = document.querySelector("nav");
    nav.classList.toggle('bg-light');
    nav.classList.toggle('bg-dark');
    
    // Button
    const navBtn = nav.querySelector("#darkMode");
    navBtn.classList.toggle('btn-light');
    navBtn.classList.toggle('btn-dark');
  
    // Links
    const links = document.querySelectorAll("a");
    links.forEach(link => link.classList.toggle('text-white'));
    links.forEach(link => link.classList.toggle('text-dark'));

    // Footer
    const footer = document.querySelector("footer");
    footer.classList.toggle('bg-light');
    footer.classList.toggle('bg-dark');
  
    // Save dark mode state
    localStorage.setItem('darkModeEnabled', !isDarkModeEnabled);
  }

  window.onload = function() {
    const nav = document.querySelector("nav");
    const navBtn = nav.querySelector("#darkMode");
    const links = document.querySelectorAll("a");
    const footer = document.querySelector("footer");

    if (localStorage.darkModeEnabled === 'false'){

      document.body.classList.replace('dark', 'light');
      nav.classList.replace('bg-dark', 'bg-light') ;
      navBtn.classList.replace('btn-dark', 'btn-light');
      links.forEach(link => link.classList.replace('text-white', 'text-dark'));
      footer.classList.replace('bg-dark', 'bg-light');
      
    }
    else {
      document.body.classList.replace('light', 'dark');
      nav.classList.replace('bg-light', 'bg-dark');
      navBtn.classList.replace('btn-light', 'btn-dark');
      links.forEach(link => link.classList.replace('text-dark', 'text-white'));
      footer.classList.replace('bg-light', 'bg-dark');
    }

  }
