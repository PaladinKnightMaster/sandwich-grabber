const FinnQuantityElem = document.getElementById('FinnQuantity')
const Sandis = document.getElementById('Sandis')
const BmoQuantityElem = document.getElementById('BmoQuantity')
const LumpsQuantityElem = document.getElementById('LumpsQuantity')
const FinnPriceElem = document.getElementById('FinnPrice')
const BmoPriceElem = document.getElementById('BmoPrice')
const LumpsPriceElem = document.getElementById('LumpsPrice')
const GunterQuantityElem = document.getElementById('GunterQuantity')

const GunterPriceElem = document.getElementById('GunterPrice')


// ANCHOR main functions 


const theDog = [
  {
    name: "Jake The Dog",
    Sandis: 0,
    pic: 'https://66.media.tumblr.com/3c26e4b066493b035d955c2b36cebcb8/tumblr_mtjqvtka4z1rfjowdo1_500.gif',



  }
]

function update() {
  // @ts-ignore
  FinnQuantityElem.innerText = Comps[0].quantity
  // @ts-ignore
  Sandis.innerhtml = theDog[0].Sandis
  // @ts-ignore
  BmoQuantityElem.innerText = Comps[1].quantity
  // @ts-ignore
  LumpsQuantityElem.innerText = Comps[2].quantity
  // @ts-ignore
  LumpsPriceElem.innerText = Comps[2].cost
  // @ts-ignore
  FinnPriceElem.innerText = Comps[0].cost
  // @ts-ignore
  BmoPriceElem.innerText = Comps[1].cost
  // @ts-ignore
  GunterPriceElem.innerText = Comps[3].cost
  // @ts-ignore
  GunterQuantityElem.innerText = Comps[3].quantity

}


function grabSandwich() {
  theDog[0].Sandis++

  console.log("sandis grabbed")
  applyClicker()
  drawSandis()
  update()
}

function drawSandis() {
  // @ts-ignore
  document.getElementById('Sandis').innerHTML
    = `
    <div>
    <h1 class="text-light">${theDog[0].Sandis}</h1>
    </div>`
}


// ANCHOR Upgrades

const Comps = [
  {
    name: "Finn",
    cost: 2,
    value: 2,
    quantity: 0,
    Maxquantity: 9,
    type: "extra clicker"
  },
  {
    name: "Bmo",
    cost: 4,
    value: 3,
    quantity: 0,
    Maxquantity: 5,
    type: "auto"
  },
  {
    name: "Lumps",
    cost: 10,
    value: 20,
    quantity: 0,
    Maxquantity: 2,
    type: "auto"
  },

  {
    name: "Gunter",
    cost: 100,
    value: 10,
    quantity: 0,
    Maxquantity: 1,
    type: "extra clicker"
  },

]

function Clicker(value) {
  theDog[0].Sandis += value


  update()
  drawSandis()
}


function autoClick(value) {
  theDog[0].Sandis += value
  update()
  drawSandis()
}



function buyComp(CompsName) {
  const boughtComp = Comps.find(Comps => Comps.name == CompsName)
  // @ts-ignore
  if (theDog[0].Sandis >= boughtComp.cost) {
    // @ts-ignore
    theDog[0].Sandis -= boughtComp.cost
    // @ts-ignore
    boughtComp.quantity++
    // @ts-ignore
    boughtComp.Maxquantity--
    // @ts-ignore
    boughtComp.cost++
    // @ts-ignore
    console.log(theDog[0].Sandis)
    drawSandis()
    console.log(Comps)
  }
  update()

}

function applyClicker() {
  Comps.forEach(Comps => {
    if (Comps.quantity > 0) {
      if (Comps.type == 'extra clicker') {
        Clicker(Comps.value)
      }
    }

    update()
  })
}



function applyComps() {
  Comps.forEach(Comps => {
    if (Comps.quantity > 0) {
      if (Comps.type == 'auto') {
        // @ts-ignore
        autoClick(Comps.value)

      }
    }

    update()
  })
}



setInterval(applyComps, 3000)













