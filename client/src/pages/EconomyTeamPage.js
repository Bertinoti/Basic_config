import { EconomyTeamProvider } from "../contexts/EconomyTeamContext";

import NavBar from "../components/NavBar";
import EconomyTeam from "../components/EconomyTeam";

export default function EconomyTeamPage() {
  return (
    <div>
      <NavBar />
      <EconomyTeamProvider>
        <EconomyTeam />
      </EconomyTeamProvider>
    </div>
  );
}
