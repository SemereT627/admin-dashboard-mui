import { Container } from "@material-ui/core";
import Page from "../../components/Page";
import useSettings from "../../hooks/useSettings";

export default function DashboardApp() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Dashboard: App | WG Admin">
      <Container maxWidth={themeStretch ? false : "xl"}></Container>
    </Page>
  );
}
