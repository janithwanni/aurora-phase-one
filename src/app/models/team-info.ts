export class TeamInfo {
  private static teamID: string = "empty";
  private static teamName: string = "empty";
  public static getTeamName(): string {
    return this.teamName;
  }
  public static setTeamName(teamName: string): void {
    this.teamName = teamName;
  }
  public static getTeamID(): string {
    return this.teamID;
  }
  public static setTeamID(teamID: string): void {
    this.teamID = teamID;
  }
}
