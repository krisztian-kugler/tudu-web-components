export class DragDropService {
  private placeholder: any = document.createElement("tudu-placeholder");

  defineDropzone(element: HTMLElement) {
    element.setAttribute("tudu-dropzone", "");
  }

  defineDraggable(element: HTMLElement) {
    element.setAttribute("tudu-draggable", "");

    let currentDropzone: HTMLElement;
    let dragging = false;
    let dragged = false;
    const startPosition = { x: 0, y: 0 };
    const dragPosition = { x: 0, y: 0 };

    const onMouseDown = (event: MouseEvent) => {
      if (event.which === 1) {
        dragging = true;
        startPosition.x = event.clientX;
        startPosition.y = event.clientY;
        currentDropzone = element.closest(`[tudu-dropzone]`);
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      if (dragging) {
        if (!dragged) {
          const elementRect = element.getBoundingClientRect();
          element.parentElement.replaceWith(this.placeholder);
          element.style.position = "fixed";
          element.style.left = `${elementRect.left}px`;
          element.style.top = `${elementRect.top}px`;
          document.body.append(element);
        }

        dragged = true;
        dragPosition.x = event.clientX - startPosition.x;
        dragPosition.y = event.clientY - startPosition.y;
        element.style.transform = `translate(${dragPosition.x}px, ${dragPosition.y}px)`;
        const preservedDisplay = getComputedStyle(element).display;
        element.style.display = "none";
        const elementBelow = document.elementFromPoint(event.clientX, event.clientY) as HTMLElement;
        const dropzone = elementBelow.closest(`[tudu-dropzone]`) as HTMLElement;
        const cardSlot = elementBelow.closest(".card-slot");

        if (dropzone) {
          if (dropzone === currentDropzone) {
            if (cardSlot) {
              const children = [...cardSlot.parentElement.children];
              const fromIndex = children.indexOf(this.placeholder);
              const toIndex = children.indexOf(cardSlot);

              toIndex > fromIndex
                ? cardSlot.insertAdjacentElement("afterend", this.placeholder)
                : cardSlot.insertAdjacentElement("beforebegin", this.placeholder);
            }
          } else {
            currentDropzone = dropzone;

            if (!elementBelow.closest(".card-list")) {
              const cardList = currentDropzone.querySelector(".card-list");
              const cardListRect = cardList.getBoundingClientRect();

              if (event.clientY < cardListRect.top && cardList.firstElementChild !== this.placeholder) {
                cardList.insertAdjacentElement("afterbegin", this.placeholder);
              }

              if (event.clientY > cardListRect.bottom && cardList.lastElementChild !== this.placeholder) {
                cardList.insertAdjacentElement("beforeend", this.placeholder);
              }
            }
          }
        } else {
          currentDropzone = null;
        }

        element.style.display = preservedDisplay;
      }
    };

    const onMouseUp = () => {
      if (dragging) {
        dragging = false;
        dragPosition.x = 0;
        dragPosition.y = 0;
        element.removeAttribute("style");
        if (this.placeholder && dragged) {
          const cardSlot = document.createElement("div");
          cardSlot.classList.add("card-slot");
          cardSlot.append(element);
          this.placeholder.replaceWith(cardSlot);
        }
        dragged = false;
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      }
    };

    element.addEventListener("mousedown", onMouseDown);
  }
}
