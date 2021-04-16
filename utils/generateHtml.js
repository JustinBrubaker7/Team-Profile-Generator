
function generateHTML(teamMembers){
let finalDoc = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/tailwind.css" rel="stylesheet">
        <title>Teams</title>
    </head>
    <body class="bg-gray-100">
        <h1 class="text-4xl text-center font-sans p-5">The Team</h1>
        <h4 class="text-xl text-center font-sans pb-4">Below are the different memebers of your team.</h4>
        <div class="flex flex-col  mx-12">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Profile</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  ${teamMembers[0].name}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${teamMembers[0].role}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${teamMembers[0].email}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${teamMembers[0].id}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Profile</a>
                  </td>
                </tr>`

for(i=1; i < teamMembers.length; i++){
    finalDoc += `


    <tr>
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
    ${teamMembers[i].name}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    ${teamMembers[i].role}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    ${teamMembers[i].email}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    ${teamMembers[i].id}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <a href="#" class="text-indigo-600 hover:text-indigo-900">Profile</a>
    </td>
  </tr>
    `
// if(gihub !== ""){
//  finalDoc += 
// }
}

finalDoc += `

</tbody>
</table>
</div>
</div>
</div>
</div>
</body>
</html>

`
    return finalDoc
  
  }

module.exports = generateHTML;

