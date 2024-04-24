import { Header } from "semantic-ui-react";

export default function MainHeader({ type, title }) {
  return <Header as={type}>{title}</Header>;
}
