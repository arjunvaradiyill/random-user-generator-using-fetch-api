document.getElementById("fetchUserBtn").addEventListener("click", fetchRandomUser);

async function fetchRandomUser() {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        displayUser(data.results[0]);
    } catch (error) {
        console.error("Error fetching the user:", error);
    }
}

function displayUser(user) {
    const userName = `${user.name.first} ${user.name.last}`;
    const userEmail = user.email;
    const userImage = user.picture.large;

    document.getElementById("userName").textContent = `Name: ${userName}`;
    document.getElementById("userEmail").textContent = `Email: ${userEmail}`;
    document.getElementById("userImage").src = userImage;
}
