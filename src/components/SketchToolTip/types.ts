import type { Placement } from '@popperjs/core';
import type { Ref } from 'vue';

export interface SketchToolTipProps {
  content?: string;
  trigger?: 'hover' | 'click';
  manual?: boolean;
  placement?: Placement;
  delay?: number;
  transition?: string;
  closeDelay?: number;
}

export interface SketchToolTipEmits {
  (e: 'visible-change', value: boolean): void;
}

export interface SketchToolTipInstance {
  show: () => void;
  hide: () => void;
  isShow: Ref<boolean>;
}
