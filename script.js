let organizations = [];
let account_plan = [];

fetch('organization.csv')
    .then(response => response.text())
    .then(csvOrgText => {
        Papa.parse(csvOrgText, {
            header: true,
            complete: function (results) {
                organizations = results.data;
                console.log(organizations);
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
                console.log(account_plan);
            }
        })
    });

const getOptimizationSettings = () => {
    const domainValue = document.getElementById('myShopifyDomain').value;
    const organization = organizations.find(org => org.myShopifyDomain.toLowerCase() === domainValue.toLowerCase());

    const output = document.getElementById('reportOutput1');
    if (organization) {
        output.innerHTML = `<p>Below are the optimization settings for ${domainValue}: ${organization.setup.slice(-91)}</p>`
    } else {
        output.innerHTML = `<p>Not found</p>`
    }
}