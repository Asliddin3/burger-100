product = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kkal: 500,
        get Sum() {
            return this.amount * this.price
        },
        get kkalSumm() {
            return this.amount * this.kkal
        }
    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        kkal: 800,
        get Sum() {
            return this.amount * this.price
        },
        get kkalSumm() {
            return this.amount * this.kkal
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kkal: 1200,
        get Sum() {
            return this.amount * this.price
        },
        get kkalSumm() {
            return this.amount * this.kkal
        }
    },

}
const plusOrMinus =document.querySelectorAll(".main__product-btn")
for( let i = 0; i < plusOrMinus.length; i++){
    plusOrMinus[i].addEventListener('click',function (){
        count(this)
    })
}
function count(el) {
    let parent =el.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        num = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kkal = parent.querySelector('.main__product-kcall span'),
        attribute = el.getAttribute('data-symbol')
    if(attribute == '+' && product[parentId].amount < 30) {
        product[parentId].amount++
    } else if( attribute == '-' && product[parentId].amount > 0){
        product[parentId].amount--
    }
    num.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].Sum
    kkal.innerHTML = product[parentId].kkalSumm
}

const addCart = document.querySelector('.addCart'),
    receipt = document.querySelector('.receipt'),
    receiptWindow = document.querySelector('.receipt__window'),
    receiptWidowOut = document.querySelector('.receipt__window-out')

    
addCart.addEventListener('click',() =>{
    receipt.style = `display:flex`;
    setTimeout(()=> {
        receipt.style.opacity = '1'
        receiptWindow.style.top = '15%'
    }, 500);
    const productList = Object.values(product).filter(number => number.amount)
    let total =""
    let totalSum=0
    let totalKall=0
    for(let i = 0; i < productList.length ; i++){
        totalSum+=productList[i].Sum
        totalKall+=productList[i].kkalSumm
        if(productList[i].amount > 0 ){
            total += `
            <div class="product">
            <span>${i+1}</span>
            <div class="product__name">${productList[i].name}</div>
            <div class="product__amount">${productList[i].amount} x ${productList[i].price}=</div>
            <div class="product__price">${productList[i].Sum} Sum</div>
        </div>
            `
        }
        
    }
    total+=`
    <div class="product">
        <div class="product__name">Total sum</div>
        <div class="product__amount">${totalSum} Sum</div>
    </div>
    <div class="product">
        <div class="product__name">Total Kaloriya</div>
        <div class="product__amount">${totalKall} Kall</div>
    </div>
        `
    receiptWidowOut.innerHTML = total
})
const number=document.querySelector('.header__timer-extra'),
      color=document.querySelector('.header__timer'),
      payBtn=document.querySelector('.receipt__window-btn')

let numLev=0

function level(){
    var  r=Math.floor(Math.random()*256);
         g=Math.floor(Math.random()*256);
         b=Math.floor(Math.random()*256);
     
    if(numLev<60){
        number.innerHTML= numLev
        setTimeout(() => {
            level()
        },1000/80);
        numLev++
    } else if(numLev<=90){
        number.innerHTML= numLev
        setTimeout(() => {
            level()
        },1000/12);
        numLev++
    } else if(numLev<=100){
        number.innerHTML= numLev
        setTimeout(() => {
            level()
        },1000/5);
        numLev++
    }
    color.style.color=`rgb(${r},${g},${b})`
}
level()

const fotoBtn=document.querySelectorAll('.main__product-info'),
      exitBtn=document.querySelector('.close')
      
for(let i=0;i<fotoBtn.length;i++){
    fotoBtn[i].addEventListener('click',function () {
        photo(this)
    })
}
function photo(el){
    let parent = el.closest('.main__product'),
        foto = parent.querySelector('img'),
        srcArt = foto.getAttribute('src')

    let view = document.querySelector('.view'),
        viewimg =document.querySelector('.view>img')
      
    
    viewimg.setAttribute('src',`${srcArt}`)
    console.log(viewimg);
    console.log(foto);
    view.classList.add('active')
    
    let closeBtn=document.querySelector('.close')
    let klik=0
    closeBtn.addEventListener('click', ()=>{
       klik++
       if(klik==2){
        view.classList.remove('active')
       }
    })
}
