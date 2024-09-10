let organizations = [];
let account_plan = [];

fetch('organization.csv')
    .then(response => response.text())
    .then(csvOrgText => {
        Papa.parse(csvOrgText, {
            header: true,
            complete: function (results) {
                organizations = results.data;
                console.log(organizations);  // Parsed data as array of objects
            }
        })
    })

fetch('account_plan.csv')
    .then(response => response.text())
    .then(csvAccText => {
        Papa.parse(csvAccText, {
            header: true,
            complete: function (results) {
                account_plan = results.data;
                console.log(account_plan);  // Parsed data as array of objects
            }
        })
    })