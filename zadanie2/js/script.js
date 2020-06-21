let btnGetData = document.getElementById('btn');

const getData = () => {

    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(res => res.json())
        .then(data => {
            
            let divData = document.getElementById('dane-programisty');
            divData.innerText = '\r\n Post ID: ' + data.id  + '\r\n User ID: ' + data.userId + '\r\n Title: ' + data.title + '\r\n Body: ' + data.body;
        })
        .catch(error => {
            console.error(error);
        })
};

btnGetData.addEventListener('click', getData);

