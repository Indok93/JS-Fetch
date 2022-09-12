const apiData = [];

const getData = () => {

    const endPoint = "https://dummyjson.com/users?limit=10";

    fetch(endPoint)
    .then((response) => {

        return response.json();
    })
    .then((data) => {
        // console.log("data", data.users);
        apiData.push(...data.users);

        // console.log("apiData", apiData);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        apiData.map((person, i) => renderUser(person, i))
    })
}

const renderUser = (person, i) => {
    const {firstName, lastName, hair} = person;
    console.log("person", person);

    document.getElementById("mother").innerHTML += `
    ${firstName + " " + lastName}
    ${renderHair(hair)}`;
};

const renderHair = (hair) => {
    const{color, type} = hair;
    return `<p>${type} - ${color}</p>`
}

getData();