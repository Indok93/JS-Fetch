const apiData = [];

const getData = () => {

    const endPoint = "https://api.mediehuset.net/sdg/goals";

    fetch(endPoint)
    .then((response) => {

        return response.json();
    })
    .then((data) => {
        // console.log("data", data.items);

        apiData.push(...data.items);
        console.log("apiData", apiData);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        apiData.map((goals, i) => renderContent(goals, i));
    })
}

const renderContent = (goals, i) => {
    // console.log("goals", goals);

    document.getElementById("mother").innerHTML += `
    <figure class="card">
        <div class="container">
            <img src='data:image/svg+xml; utf8, ${goals.icon}' alt='icon'>
            <h4>${goals.title}</h4>
        </div>
    </figure>`;
};

// const renderHair = (hair) => {
//     const{, } = hair;
//     return `<p>${} - ${}</p>`
// }

getData();