import {
  getScroll,
  getScrollPosition,
} from './model/selectors/scrollRestorationSelectors';
import {
  scrollReducer,
  scrollActions,
} from './model/slices/scrollRestorationSlice';
import { IScrollRestorationSchema } from './model/types/scrollRestoration';

export {
  type IScrollRestorationSchema,
  getScroll,
  getScrollPosition,
  scrollReducer,
  scrollActions,
};
