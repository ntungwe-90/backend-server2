const express = require("express");
const server = express();
const handleBiographyPutRequest = (req, res)=>{
        res.send('<html><body><div  background-color:pink; text-align:center; ><h1>Biography</h1></div></body></html>');
    }
    const handleAboutPatchRequest = (req, res)=>{
            res.send('<html><body ><div background-color:pink; text-align:center; ><p>my about page</p><ol><li>I am a fun person to talk to</li><li>fair in complexion</li><li>Always ready to learn new things</li></ol></div></body></html>');
        }

        const handleEducationPostRequest = (req, res)=>{
                res.send(
                    '<html><body><div style=" background-color:pink;"><h3>Educational backgroung</h3><table ><tr><th>Primary school</th> <th>Secondaryschool</th><th>University</th><tr><td>Catholic Schoo</td><td>CCAS Bambili</td><td>University of Buea</td></tr></tr></table></div></body></html>'
                );
            }

            const handleHobbiesPutRequest = (req, res)=>{
                    res.send('<html><body tyle="background-color:pink"><h1>Hobbies</h1><ol><li>Reading</li><li>Music</li><li>Coding</li></ol></body></html>');
                }

                const handleReligionDeleteRequest = (req, res)=>{
                        res.send('<html><body style="background-color:pink"><h1 >religion</h1><p>roman catholic christian</p></body></html>');
                }

                const handleFormPostRequest = (req, res)=>{
                  res.send ( '<html><body><div style=" height:250px;width:500px; background-color:pink; text-align:center; color:white; margin-left: 27%; margin-top: 8%"><h1>Login</h1><table style = "margin-left: 150px"><tr><td style = "color: white">Username:</td><td><input type = "text" /></td></tr><tr><td style = "color: white">Password:</td><td><input type = "password" /></td></tr></table><input type = "submit" value = "Submit" style = "margin-top: 20" /></div></body></html>'
                        );
                    }   
                
server.put('/biography', handleBiographyPutRequest);
server.patch('/about', handleAboutPatchRequest);
server.post('/education', handleEducationPostRequest);
server.put('/hobbies', handleHobbiesPutRequest);
server.delete('/religion', handleReligionDeleteRequest);
server.post('/form', handleFormPostRequest);

server.listen(3005, '127.0.0.1', ()=> console.log('server is almost ready'))



// const handleAllRequest = (requestObject, responseObject) => {
//   console.log("this is my first requst");
//   const url = requestObject.url;
//   responseObject.setHeader("content-type", "text/html");
//   if (url === "/about") {
//     responseObject.send("<div><h1>WElcome to irene biography</h1></div>");
//   } else if (url === "/education") {
//     // responseObject.send(<h3>backend server is working</h3>)
//     responseObject.send(
//       "<table><tr><th>primary school</th><th>secondary school</th><th>university</th> <th>proffessional studies</th> </tr> <tr><td>Catholic school yaounde</td> <td>CCAS Kumba</td> <td>University of Buea/yaounde</td> <td>Codetrain Ghana</td></tr> </table>"
//     );
//     responseObject.send("WElcome to my educational backgroung page");
//   } else if (url === "/Hobbies") {
//     responseObject.send(
//       "<ol> <li>singing and listening to music</li> <li>dancing</li> <li>eating banku</li></ol>"
//     );
//   } else if (url === "/religion") {
//     responseObject.send("<p>I am a fervent ROMAN CATHOLIC CHRISTAIN</p>");
//   } else if (url === "/loginform") {
//     responseObject.send(
//       "<div><form> <label>first name><input>Ashanti irene</input> <label>email</label><input>ntongwe irene@gmail.com</input></form></div>"
//     );
//   } else {
//     responseObject.send("<p>page not found</p>");
//   }
//   responseObject.end();
// };

// const handleGetabout = (reg, res) => {
//   res.send("This is about get");
// };

// const handleEducationPot = (req, res) => {
//   res.send("This is education pot");
// };

// const handleHobbiesDelete = (req, res) => {
//   res.send("This is Hobbies delete");
// };

// const handleReligionPut = (req, res) => {
//   res.send("This is religion put");
// };
// const handleLoginformPut = (req, res) => {
//   res.send("This is Loginform ");
// };

// const server = express();

// server.get("/about", handleGetabout);
// server.pot("/Education", handleEducationPot);
// server.delete("/Hobbies", handleHobbiesDelete);
// server.put("/Religion", handleReligionPut);
// server.put("/Religion", handleLoginformPut);

// server.listen(3000, "127.0.0.1", () =>
//   console("backend is not easy oooh, my server is still not working")
// );

