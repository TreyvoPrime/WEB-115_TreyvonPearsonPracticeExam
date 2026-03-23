//Pre variable assignment
const incomeInput = document.getElementById("monthly_income")
const expenseInput = document.getElementById("monthly_expense")
const parentDiv = document.getElementById("budgetResults")
const calculateBudget = document.getElementById("calculateBudget")
const month_number = document.getElementById("months")
const month_table = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November", "December"]

function DisplayResults() {
    //Assign and create variables
    
    budgetResults.innerHTML = ""
    const monthly_income = Number(incomeInput.value)
    const monthly_expense = Number(expenseInput.value)
    const months = Number(month_number.value)
    try {
        if (isNaN(monthly_income) || isNaN(monthly_expense) || isNaN(months)) {
            window.alert("WARNING: Non-numeric value entered.")
            return
        }
    }
    catch (err) {
        window.alert("WARNING: Non-numeric value entered.")

    }
    const monthly_savings = monthly_income - monthly_expense

    const total_savings = monthly_savings * months

    const monthly_income_p = document.createElement("p")
    const monthly_expense_p = document.createElement("p")
    const total_savings_p= document.createElement("p")

//Change text with textContent
    monthly_income_p.textContent = `Your monthly income is: ${monthly_income.toFixed(2)}`
    monthly_expense_p.textContent = `Your monthly expense is: ${monthly_expense.toFixed(2)}`
    total_savings_p.textContent = `Projected Savings: ${total_savings.toFixed(2)}`

    console.log(monthly_income, monthly_expense)
    parentDiv.appendChild(monthly_income_p)

    parentDiv.appendChild(monthly_expense_p)
    parentDiv.appendChild(total_savings_p)


//Loop through months table and amount of months 
    if (months <= 12) {
        for (let i = 0; i < months; i++) {
            const month = month_table[i]
            const savings = monthly_income - monthly_expense
            const savings_p = document.createElement("p")
            savings_p.textContent = `Month: ${month} - Savings: ${savings}`
            if (monthly_savings < 0) {
                window.alert("Warning: Spending exceeds income!")
            }
            budgetResults.appendChild(savings_p)
        }
        parentDiv.appendChild(total_savings_p)
    } else {
        window.alert("Maximum number of month exceeded")
    }

}
calculateBudget.addEventListener("click",DisplayResults)
