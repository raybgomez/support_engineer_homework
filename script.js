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

const formatDate = (createdDateStr) => {
    const date = new Date(createdDateStr.createdDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    return {
        ...createdDateStr,
        createdDate: formattedDate
    }
}

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

const listOrganizationsByDate = () => {
    const sortedList = account_plan.sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate))
        .map(formatDate);

    const output = document.getElementById('reportOutput2');
    let html = '<table border="1"><tr><th>Created Date</th><th>Plan Name</th><th>/Status</th></tr>'
    sortedList.forEach(org => {
        html += `<tr>
        <td>${org.createdDate}</td>
        <td>${org.planName}</td>
        <td>${org.status}</td>
        </tr>`;
    });
    html += '</table>';
    output.innerHTML = html;
}

const listCancelledOrganizations = () => {
    const cancelledOrganizations = account_plan.filter(org => org.status === "CANCELLED").map(formatDate);

    const output = document.getElementById('reportOutput3');
    if (cancelledOrganizations.length > 0) {
        let html = '<ul>';
        cancelledOrganizations.forEach(org => {
            html += `<li>${org.planName}, (Created Date: ${org.createdDate}, Status: ${org.status})</li>`;
        });
        html += '</ul>';
        output.innerHTML = html;
    } else {
        output.innerHTML = '<p>Not Found</p>';
    }
}

const getOrganizationRecordByName = () => {
    const orgName = document.getElementById('organizationName').value;
    const organization = organizations.find(org => org.orgName.toLowerCase() === orgName.toLowerCase());

    const output = document.getElementById('reportOutput4');
    if (organization) {
        output.innerHTML = `<pre>${JSON.stringify(organization, null, 2)}</pre>`
    } else {
        output.innerHTML = `<p>Not found</p>`
    }
}


