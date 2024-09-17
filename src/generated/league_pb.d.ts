// package: eventFeed.v1
// file: league.proto

import * as jspb from "google-protobuf";
import * as event_pb from "./event_pb";

export class League extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getTemplateId(): string;
  setTemplateId(value: string): void;

  getCountryId(): string;
  setCountryId(value: string): void;

  getCountryName(): string;
  setCountryName(value: string): void;

  getId(): string;
  setId(value: string): void;

  getTemplateType(): string;
  setTemplateType(value: string): void;

  getTournamentDi(): string;
  setTournamentDi(value: string): void;

  getSourceType(): string;
  setSourceType(value: string): void;

  getHasLiveTable(): string;
  setHasLiveTable(value: string): void;

  getStatType(): string;
  setStatType(value: string): void;

  getTemplateKey(): string;
  setTemplateKey(value: string): void;

  getSportStageType(): string;
  setSportStageType(value: string): void;

  getTemplateUrl(): string;
  setTemplateUrl(value: string): void;

  getImage(): string;
  setImage(value: string): void;

  getSortKey(): string;
  setSortKey(value: string): void;

  getStageCount(): string;
  setStageCount(value: string): void;

  getHasStandingsStage(): string;
  setHasStandingsStage(value: string): void;

  getCategoryCaption(): string;
  setCategoryCaption(value: string): void;

  getDisplay(): boolean;
  setDisplay(value: boolean): void;

  getGCount(): number;
  setGCount(value: number): void;

  getSportId(): string;
  setSportId(value: string): void;

  getSport(): string;
  setSport(value: string): void;

  getIsValid(): boolean;
  setIsValid(value: boolean): void;

  clearEventsList(): void;
  getEventsList(): Array<event_pb.Event>;
  setEventsList(value: Array<event_pb.Event>): void;
  addEvents(value?: event_pb.Event, index?: number): event_pb.Event;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): League.AsObject;
  static toObject(includeInstance: boolean, msg: League): League.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: League, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): League;
  static deserializeBinaryFromReader(message: League, reader: jspb.BinaryReader): League;
}

export namespace League {
  export type AsObject = {
    name: string,
    templateId: string,
    countryId: string,
    countryName: string,
    id: string,
    templateType: string,
    tournamentDi: string,
    sourceType: string,
    hasLiveTable: string,
    statType: string,
    templateKey: string,
    sportStageType: string,
    templateUrl: string,
    image: string,
    sortKey: string,
    stageCount: string,
    hasStandingsStage: string,
    categoryCaption: string,
    display: boolean,
    gCount: number,
    sportId: string,
    sport: string,
    isValid: boolean,
    eventsList: Array<event_pb.Event.AsObject>,
  }
}

