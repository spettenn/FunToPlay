async function getMeData() {
    const response = await fetch('https://cammiesrecords.herokuapp.com/albums');
    const data = await response.json();
    // console.log('All data', data);
    // console.log('All info', data.info);
    // console.log('Number of pages', data.info.pages);
    // console.log('=======================================');
    console.log('All results from data', data);

    let allCharacters = data;

    allGoals.forEach(function (id, name) {
        console.log('object inside', id);
        document.querySelector('.goals').innerHTML += `
      <h1>${id.name}</h1>
      
    `;
    });
}

getMeData();