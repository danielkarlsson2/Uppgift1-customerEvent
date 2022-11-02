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

        const date = new Date();
        // date = item.CreatedDate
        
        output.innerHTML += `
        <div id="${item.Id}" class="align-items-center border bg-white p-2 mb-2 d-flex justify-content-between">

            <div class="d-flex flex-column p-2 w-50">
                    <h2 class="">${item.Headline}</h2>
                    <p class="">- ${item.TextMessage}</p>
                    <p class="">${item.Email}</p>
                
                    <button class="btn btn-primary w-25">Edit</button>
                </div>
                <div class="d-flex flex-column justify-content-between p-2 border">
                    <p>${item.CreatedDate}</p>
                    <button class="btn">${item.TaskStatus === true ? "Done" : "Not done"}</button>
                </div>
            </div>
            `
            // console.log(date.toLocaleString('sv-SV'));
        }        
        
    }

getTasks();
