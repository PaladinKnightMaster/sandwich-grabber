// @ts-ignore























// ANCHOR main functions 
let Sandis = 0

const theDog = [
  {
    name: "Jake The Dog",
    sandwhiches: 0,
    pic: 'https://66.media.tumblr.com/3c26e4b066493b035d955c2b36cebcb8/tumblr_mtjqvtka4z1rfjowdo1_500.gif',



  }
]

function grabSandwich() {
  Sandis++
  console.log("sandis grabbed")
  drawSandis()
}

function drawSandis() {
  // @ts-ignore
  document.getElementById('Sandis').innerHTML
    = `
    <div>
    <h1 class="text-light">${Sandis}</h1>
    </div>`
}





// ANCHOR Upgrades

const Comps = [
  {
    name: "Finn",
    type: "extra clicker",
    cost: 1,
    value: + 2,
    quantity: 0,
    Maxquantity: 5,
  }
]



function buyComp() {
  const boughtComp = Comps.find(Comps => Comps.name == Comps.name)
  console.log(boughtComp);
  // @ts-ignore
  if (Sandis >= boughtComp.cost) {
    // @ts-ignore
    Sandis -= boughtComp.cost
    // @ts-ignore
    boughtComp.Maxquantity += boughtComp.quantity
    console.log(Sandis)

  }
  drawSandis()
}














