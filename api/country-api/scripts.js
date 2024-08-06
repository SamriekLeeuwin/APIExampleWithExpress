const usersAPI = 'http://localhost:3001/api/users'; // Kullanıcı API URL
const countriesAPI = 'http://localhost:3000/api/countries'; // Ülke API URL

const nameInput = document.getElementById('nameInput');
const codeInput = document.getElementById('codeInput');
const searchButton = document.getElementById('searchButton');
const nameResult = document.getElementById('nameResult');
const codeResult = document.getElementById('codeResult');

// API'den kullanıcı ve ülke verilerini çek
async function fetchData() {
    const usersResponse = await fetch(usersAPI);
    const users = await usersResponse.json();

    const countriesResponse = await fetch(countriesAPI);
    const countries = await countriesResponse.json();

    return { users, countries };
}

// Arama butonuna tıklama olayını dinleme
searchButton.addEventListener('click', async () => {
    const { users, countries } = await fetchData();
    const nameQuery = nameInput.value.toLowerCase();
    const codeQuery = codeInput.value.toUpperCase();

    // İsim arama
    const foundUser = users.find(user => user.name.toLowerCase() === nameQuery);
    if (foundUser) {
        nameResult.textContent = `Kullanıcı bulundu: ${foundUser.name}, Yaş: ${foundUser.years || 'Belirtilmemiş'}`;
    } else {
        nameResult.textContent = 'Kullanıcı bulunamadı.';
    }

    // Kısaltma arama
    const foundCountry = countries.find(country => country.code === codeQuery);
    if (foundCountry) {
        codeResult.textContent = `Ülke bulundu: ${foundCountry.name}`;
    } else {
        codeResult.textContent = 'Ülke bulunamadı.';
    }
});


// fetch(countriesAPI)
//     .then(response => response.json())
//     .then(responseJson => {
//         responseJson.forEach(item => {  
//           console.log(item.name)         
//         });
//     })
//     .catch(error => console.error('Error fetching data:', error));



// let country = document.getElementById("country-list")
// fetch('http://localhost:3001/api/users')
//     .then(response => response.json())
//     .then(responseJson => {
//         responseJson.forEach(item => {  
//            if (item.id === 1) {
//             console.log(item.name);
//            } 
           
//         });

//     })
//     .catch(error => console.error('Error fetching data:', error));













// let country = document.getElementById("country-list")
// fetch('http://localhost:3001/api/users')
//     .then(response => response.json())
//     .then(responseJson => {
//         responseJson.forEach((item, index) => {
//             setTimeout(() => {
//                 let listDom = document.createElement("li");
//                    listDom.innerHTML = item.name  + " " + item.years
//                   country.appendChild(listDom)
//             }, index * 2000); // 2 saniye (2000 milisaniye) bekleme süresi
//         });
//     })
//     .catch(error => console.error('Error fetching data:', error));




// let country = document.getElementById("country-list")
// fetch('http://localhost:3000/api/countries')
//     .then(response => response.json())
//     .then(responseJson => {
//         responseJson.forEach(item => {  hepsini gez dedim
//           let listDom = document.createElement("li");
//           listDom.innerHTML = item.name  + " " + item.code sonra bunları bana ver ve li olrak göserdim
//           country.appendChild(listDom)
//         });

//     })
//     .catch(error => console.error('Error fetching data:', error));

