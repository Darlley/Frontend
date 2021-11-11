const btn = window.document.querySelector('[data-js="input"]');
btn.addEventListener("click", () => {
  window.document.body.classList.toggle("dark-theme");
});

const $htmlModal = window.document.querySelector('[data-js="modal"]');
const $btnNewTransaction = window.document.querySelector(
  '[data-js="new-transaction"]'
);
$btnNewTransaction.addEventListener("click", (event) => {
  event.preventDefault();
  $htmlModal.classList.add("active");

  if ($htmlModal.classList.value == "modal-overlay active") {
    document.addEventListener("click", (event) => {
      if (event.target.classList.value === "modal-overlay active") {
        $htmlModal.classList.remove("active");
      }
    });
  } // Fechar quando clicar fora da caixa
});

const $btnCancelTransaction = window.document.querySelector(
  '[data-js="cancel-transaction"]'
);
$btnCancelTransaction.addEventListener("click", (event) => {
  event.preventDefault();
  $htmlModal.classList.remove("active");
});

// LocalStorage

const Storage = {
  get(){
    return JSON.parse(localStorage.getItem("DevFinances:transactions")) || []
    // Transforma strings em array
  },
  set(transactions){
    localStorage.setItem("DevFinances:transactions", JSON.stringify(transactions))
    // Transforma objeto em string
  }
}

// Cadastrar dados

const Transaction = {
  all: Storage.get(),
  
  /*[
    {
      description: "Luz",
      amount: -50000,
      date: "23/01/2021",
    },
    {
      description: "Website",
      amount: 500000,
      date: "23/01/2021",
    },
    {
      description: "Internet",
      amount: -20000,
      date: "23/01/2021",
    },
  ],*/

  add(transaction) {
    Transaction.all.push(transaction);
    App.reload();
  },

  remove(index) {
    Transaction.all.splice(index, 1);
    App.reload();
  },

  incomes() {
    let income = 0;
    Transaction.all.forEach((transaction) => {
      if (transaction.amount > 0) {
        income += transaction.amount;
      }
    });
    return income;
  },

  expenses() {
    let expense = 0;
    Transaction.all.forEach((transaction) => {
      if (transaction.amount < 0) {
        expense += transaction.amount;
      }
    });
    return expense;
  },

  total() {
    return Transaction.incomes() + Transaction.expenses();
  },
};

const DOM = {
  transactionsContainer: document.querySelector("#data-table tbody"),

  addTransaction(transaction, index) {
    //console.log(transaction[index].description)
    const tr = document.createElement("tr");
    tr.insertAdjacentHTML("afterbegin", DOM.innerHTMLTransaction(transaction, index));
    tr.dataset.index = index
    DOM.transactionsContainer.appendChild(tr);
  },

  innerHTMLTransaction(transaction, index) {
    const ClassName = transaction.amount > 0 ? "income" : "expanse";

    const amount = Utils.formatCurrency(transaction.amount);

    const $html = `
      <td class="description">${transaction.description}</td>
      <td class="${ClassName}">${amount}</td>
      <td class="date">${transaction.date}</td>
      <td>
          <img onClick="Transaction.remove(${index})" src="assets/minus.svg" alt="Remover transação">
      </td>
    `;

    return $html;
  },

  updateBalance() {
    document.querySelector('[data-js="income-display"]').textContent =
      Utils.formatCurrency(Transaction.incomes());
    document.querySelector('[data-js="expanse-display"]').textContent =
      Utils.formatCurrency(Transaction.expenses());
    document.querySelector('[data-js="total-display"]').textContent = Utils.formatCurrency(Transaction.total());
    
    const total = document.querySelector('.card:nth-of-type(3)') // Mudar cor do card total
    if(Transaction.total() >= 0){
      !total.classList.contains('total') && total.classList.add('total')
      total.classList.contains('negative') && total.classList.remove('negative')
    }else{
      total.classList.add('negative')
      total.classList.remove('total')
    }
  },

  clearTransactions() {
    DOM.transactionsContainer.innerHTML = "";
  },
};

const Utils = {
  formatAmount(value) {
    value = Number(value.replace(/\,\./g, "")) * 100;
    return value;
  },
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : "";
    value = String(value).replace(/\D/g, "");
    value = Number(value) / 100;
    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return signal + value;
  },
  formatDate(date) {
    const splittedDate = date.split("-");
    return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]} `;
  },
};

const Form = {
  description: document.querySelector("input#description"),
  amount: document.querySelector("input#amount"),
  date: document.querySelector("input#date"),

  getValues() {
    return {
      description: Form.description.value,
      amount: Form.amount.value,
      date: Form.date.value,
    };
  },
  formatData() {
    console.log("formatar");
  },
  validateFields() {
    const { description, amount, date } = Form.getValues();
    if (
      description.trim() === "" ||
      amount.trim() === "" ||
      date.trim() === ""
    ) {
      throw new Error("Preencha todos os campos!");
    }
  },
  formatValues() {
    let { description, amount, date } = Form.getValues();
    amount = Utils.formatAmount(amount);
    date = Utils.formatDate(date);

    return {
      description,
      amount,
      date,
    };
  },

  /*saveTransaction(transaction){
            Transaction.add(transaction)
        },*/

  clearFields() {
    Form.description.value = "";
    Form.amount.value = "";
    Form.date.value = "";
  }, // Limpar os campos

  submit(event) {
    event.preventDefault();

    try {
      Form.validateFields(); // verificar se os campos estão preenchidos corretamente
      const transaction = Form.formatValues(); // Formatação dos valores
      Transaction.add(transaction); // Adicionar transação na tabela
      Form.clearFields(); // Limpar os campos do modal
      $htmlModal.classList.remove("active"); // Fechar modal
    } catch (error) {
      alert(error.message);
    }
  },
};

const App = {
  init() {
    Transaction.all.forEach((transaction, index) => DOM.addTransaction(transaction, index));
    DOM.updateBalance();

    Storage.set(Transaction.all)
  },
  reload() {
    DOM.clearTransactions();
    App.init();
  },
};
App.init();
