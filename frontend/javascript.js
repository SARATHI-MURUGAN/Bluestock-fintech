let order = document.getElementById("stockorder");

let stockdata = [{
        id: "one",
        name: "Upstox",
        img: ".//image/upstox.jpg"
},
    {
        id: "two",
        name: "angelone",
        img: "..//image/angelone.png"
    },
    {
        id: "three",
        name: "groww",
        img: "..//image/groww.png"   
    },
    {
        id: "four",
        name: "dhan",
        img: "..//image/four.jpg"
    },
    {
        id: "five",
        name: "Alice Blue ",
        img: "..//image/five.png"
    },
    {
        id: "six",
        name: "Axis",
        img: "..//image/six.png"
    },
    {
        id: "seven",
        name: "Fyers",
        img: "..//image/seven.png" 
    },
    {
        id: "eight",
        name: "Geojit",
        img: "..//image/upstox.jpg"
    },
    {
        id: "nine",
        name: "IHDFC Securities",
        img: "..//image/upstox.jpg"
    },
    {
        id: "ten",
        name: "IFL Securities",
        img: "..//image/upstox.jpg"
    },
    {
        id: "eleven",
        name: "Kotak Securities",
        img: "..//image/upstox.jpg"
    },
    {
        id: "tewlve",
        name: "Motilal Oswal",
        img: "..//image/upstox.jpg"
    },
    {
        id: "thierteen",
        name: "Nuvama",
        img: "..//image/upstox.jpg"
    },
    {
        id: "fourteen",
        name: "Paytm Money",
        img: "..//image/upstox.jpg"
    },
    {
        id: "fifteen",
        name: "SBI Securities",
        img: "..//image/upstox.jpg"
    },
    {
        id: "sixteen",
        name: "Sharekhan",
        img: "..//image/upstox.jpg"
    },
    {
        id: "seventeen",
        name: "MC Global",
        img: "..//image/upstox.jpg"
    },
    {
        id: "eighteen",
        name: "5PaisaS",
        img: "..//image/upstox.jpg"
    },
    
]

let generateorder = () =>{
    return(order.innerHTML = stockdata.map((S)=>{
        let{id,name,img} = S
        return  `
        <div class="details">
      <div class="div1">
        <h1 class="up1">${name} <br><img src=".//image/rating stars.png" alt="" class="up2"></h1>
    <p class="review"><img src=".//image/Chat.png" alt="">&nbsp;&nbsp;15k</p>
    <p class="Account"><img src=".//image/account.png" alt=""> &nbsp; 50.2k</p><br>
    <p class="review1">Reviews</p>
    <p class="Account1">Accounts</p>
    <p class="open">open Demat A/c for FREE</p>
    <p class="button button1">open A/c</p><br class="break">
    <p class="button button2">Learn More</p>
    </div>
    <table class="table1">
    <tr class="d1">
    <td class="data1">Eguity</td>
    </tr>
    <tr class="d1">
    <td class="data1">Commodity</td>
    </tr>
    <tr class="d1">
    <td class="data1"> Currency</td>
    </tr>
    <tr class="d1">
    <td class="data1">Future</td>
    </tr>
    <tr class="d1">
    <td class="data1">Options</td>
    </tr>
    </table>  
    <table class="table1" class=tab2">
    <tr class="d2">
    <td class="data2">A/c Opening Change <br> $ Rs. 0</td>
    </tr>
    <tr class="d2">
    <td class="data2"> Maintence Charge <br> $300</td>
    </tr><br class="break1">
    <tr class="d2">
    <td class="data2">Delivery Brokerage <br> $20 </td>
    </tr>
    <tr class="d2">
    <td class="data2">Intraday Brokerage <br> $20</td>
    </tr>
    </table>
    <div class="Upstox"><img src=${img} alt="" class="upstox"></div>
    </div>
        `
    })
    .join(""));
};
generateorder();