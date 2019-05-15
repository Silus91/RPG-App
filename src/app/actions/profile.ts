import { CHANGE_STAT } from "./types";
import { Action } from "redux";

export interface ChangeStat extends Action {
  stat:{[stat:string]:number};
}

export const changeStat = (stat:{[stat:string]:number}):ChangeStat => {
  return {
    stat,
    type: CHANGE_STAT,
  }
};