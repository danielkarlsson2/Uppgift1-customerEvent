const output = document.querySelector('#tasks');
const headOutput =  document.querySelector('#headlineOutput');
const textOutput =  document.querySelector('#textOutput');
const emailOutput =  document.querySelector('#emailOutput');

const getTasks = async () => {
    const res = await fetch("https://webapi-uppgift1.azurewebsites.net/api/customerTasks")
    const data = await res.json()

    function compare(a, b) {
        if( a.CreatedDate < b.CreatedDate) {
            return 1;
        }
        if( a.CreatedDate > b.CreatedDate) {
            return -1;
        }
        return 0;
    }
    data.sort(compare);

    console.log(data)

    for(let item of data) {
        
        output.innerHTML += `
        <div id="${item.Id}" class="align-items-center border bg-white p-2 mb-2">
            <div class="d-flex flex-column p-3">
                <h2 class="">${item.Headline}</h2>
                <p class="">- ${item.TextMessage}</p>
                <p class="">${item.Email}</p>
            
                <div class="d-flex justify-content-between">
                    <button class="btn btn-primary">Edit</button>
                    <p>${item.CreatedDate}</p>
                    <button class="btn">${item.TaskStatus}</button>
                </div>
            </div>
            </div>
            `
        
            
        }        
        
    }

getTasks();

