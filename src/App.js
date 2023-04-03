import { Settings } from "@material-ui/icons";
import NotistackProvider from "./components/NotistackProvider";
import RtlLayout from "./components/RtlLayout";
import ThemeLocalization from "./components/ThemeLocalization";
import ThemePrimaryColor from "./components/ThemePrimaryColor";
import ThemeConfig from "./theme";
import ScrollToTop from "./components/ScrollToTop";
import Router from "./routes";

export default function App() {
  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <ThemeLocalization>
          <RtlLayout>
            <NotistackProvider>
              <Settings />
              <ScrollToTop />
              <Router />
            </NotistackProvider>
          </RtlLayout>
        </ThemeLocalization>
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}
