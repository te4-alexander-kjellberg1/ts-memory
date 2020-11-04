import { Game } from "./Game";
const container = document.querySelector("div.playgrid");

if (container) {
    new Game(container).run();
}
