// get value from input id
function getValueFromId(id, isInputField) {
  let idValue = document.getElementById(id);

  if (isInputField) {
    idValue = parseFloat(idValue.value);
  } else {
    idValue = parseFloat(idValue.innerText);
  }
  // check error input
  if (idValue > 0) {
    return idValue;
  } else {
    console.log(idValue);
    alert("Invalid Amount at " + id);
    return 0;
  }
}
// calculate total expense
function calculateExpense(expenceSetTo) {
  const foodCost = getValueFromId("food-exp", true);
  const rentCost = getValueFromId("rent-exp", true);
  const clothCost = getValueFromId("cloths-exp", true);

  const totalExpense = foodCost + rentCost + clothCost;
  // set result into total expense field
  document.getElementById(expenceSetTo).innerText = totalExpense;
  return totalExpense;
}
// update main balance
function updateBalance(value1, value2, updateId) {
  const remaining = value1 - value2;
  // handle large expense value
  if (value1 >= value2) {
    document.getElementById(updateId).innerText = remaining;
  } else {
    alert("Please reduce expense or Increase your income!!");
  }
}
// update remaining balance
function updateRemainingBalance() {
  // get value of remaining and saving balance
  const remainingBalance = getValueFromId("balance", false);
  const savingBalance = getValueFromId("saving-amount", false);
  //call update balance for save the remaining
  updateBalance(remainingBalance, savingBalance, "remaining-balance");
}

// add event to main balance calculation
document.getElementById("calculate-btn").addEventListener("click", function () {
  const mainBalance = getValueFromId("income", true);
  const expense = calculateExpense("total-expense");
  updateBalance(mainBalance, expense, "balance");
});
// add event to saving balance calculation
document.getElementById("save-btn").addEventListener("click", function () {
  const balance = getValueFromId("income", true);
  const savePercent = getValueFromId("save-percent", true);
  const savingAmount = balance * (savePercent / 100);
  if (balance >= savingAmount) {
    document.getElementById("saving-amount").innerText =
      savingAmount.toFixed(2);
    updateRemainingBalance();
  } else {
    alert("Please reduce saving amount");
  }
});
