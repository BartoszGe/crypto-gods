import {createAction, props} from '@ngrx/store';
import {GodModel} from "../../main-page/god/god.model";


export const saveGods = createAction('[God] Update from blockchain', props<{gods: GodModel[]}>());
