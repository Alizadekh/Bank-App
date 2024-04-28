const moneyInput = document.querySelector("#moneyInput");
const income = document.querySelector("#incrementBtn");
const withdraw = document.querySelector("#decrementBtn");
const showReceipt = document.querySelector("#showReceipt");
const list = document.querySelector("#list");
const balanceInfo = document.querySelector(".balanceInfo");
const historyForReciept = document.querySelector(".history");
const receipt = document.querySelector(".receipt");
const closeBtn = document.querySelector(".close");

// Values
let balance = 0;
let id = 1;

// Increment functionality
income.addEventListener("click", function () {
  const zaman = new Date();
  var tarix =
    zaman.getFullYear() + "-" + (zaman.getMonth() + 1) + "-" + zaman.getDate();
  var saat =
    zaman.getHours() + ":" + zaman.getMinutes() + ":" + zaman.getSeconds();
  let yekunVaxt = tarix + " " + saat;

  balance = balance + parseFloat(moneyInput.value);
  id = id + 1;
  //   console.log(balance);
  list.innerHTML += `
            <tr>
            <td scope="col">${id}</td>
            <td scope="col">Income</td>
            <td scope="col">+<span>${moneyInput.value}</span> $</td>
            <td scope="col"><span>${balance}</span> $</td>
            <td scope="col">${yekunVaxt}</td>
          </tr>
  `;
  historyForReciept.innerHTML += `
          <ul class="historyList m-2" style="list-style: none">
            <li style="list-style: circle">User: Aykhan</li>
            <li>Amount: +${moneyInput.value}</li>
            <li>Type: Income</li>
            <li>Date: ${yekunVaxt}</li>
            <hr />
          </ul>`;
});

// Decrement Functionality
withdraw.addEventListener("click", function () {
  if (balance < moneyInput.value) {
    balanceInfo.textContent = `Balance is not enough, current balance : ${balance}`;
    balanceInfo.style.display = "block";
  } else {
    balanceInfo.style.display = "none";
    const zaman = new Date();
    var tarix =
      zaman.getFullYear() +
      "-" +
      (zaman.getMonth() + 1) +
      "-" +
      zaman.getDate();
    var saat =
      zaman.getHours() + ":" + zaman.getMinutes() + ":" + zaman.getSeconds();
    let yekunVaxt = tarix + " " + saat;

    balance = balance - parseFloat(moneyInput.value);
    id = id + 1;
    //   console.log(balance);
    list.innerHTML += `
            <tr>
            <td scope="col">${id}</td>
            <td scope="col">Withdraw</td>
            <td scope="col">-<span>${moneyInput.value}</span> $</td>
            <td scope="col"><span>${balance}</span> $</td>
            <td scope="col">${yekunVaxt}</td>
          </tr>
  `;
    historyForReciept.innerHTML += `
          <ul class="historyList m-2" style="list-style: none">
            <li style="list-style: circle">User: Aykhan</li>
            <li>Amount: -${moneyInput.value}</li>
            <li>Type: Withdraw</li>
            <li>Date: ${yekunVaxt}</li>
            <hr />
          </ul>`;
  }
});

// Show and close receipt window
showReceipt.addEventListener("click", function () {
  receipt.style.display = `block`;
});
closeBtn.addEventListener("click", function () {
  receipt.style.display = `none`;
});
