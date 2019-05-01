import { CHANGE_STAT } from "app/actions/types";
import { ChangeStat } from '../actions/profile'; 

export interface ProfileState {
  hp:number;
  exp: number;
  gold:number
}

const initialState: ProfileState = {
  hp:0,
  exp: 0,
  gold: 0
}



export default function(state = initialState, action:ChangeStat) {
  switch(action.type){
    case CHANGE_STAT:
     return { ...state, ...action.stat }
      default: 
      return state
  }
}