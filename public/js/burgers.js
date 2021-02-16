document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }
    const form = document.getElementById("burger");
    form.addEventListener("submit", (event) => {

        const burger = form.elements["burger_name"].value.trim();
        console.log(burger);
        event.preventDefault();
        const newBurger = {
            burger_name: burger,
        };
        fetch("/api/burgers", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            //serialize the json body
            body: JSON.stringify(newBurger),
        }).then(() => {
            form.elements["burger_name"].value = "";

            console.log("Created new burger!");
            location.reload();
        });
    });
    const burgerList = document.getElementById("burgerList");
    burgerList.addEventListener("click", (event) => {
        event.stopPropagation();

        if (event.target.name !== undefined) {
            // console.log(event.target.name);
            const isDevoured = {
                devoured: 1,
            };
            const id = event.target.name;
            fetch(`/api/burgers/${id}`, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(isDevoured),
            }).then((response) => {
                if (response.ok) {
                    console.log(`Changed burger to: Devoured`);
                    location.reload("/");
                } else {
                    alert("Something Went Wrong!");
                };
            });
        };
    });
});