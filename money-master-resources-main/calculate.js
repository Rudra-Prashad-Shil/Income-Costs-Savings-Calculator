function gettingInputValueById(inputFieldId){
    const elementField = document.getElementById(inputFieldId);
    const elementFieldString = elementField.value;
    const elementFieldValue = parseFloat(elementFieldString);

    return elementFieldValue;
}

function gettingElementValueById(elementFieldId){
    const elementField = document.getElementById(elementFieldId);
    const elementFieldString = elementField.innerText;
    const elementFieldText = parseFloat(elementFieldString);

    return elementFieldText;
}

function settingValueById(elementId , value){
    const displayElement = document.getElementById(elementId);
    displayElement.innerText = value;
}



document.getElementById('btn-calculate').addEventListener('click',function(){
    const totalIncome = gettingInputValueById('income-field');
    const totalFoodCost = gettingInputValueById('food-field');
    const totalRentCost = gettingInputValueById('rent-field');
    const totalClothesCost = gettingInputValueById('clothes-field');

    const totalExpense = totalFoodCost + totalRentCost + totalClothesCost;
    const totalBalance = totalIncome - totalExpense;
    
    if(isNaN(totalBalance) || isNaN(totalExpense)){
        alert('Emply value is not Calculatable')
        return;
    }

    if(totalExpense>totalIncome){
        alert('Your Expense is More than Your Income. Work more! Earn More!');
        return;
    }

    settingValueById('total-expenses-display',totalExpense);
    settingValueById('balance-display',totalBalance);
})

document.getElementById('btn-save').addEventListener('click',function(){

    const totalBalance = gettingElementValueById('balance-display');

    if(totalBalance < 0){
        alert('Invalid Balance');
        return;
    }
    
    const savingPercentage = gettingInputValueById('saving-percentage-field');

    if(savingPercentage>0 && savingPercentage<100){
        const savingamount = totalBalance * (savingPercentage/100);
        settingValueById('saving-amount-display',savingamount);
        
        const remainingBalance = totalBalance - savingamount;
        
        settingValueById('remaining-balance-display',remainingBalance);
    }
    else{
        alert('Please Enter Valid Saving Percentage');
    }

})