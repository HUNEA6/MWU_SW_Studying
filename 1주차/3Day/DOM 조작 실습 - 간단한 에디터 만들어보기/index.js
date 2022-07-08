(() => {
    document.querySelectorAll('.toolbar button').forEach((element) => {
        element.addEventListener("click", (e) => {
            const command = e.target.getAttribute("data-command");
            document.execCommand(command);
            });
    });
})();