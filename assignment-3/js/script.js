function updateGreeting(name) {
  const greetingElement = document.getElementById('greeting-text');
  const hour = new Date().getHours();
  let greeting;

  // Between 5 am and 12 pm
  if (hour < 12 && hour >= 5) {
    greeting = "Good Morning";
    icon = "☀️";
    // Between 12 pm and 6 pm
  } else if (hour < 18 && hour >= 12) {
    greeting = "Good Afternoon";
    icon = "☕";
  } else {
    // Between 6 pm and 5 am
    greeting = "Good Evening";
    icon = "🌙";
  }
  greetingElement.innerText = `${greeting} ${name} ${icon}`;
  // document.getElementById("name").textContent = name;

}
const username = "Manar44442";

async function loadGitHub() {
  // Get the divs where we will display the profile and repos
  const profileDiv = document.getElementById("profile");
  const reposDiv = document.getElementById("repos");

  // Loading state
  profileDiv.innerHTML = "Loading profile...";
  reposDiv.innerHTML = "Loading projects...";

  try {
    // Fetch profile and repos in parallel
    const resProfile = await fetch(`https://api.github.com/users/${username}`);
    const resRepos = await fetch(`https://api.github.com/users/${username}/repos`);

    // Check if both requests were successful
    if (!resProfile.ok || !resRepos.ok) {
      throw new Error("Failed to fetch data");
    }
    const profile = await resProfile.json();
    const repos = await resRepos.json();

    // Display profile
    profileDiv.innerHTML = `
          <img src="${profile.avatar_url}" width="120">
          <h3>${profile.name || profile.login}</h3>
          <p>${profile.bio || "No bio available"}</p>
          <p><a href="${profile.html_url}" target="_blank" class="btn">Visit GitHub Profile</a></p>
        `;

    // Display My most recent 1 repo
    let repoHTML = "<h3>My most recent project</h3>";
    repos
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 1)
      .forEach(repo => {
        repoHTML += `
              <div class="repo">
                <strong>${repo.name}</strong>
                <p>${repo.description || "No description"}</p>
                <a href="${repo.html_url}" target="_blank" class="btn">View Repository</a>
              </div>
            `;
      });

    reposDiv.innerHTML = repoHTML;

  } catch (error) {
    // Friendly error message
    profileDiv.innerHTML = `
          <p class="error">⚠️ Unable to load GitHub profile right now. Please try again later.</p>
        `;
    reposDiv.innerHTML = "";
  }
}

// Wait for DOM to be fully loaded before running GitHub API call
document.addEventListener('DOMContentLoaded', function () {
  loadGitHub();
});

// Function to calculate and display time spent on the site
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("timer");

  if (!el) {
    console.error("Timer error");
    return;
  }

let seconds = 0;

setInterval(() => {
  seconds++;

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const hoursText = hours === 1 ? "hour" : "hours";
  const minText = minutes === 1 ? "minute" : "minutes";
  const secText = remainingSeconds === 1 ? "second" : "seconds";

  let output = "";

  if (hours > 0) {
    output += `${hours} ${hoursText}`;
  }

  if ((minutes > 0 || hours > 0)&& minutes!== 0) {
    if (output) output += " ";
    output += `${minutes} ${minText}`;
  }

  if (remainingSeconds > 0 || seconds < 60) {
    if (output) output += " ";
    output += `${remainingSeconds} ${secText}`;
  }

  el.textContent = output;
}, 1000);
});
function askName() {
  let name = localStorage.getItem("visitorName");

  if (!name) {
    name = prompt("Enter your name:");
    localStorage.setItem("visitorName", name);
  }

  return name;

}

document.addEventListener("DOMContentLoaded", () => {
  const name = askName();
  updateGreeting(name);
});