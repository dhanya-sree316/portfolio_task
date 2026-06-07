fetch("http://localhost:5000/getPortfolioProjects")
.then(response => response.json())
.then(projects => {

    const container =
    document.getElementById("portfolioProjects");

    projects.forEach(project => {

        container.innerHTML += `
        <div class="project-box">
            <h3>${project.project_title}</h3>
            <p>${project.project_description}</p>
            <strong>${project.tools_used}</strong>
        </div>
        `;

    });

})
.catch(error => console.log(error));
