var num = 0;

function Toggle() {
    currentTheme = localStorage.getItem("theme");
    newTheme = 'default'
    if (currentTheme === 'default') 
    {
        newTheme = 'alternate';
    } 
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
}

function applyTheme(theme) {
    const styles = {
        index: { default: "index.css", alternate: "index2.css" },
        sandi: { default: "sandi.css", alternate: "sandi2.css" },
        projects: { default: "projects.css", alternate: "projects2.css" },
        vision: { default: "vision.css", alternate: "vision2.css" },
        pofai: { default: "pofai.css", alternate: "pofai.css" }
    };

    Object.keys(styles).forEach(page => {
        currentPage = document.getElementById(`${page}StyleSheet`);
        if (currentPage) 
        {
            currentPage.setAttribute("href", styles[page][theme]);
        }
    });
}

window.onload = function() {
    currentTheme = localStorage.getItem("theme");
    applyTheme(currentTheme);
}




