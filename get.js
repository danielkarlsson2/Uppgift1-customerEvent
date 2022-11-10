const output = document.querySelector('#tasks');
// const headOutput =  document.querySelector('#headlineOutput');
// const textOutput =  document.querySelector('#textOutput');
// const emailOutput =  document.querySelector('#emailOutput');


      

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
        <div id="${item.Id}" class=" border rounded bg-white p-2 mb-2 d-flex justify-content-between mt-3 taskCard">

            <div class="d-flex flex-column p-2 w-50 ">

                    <h2 class="head">${item.Headline}</h2>
                    <p class="mb-4 mt-3">- ${item.TextMessage}</p>

                    <span class="span mt-4">User</span>
                    <p class="">${item.Email}</p>
                
                   
                </div>
                
                <div class="d-flex flex-column justify-content-between p-2">
                    <div>
                        <span class="mt-5 span">Date and time:</span>
                        <p class="">${item.CreatedDate}</p>
                    </div>

                    <div class="d-flex flex-column">  
                        <span class="span">Status:</span>
                        <button class="btn mt-auto comment btnSm ${item.TaskStatus == true ? "Done" : 'notDone'}" onclick="${item.TaskStatus !== item.TaskStatus}">
                        ${item.TaskStatus === true ? "Done" : "Not done"}
                        </button>
                    </div>
                </div>
            </div>
            `
            // console.log(date.toLocaleString('sv-SV'));
        }        
        
    }

getTasks();

{/* <button class="btn btn-success w-50 comment">Add Comment</button> */}