//creating div
let div=document.createElement("div");
document.body.appendChild(div);
div.setAttribute("id","table")
div.setAttribute("class","container")

//appending heading to div
let h1=document.createElement("h1")
h1.innerText="book details";
div.append(h1);

//search 
let input=document.createElement("Input")
div.appendChild(input);
input.setAttribute("type","search")
input.setAttribute("id","input")
input.setAttribute("placeHolder","enter the name or isbn or publisher to search.....")

//create table
let table=document.createElement("table")
div.appendChild(table);
table.setAttribute("id","table ")
let thead=document.createElement("thead")
table.appendChild(thead);
let tr=document.createElement("tr")
thead.appendChild(tr);
let th1=document.createElement("th")
th1.innerText="Name of the Book"
tr.appendChild(th1);
let th2=document.createElement("th")
th2.innerText="isbn"
tr.appendChild(th2);
let th3=document.createElement("th")
th3.innerText="Authors"
tr.appendChild(th3);
let th4=document.createElement("th")
th4.innerText="number Of Pages"
tr.appendChild(th4);
let th5=document.createElement("th")
th5.innerText="Publishers"
tr.appendChild(th5);
let th6=document.createElement("th")
th6.innerText="characters"
tr.appendChild(th6); 
let tbody=document.createElement("tbody")
table.appendChild(tbody);
tbody.setAttribute("id","tablebody")

//fetching  ice and fire API


function createTable(data){
        
    let str="";
    let element=document.getElementById("tablebody")
    for(let value of data )
    {   
      str+=`<tr>
      <td>${value.name}</td>
      <td>${value.isbn}</td>
      <td>${value.authors}</td>
      <td>${value.numberOfPages}</td>
      <td>${value.publisher}</td>  
      <td>
      <li><a href="${value.characters[0]}" target="_blank">${value.characters[0]}</a></li>
      <li><a href="${value.characters[1]}"  target="_blank">${value.characters[1]}</a></li>
      <li><a href="${value.characters[2]}"  target="_blank">${value.characters[2]}</a></li>
      <li><a href="${value.characters[3]}"  target="_blank">${value.characters[4]}</a></li>
      <li><a href="${value.characters[4]}"  target="_blank">${value.characters[5]}</a></li>    
      </td>  
      </tr>`  
      } 
      element.innerHTML=str;      
}

function searchTable(text,data){
    let arr=[];
    for(let i=0;i<data.length;i++)
    {
      text=text.toLowerCase();
      let name=data[i].name.toLowerCase();
      let isbn=data[i].isbn.toLowerCase();
      let publisher=data[i].publisher.toLowerCase();
      let characters=data[i].publisher.toLowerCase();
      if(name.includes(text)|| isbn.includes(text) || publisher.includes(text))
      {
        
       arr.push(data[i])
      }
     
    }
    return arr;    
  }
async function fetchData(){
    try{
    let response= await fetch("https://www.anapioficeandfire.com/api/books");
    let data=await response.json();
    createTable(data);
    let text= document.getElementById("input")
          text.addEventListener('keyup',(e)=>{
          let stext= e.target.value;
          let filteredData=searchTable(stext,data);
          createTable(filteredData);
      })
    }  
    catch(error){
    console.log(error);
    }          
}

    fetchData();
    
    

    




  

 

