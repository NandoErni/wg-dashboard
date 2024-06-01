import {
  FlexSpreadList,
  Title,
  TempElement,
} from "../components/Helper/HelperComponents";

const TimetablePage = () => {
  return (
    <FlexSpreadList>
      <Title>Zeitplan</Title>
      <TempElement>19:00 Start</TempElement>
      <TempElement>19:00 Karaoke beginn</TempElement>
      <TempElement>20:00 Kräutersepp Degustation</TempElement>
      <TempElement>21:00 Champions league</TempElement>
      <TempElement>23:15 Siegerehrung best cup</TempElement>
      <TempElement>23:30 Wurzelsepp degustation</TempElement>
    </FlexSpreadList>
  );
};

export default TimetablePage;
