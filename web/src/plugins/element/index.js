import Vue from "vue";
import {
  Container,
  Aside,
  Header,
  Main,
  Menu,
  Submenu,
  MenuItem,
  Form,
  FormItem,
  Table,
  TableColumn,
  Input,
  Button,
  Card,
  Message,
  MessageBox,
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.component(Container.name, Container);
Vue.component(Aside.name, Aside);
Vue.component(Header.name, Header);
Vue.component(Main.name, Main);
Vue.component(Menu.name, Menu);
Vue.component(Submenu.name, Submenu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Card.name, Card);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
