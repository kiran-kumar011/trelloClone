let rootElement = document.querySelector(".container");


class Board {
	constructor(element, text) {
		this.element = element;
		this.boardHeader = text;
		// this.id = Date.now();
		this.lists = [];
	}

	createListAdd(input) {
		if(input.value){
			var name = input.value;
			let list = new List(this.element, name);
			this.lists.push(list);
			input.value = "";
			this.displayBoard();
		}
	}

	closeInput(addList) {
		addList.innerHTML = "";
		addList.classList.add("addListContainer");
		addList.classList.remove("addListReplaced");
		let addListBtn = document.createElement("BUTTON");
		addListBtn.textContent = "+Add A List";
		addList.appendChild(addListBtn);
		this.element.appendChild(addList);
		addListBtn.addEventListener("click", () => this.replaceAddList(addList));
	}

	// replacing add a list with input.
	replaceAddList(addList) {
		// console.log("replacadd")
		addList.classList.add("addListReplaced");
		addList.classList.remove("addListContainer");
		let input = document.createElement("INPUT");
		input.classList.add("addListInput");
		input.setAttribute("placeholder", "add List");
		let button = document.createElement("BUTTON");
		button.classList.add("addListButton");
		button.textContent = "Add";
		let close = document.createElement("SPAN");
		close.innerHTML = `<i class="fas fa-times"></i>`;
		addList.innerHTML = "";
		addList.appendChild(input);
		close.addEventListener("click", () => this.closeInput(addList))
		button.addEventListener("click",() => this.createListAdd(input));
		addList.appendChild(button);
		addList.appendChild(close);
	}

	// display new board.
	displayBoard() {
		this.element.innerHTML = "";
		const h1 = document.createElement("H1");
		h1.textContent = this.boardHeader;
		h1.innerHTML += `<i class="far fa-star"></i>`; 
		this.element.appendChild(h1);
		let addList = document.createElement("DIV");
		this.lists.forEach(val => {
			val.displayList(this, val.listHeader);
		})
		addList.classList.add("addListContainer");
		let addListBtn = document.createElement("BUTTON");
		addListBtn.textContent = "+Add A List";
		addList.appendChild(addListBtn);
		this.element.appendChild(addList);
		addListBtn.addEventListener("click", () => this.replaceAddList(addList));
	}
}


class List {
	constructor(elm, text) {
		this.listHeader = text;
		this.cards = [];
		this.elem = elm;
		console.log(elm);
	}
	createCardAdd(input, addCardText) {
		console.log(this.cards);
		if(input.value.trim("")){
			var name = input.value;
			this.cards.push(name);
			input.value = "";
			this.displayList();
			board1.displayBoard();
		}
	}
	displayList() {
		const addCard = document.createElement("DIV");
		const h2 = document.createElement("H2");
		h2.textContent = this.listHeader;
		addCard.appendChild(h2);
		this.cards.forEach(val => {
			console.log(val, this);
			var card = new Card(addCard, val);
			card.displayCard(val);
		})
		const addCardText = document.createElement("DIV");
		addCardText.classList.add("addCardText");
		const para = document.createElement("P");
		addCard.classList.add("addCard");
		para.textContent = "+Add Card...";
		para.addEventListener("click", () => this.replaceAddCard(addCardText, addCard));
		addCard.appendChild(addCardText);
		addCardText.appendChild(para);
		this.elem.appendChild(addCard);
	}
	replaceAddCard(addCardText, addCard) {
		// console.log(addCardText, addCard,"hel")
		// let div = document.createElement("DIV");
		let input = document.createElement("INPUT");
		input.classList.add("addCardInput");
		input.setAttribute("placeholder", "add card");
		let button = document.createElement("BUTTON");
		button.classList.add("addListButton");
		button.textContent = "Add";
		let close = document.createElement("SPAN");
		close.innerHTML = `<i class="fas fa-times"></i>`;
		addCardText.innerHTML = "";
		addCardText.appendChild(input);
		button.addEventListener("click",() => this.createCardAdd(input,addCardText, addCard));
		addCardText.appendChild(button);
		addCardText.appendChild(close);
	}
}

class Card {
	constructor(element, text) {
		this.card = text;
		this.element = element;
	}

	displayCard() {
		const div = document.createElement("div");
		const span = document.createElement("p");
		div.classList.add("card");
		span.textContent = this.card;
		div.appendChild(span);
		this.element.appendChild(div);
	}
}


let board1 = new Board(rootElement, "Board1");
board1.displayBoard();





