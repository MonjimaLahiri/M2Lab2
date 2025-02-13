window.addEventListener("load", () => {
    const form = document.getElementById("empForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const getValue = (id) => document.getElementById(id).value.trim();
        
        console.log({
            EmployeeID: getValue("id"),
            FullName: getValue("name"),
            Extension: getValue("ext"),
            Email: getValue("email"),
            Department: getValue("department")
        });
    });
});
