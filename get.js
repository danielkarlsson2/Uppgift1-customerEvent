const output = document.querySelector('#tasks');
const headOutput =  document.querySelector('#headlineOutput');
const textOutput =  document.querySelector('#textOutput');
const emailOutput =  document.querySelector('#emailOutput');

const getTasks = async () => {
    const res = await fetch("https://webapi-uppgift1.azurewebsites.net/api/customerTasks")
    const data = await res.json()
    console.log(data)

    for(let item of data) {
        output.innerHTML += `
        <div id="${item.Id}" class="align-items-center border bg-white p-2 mb-2">
                <h2 class="p-4">${item.Headline}</h2>
                <p class="p-4">- ${item.TextMessage}</p>
                <p class="p-4">${item.Email}</p>
              
                <button class="btn btn-primary">Edit</button>
            </div>
            `
    }

   

    // data.forEach(item => {
    //     output.innerHTML += `
    //     <div id="${item.id}" class="align-items-center border bg-white p-2 mb-2">
    //             <h2 class="p-4">${item.headline}</h2>
    //             <p class="p-4">${item.textMessage}</p>
              
    //         </div>
    //         `
    // })
}

getTasks();

{/* <button type ="button" class="btn btn-danger btn-sm">X</button> */}