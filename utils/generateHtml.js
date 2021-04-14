
function generateHTML(teamMembers){
    console.log(teamMembers)
    return `
    <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Teams</title>
            </head>
            <body>
                <h1>temas</h1>
               <p>${teamMembers.answers}</p> 

            </body>
</html>
    
    `

}

module.exports = generateHTML;