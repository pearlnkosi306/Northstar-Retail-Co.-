window.NORTHSTAR_DATA = {
  products: {
    "NS-1001": {
      id:"NS-1001", name:"Northstar T", type:"T-shirt", colour:"Midnight Navy",
      sizes:["S","M","L","XL"], image:"assets/products/northstar-t.svg",
      stock:{S:18,M:24,L:7,XL:0}, description:"Structured cotton T-shirt with a clean Northstar mark."
    },
    "NS-1002": {
      id:"NS-1002", name:"Northstar Core Hoodie", type:"Hoodie", colour:"Stone",
      sizes:["S","M","L","XL"], image:"assets/products/northstar-hoodie.svg",
      stock:{S:8,M:13,L:3,XL:0}, description:"Midweight everyday hoodie with a structured fit."
    },
    "NS-1003": {
      id:"NS-1003", name:"Northstar Motion", type:"T-shirt", colour:"Off White",
      sizes:["S","M","L","XL"], image:"assets/products/northstar-motion.svg",
      stock:{S:11,M:18,L:9,XL:4}, description:"Lightweight performance-inspired T-shirt."
    }
  },
  orders: {
    "NS1001": {
      verification:"714440059", status:"With Driver — In Transit", method:"Standard Delivery",
      eta:"18 August 2026", delivered:false
    },
    "NS1002": {
      verification:"757092013", status:"Delivered", method:"Standard Delivery",
      eta:"11 July 2026", delivered:true, daysSinceDelivery:35
    }
  }
};