let h1=document.createElement('h1')
h1.innerText='Quotes'
h1.setAttribute('id','title')
h1.classList.add("text-center",'my-2')
document.body.appendChild(h1)


let main=document.createElement('div')
main.classList.add("container")
document.body.appendChild(main)

let row=document.createElement('div')
row.classList.add('row')
main.appendChild(row)

function show()
{
    fetch(`https://type.fit/api/quotes`)
    .then((d)=>d.json())
    .then((data)=>{
    for(let i=0;i<data.length;i++){
        // console.log(data.length);
        // console.log(data[i]);
        let col=document.createElement('div')
        col.classList.add('quote','rounded-2','p-3','my-3','col-sm-12','col-md-6','col-lg-4','col-xl-4','border')
        row.appendChild(col)
        let div1=document.createElement('div')
        div1.classList.add('text')
        div1.innerHTML=`${data[i].text}`
        let div2=document.createElement('div')
        div2.classList.add('text-end','author')
        div2.innerHTML=`-${data[i].author}`
        col.appendChild(div1)
        col.appendChild(div2)
        
    }
    })
    .catch((er)=>{
        console.log("Error");
    })
}
show()

// let a=1643;
// for(let i=a;i>0;i=i-10){
//     console.log(i);
// }

// let page=document.createElement('div')
// let span1=document.createElement('span')
// span1.setAttribute('id','btn1')
// span1.innerHTML=`sanjeevi`
// page.appendChild(span1)
// document.body.appendChild(page)
// document.getElementById('btn1').addEventListener('click',()=>{
//     show(10)
// })


