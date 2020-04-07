import "./styles.scss";
import App from "./app/app";
import RootComponent from "./app/components/root.component";
import HeaderComponent from "./app/components/header/header.component";
import BoardComponent from "./app/components/board/board.component";
import ColumnComponent from "./app/components/board/column/column.component";
import CardComponent from "./app/components/board/column/card/card.component";

console.log("app started!");

App.components = [RootComponent, HeaderComponent, BoardComponent, ColumnComponent, CardComponent];
