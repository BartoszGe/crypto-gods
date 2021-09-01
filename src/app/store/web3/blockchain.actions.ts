import {createAction, props} from '@ngrx/store';
import {GodModel} from "../../main-page/god/god.model";


export const saveWeb3 = createAction('[Blockchain] create web3 object', props<{web3: any}>());
