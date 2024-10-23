
let mailForm = document.getElementById("mailForm")

let fTo = document.getElementById("to")
let fSub = document.getElementById("subject")
let fMsg = document.getElementById("msg")

mailForm.addEventListener("submit", async(e) =>  {
    e.preventDefault()
    let data = {
        to: fTo.value,
        sub: fSub.value,
        msg: fMsg.value
    }
    console.log(`data =` , data)
    await fetch(`/send/mail`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(res => {
        console.log(`email res =`, res)
        console.log(`Email send Successfully`)
    }).catch(err=>console.log(err.message))
    
})