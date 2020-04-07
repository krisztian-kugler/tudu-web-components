import "./styles.scss";
import App from "./app/app";
import RootComponent from "./app/components/root.component";
import HeaderComponent from "./app/components/header/header.component";
import ColumnComponent from "./app/components/column/column.component";

console.log("app started!");

App.components = [RootComponent, HeaderComponent, ColumnComponent];
