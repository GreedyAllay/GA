document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        // User has switched away from the tab
        document.title = "Google Docs";
        changeFavicon('https://upload.wikimedia.org/wikipedia/commons/e/ec/GDocs_Favicon_Recreation.png');
    } else {
        // User has come back to the tab
        document.title = "Greedy Allay | Homepage";
        changeFavicon('prachtig.ico');
    }
});

function changeFavicon(src) {
    const link = document.querySelector("link[rel~='icon']");
    if (!link) {
        const newLink = document.createElement('link');
        newLink.rel = 'icon';
        newLink.href = src;
        document.head.appendChild(newLink);
    } else {
        link.href = src;
    }
}
