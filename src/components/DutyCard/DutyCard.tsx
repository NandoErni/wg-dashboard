import { Title, Name, Card, Icon } from "./Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DutyCard = (props: any) => {
  return (
    <Card>
      <Icon>
        <FontAwesomeIcon icon={props.icon} />
      </Icon>
      <Title>{props.dutyName}</Title>
      <Name>{props.name}</Name>
    </Card>
  );
};

export default DutyCard;
