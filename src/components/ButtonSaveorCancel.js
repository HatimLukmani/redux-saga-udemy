import { Button } from "semantic-ui-react";

export default function ButtonSaveorCancel() {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Close</Button>
      <Button.Or></Button.Or>
      <Button type="submit">Save</Button>
    </Button.Group>
  );
}
