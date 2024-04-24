import { Statistic } from "semantic-ui-react";
export default function DisplayBalance({
  size,
  color,
  textAlign,
  labels,
  value,
}) {
  return (
    <Statistic size={size} color={color} textAlign={textAlign}>
      <Statistic.Label>{labels}:</Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
}
