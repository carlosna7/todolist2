export default class Item {
    constructor(id, content) {
        this.elements = {};
		this.elements.root = Item.createRoot();
        this.elements.input = this.elements.root.querySelector(".kanban-item-input");

        this.elements.root.dataset.id = id;
		this.elements.input.textContent = content;
		this.content = content;
    }

    static createRoot() {
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(`
            <div class="kanban-item" draggable="true">
                <div class="kanban-item-input" contenteditable></div>
            </div> 
        `).children[0];
    }
}