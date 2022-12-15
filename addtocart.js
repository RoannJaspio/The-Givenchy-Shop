const product= [
    {
    id: 0,
    image:'images/item1.webp',
    title: 'U Lock Ring',
    price: 499,
},
{
    id: 1,
    image:'images/item2.webp',
    title: 'G Link Bracelet',
    price: 399,
},
{
    id: 2,
    image:'images/item3.webp',
    title: 'G Chain',
    price: 659,
},
{
    id: 3,
    image:'images/item4.webp',
    title: '4G Earrings',
    price: 479,
},
{
    id: 4,
    image:'images/item5.webp',
    title: '4G Pearl Earcuff',
    price: 549,
},
{
    id: 5,
    image:'images/item6.webp',
    title: 'Lock 4G Necklace',
    price: 999,
},
];
const categories= [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class= 'box'>
            <div class='img-box'>
                <img class= 'images' src= ${image}></img>
        </div>
        <div class = 'bottom'>
        <p>${title}</p>
        <h2>P ${price}</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to Cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if(cart.lenght==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty"
        document.getElementById('total').innerHTML = "P" + 0 + ".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price}= items;
            total=total+price;
            document.getElementById("total").innerHTML = "P" + total + ".00";
            return(
                `<div class= 'cart-item'>
                <div class= 'row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>P${price}.00</h2>`+
                "<i class='fa-solid fa-trash'onclick='delElement("+ (j++) + ")'></i></div>"
            );
        }).join('');
    }
}