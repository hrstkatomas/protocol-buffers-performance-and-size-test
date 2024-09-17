// package: eventFeed.v1
// file: event.proto

import * as jspb from "google-protobuf";

export class Event extends jspb.Message {
  getHomeCurrentResult(): number;
  setHomeCurrentResult(value: number): void;

  getAwayCurrentResult(): number;
  setAwayCurrentResult(value: number): void;

  getLive(): string;
  setLive(value: string): void;

  getHomeRedCardCount(): number;
  setHomeRedCardCount(value: number): void;

  getAwayRedCardCount(): number;
  setAwayRedCardCount(value: number): void;

  getHasTvOrLivestreaming(): string;
  setHasTvOrLivestreaming(value: string): void;

  getInfoNotice(): string;
  setInfoNotice(value: string): void;

  getHasLiveBetting(): string;
  setHasLiveBetting(value: string): void;

  getPeriodStartUtime(): number;
  setPeriodStartUtime(value: number): void;

  getMatchEndUtime(): number;
  setMatchEndUtime(value: number): void;

  getPeriodUpdateUtime(): number;
  setPeriodUpdateUtime(value: number): void;

  getAssists(): number;
  setAssists(value: number): void;

  getHomeFullTimeResult(): number;
  setHomeFullTimeResult(value: number): void;

  getAwayFullTimeResult(): number;
  setAwayFullTimeResult(value: number): void;

  getHighlights(): string;
  setHighlights(value: string): void;

  getHasLiveCentre(): string;
  setHasLiveCentre(value: string): void;

  getHasLineups(): number;
  setHasLineups(value: number): void;

  getHasOddsComparison(): string;
  setHasOddsComparison(value: string): void;

  getFtWinner(): string;
  setFtWinner(value: string): void;

  getHomeResultPeriod1(): string;
  setHomeResultPeriod1(value: string): void;

  getAwayResultPeriod1(): string;
  setAwayResultPeriod1(value: string): void;

  getSourceTypeOfGame(): number;
  setSourceTypeOfGame(value: number): void;

  getHomeDrawParticipantWinner(): number;
  setHomeDrawParticipantWinner(value: number): void;

  getAwayDrawParticipantWinner(): number;
  setAwayDrawParticipantWinner(value: number): void;

  getHomeParticipantCountryId(): number;
  setHomeParticipantCountryId(value: number): void;

  getAwayParticipantCountryId(): number;
  setAwayParticipantCountryId(value: number): void;

  getOddsWinner(): number;
  setOddsWinner(value: number): void;

  getOddsTop10(): number;
  setOddsTop10(value: number): void;

  getOddsWinnerPrevious(): number;
  setOddsWinnerPrevious(value: number): void;

  getOddsTop10Previous(): number;
  setOddsTop10Previous(value: number): void;

  getInactiveOdds(): string;
  setInactiveOdds(value: string): void;

  getHomeScoresChanged(): number;
  setHomeScoresChanged(value: number): void;

  getAwayScoresChanged(): number;
  setAwayScoresChanged(value: number): void;

  getSwappedParticipants(): number;
  setSwappedParticipants(value: number): void;

  clearHomePenaltyShotList(): void;
  getHomePenaltyShotList(): Array<number>;
  setHomePenaltyShotList(value: Array<number>): void;
  addHomePenaltyShot(value: number, index?: number): number;

  clearAwayPenaltyShotList(): void;
  getAwayPenaltyShotList(): Array<number>;
  setAwayPenaltyShotList(value: Array<number>): void;
  addAwayPenaltyShot(value: number, index?: number): number;

  clearHomePenaltyMissedList(): void;
  getHomePenaltyMissedList(): Array<number>;
  setHomePenaltyMissedList(value: Array<number>): void;
  addHomePenaltyMissed(value: number, index?: number): number;

  clearAwayPenaltyMissedList(): void;
  getAwayPenaltyMissedList(): Array<number>;
  setAwayPenaltyMissedList(value: Array<number>): void;
  addAwayPenaltyMissed(value: number, index?: number): number;

  getOddsTop5(): number;
  setOddsTop5(value: number): void;

  getOddsTop5Previous(): number;
  setOddsTop5Previous(value: number): void;

  getIsValid(): boolean;
  setIsValid(value: boolean): void;

  getOriginalId(): string;
  setOriginalId(value: string): void;

  getLabelId(): string;
  setLabelId(value: string): void;

  getSportId(): string;
  setSportId(value: string): void;

  getSport(): string;
  setSport(value: string): void;

  getMatchStartUtime(): number;
  setMatchStartUtime(value: number): void;

  getEventStartUtime(): number;
  setEventStartUtime(value: number): void;

  getEventStageTypeId(): number;
  setEventStageTypeId(value: number): void;

  getEventStageTypeFromEventStageId(): number;
  setEventStageTypeFromEventStageId(value: number): void;

  getEventStageId(): number;
  setEventStageId(value: number): void;

  getSortParticipant(): string;
  setSortParticipant(value: string): void;

  getCricketVisibleRunRate(): number;
  setCricketVisibleRunRate(value: number): void;

  getGameTime(): string;
  setGameTime(value: string): void;

  getPlayingOnSets(): string;
  setPlayingOnSets(value: string): void;

  getCricketRecentOvers(): string;
  setCricketRecentOvers(value: string): void;

  getHome3charName(): string;
  setHome3charName(value: string): void;

  getHomeParticipantName(): string;
  setHomeParticipantName(value: string): void;

  getHomeFirstParticipantName(): string;
  setHomeFirstParticipantName(value: string): void;

  getHomeEventParticipantId(): string;
  setHomeEventParticipantId(value: string): void;

  getHomeGoalUnderReview(): number;
  setHomeGoalUnderReview(value: number): void;

  getBettingType(): string;
  setBettingType(value: string): void;

  getAway3charName(): string;
  setAway3charName(value: string): void;

  getAwayParticipantName(): string;
  setAwayParticipantName(value: string): void;

  getAwayFirstParticipantName(): string;
  setAwayFirstParticipantName(value: string): void;

  getAwayEventParticipantId(): string;
  setAwayEventParticipantId(value: string): void;

  getAwayGoalUnderReview(): number;
  setAwayGoalUnderReview(value: number): void;

  getOddsScope(): string;
  setOddsScope(value: string): void;

  getBookmakerListLiveInOffer(): string;
  setBookmakerListLiveInOffer(value: string): void;

  getSortKeyStr(): string;
  setSortKeyStr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    homeCurrentResult: number,
    awayCurrentResult: number,
    live: string,
    homeRedCardCount: number,
    awayRedCardCount: number,
    hasTvOrLivestreaming: string,
    infoNotice: string,
    hasLiveBetting: string,
    periodStartUtime: number,
    matchEndUtime: number,
    periodUpdateUtime: number,
    assists: number,
    homeFullTimeResult: number,
    awayFullTimeResult: number,
    highlights: string,
    hasLiveCentre: string,
    hasLineups: number,
    hasOddsComparison: string,
    ftWinner: string,
    homeResultPeriod1: string,
    awayResultPeriod1: string,
    sourceTypeOfGame: number,
    homeDrawParticipantWinner: number,
    awayDrawParticipantWinner: number,
    homeParticipantCountryId: number,
    awayParticipantCountryId: number,
    oddsWinner: number,
    oddsTop10: number,
    oddsWinnerPrevious: number,
    oddsTop10Previous: number,
    inactiveOdds: string,
    homeScoresChanged: number,
    awayScoresChanged: number,
    swappedParticipants: number,
    homePenaltyShotList: Array<number>,
    awayPenaltyShotList: Array<number>,
    homePenaltyMissedList: Array<number>,
    awayPenaltyMissedList: Array<number>,
    oddsTop5: number,
    oddsTop5Previous: number,
    isValid: boolean,
    originalId: string,
    labelId: string,
    sportId: string,
    sport: string,
    matchStartUtime: number,
    eventStartUtime: number,
    eventStageTypeId: number,
    eventStageTypeFromEventStageId: number,
    eventStageId: number,
    sortParticipant: string,
    cricketVisibleRunRate: number,
    gameTime: string,
    playingOnSets: string,
    cricketRecentOvers: string,
    home3charName: string,
    homeParticipantName: string,
    homeFirstParticipantName: string,
    homeEventParticipantId: string,
    homeGoalUnderReview: number,
    bettingType: string,
    away3charName: string,
    awayParticipantName: string,
    awayFirstParticipantName: string,
    awayEventParticipantId: string,
    awayGoalUnderReview: number,
    oddsScope: string,
    bookmakerListLiveInOffer: string,
    sortKeyStr: string,
  }
}

