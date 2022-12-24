import App from "./App.svelte";

const ID = "about";
let wrapperElement: HTMLElement;

(window as any)[ID] = {
  id: ID,
  mount(wrapper: HTMLElement, props: Record<string, any>) {
    if (wrapperElement) wrapper.innerHTML = "";
    wrapperElement = wrapper;

    new App({
      target: wrapper,
      props,
    });

    console.log(`[${ID}]: Mounted/Updated!`);
  },
  unmount() {
    if (wrapperElement) wrapperElement.innerHTML = "";
    console.log(`[${ID}]: Unmounted!`);
  },
};
