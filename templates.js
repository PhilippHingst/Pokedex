function generateStatsContent(){
    return /*html*/`<div class="about-card">
    <table class="table table-borderless">
      <tbody>
        <thead><b>Base Stats</b></thead>
        <tr>
          <td>HP</td>
          <td>
            <div class="progress">
              <div class="progress-bar progress-hp" role="progressbar" aria-valuenow="40" aria-valuemin="0"
                aria-valuemax="100" style="width: ${statOfHP}%">
                ${statOfHP}
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Attack</td>
          <td>
            <div class="progress">
              <div class="progress-bar progress-attack" role="progressbar" aria-valuenow="100" aria-valuemin="0"
                aria-valuemax="100" style="width: ${statOfAttack}%">
                ${statOfAttack}
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Defense</td>
          <td>
            <div class="progress">
              <div class="progress-bar progress-def" role="progressbar" aria-valuenow="40" aria-valuemin="0"
                aria-valuemax="100" style="width: ${statOfDef}%">
                ${statOfDef}
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Special-Attack</td>
          <td>
            <div class="progress">
              <div class="progress-bar progress-spec-attack" role="progressbar" aria-valuenow="40" aria-valuemin="0"
                aria-valuemax="100" style="width: ${statOfSpecAttack}%">
                ${statOfSpecAttack}
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Special-Defense</td>
          <td>
            <div class="progress">
              <div class="progress-bar progress-spec-def" role="progressbar" aria-valuenow="40" aria-valuemin="0"
                aria-valuemax="100" style="width: ${statOfSpecDef}%">
                ${statOfSpecDef}
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Speed</td>
          <td>
            <div class="progress">
              <div class="progress-bar progress-speed" role="progressbar" aria-valuenow="40" aria-valuemin="0"
                aria-valuemax="100" style="width: ${statOfSpeed}%">
                ${statOfSpeed}
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>`;
  }