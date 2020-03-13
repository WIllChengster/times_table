window.addEventListener('load', () => {
    handleload();
})

function handleload() {
    const outputText = document.getElementById('output-text');
    const title = document.getElementById('title');
    const input = Number(prompt('Enter a number between 5 and 20'))
    title.innerHTML = `Times Table - ${input}x${input}`


    if (input >= 5 && input <= 20) {

        const table = document.getElementById('output-table')

        for (let i = 0; i <= input; i++) {
            debugger;
            const tr = document.createElement('tr');
            if (i === 0) {
                const exmpty_th = document.createElement('th');
                tr.append(exmpty_th);
            }

            for (let j = 1; j <= input; j++) {
                if (i === 0) {
                    const th = document.createElement('th');
                    th.textContent = j;
                    tr.append(th);
                } else {

                    if (j === 1) {
                        const th = document.createElement('th');
                        th.textContent = i;
                        tr.append(th);
                    }
                        let td = document.createElement('td');
                        if(j===i){
                            td=document.createElement('th');
                        }
                        td.textContent = i * j
                        tr.append(td)


                }

            }
            table.append(tr);
        }




    } else {
        outputText.innerHTML = 'The invalid input is a number between 5 and 20, please refresh your page to start again'
    }
}
