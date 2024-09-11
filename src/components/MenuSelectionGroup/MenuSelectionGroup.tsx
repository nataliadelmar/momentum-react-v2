/* eslint-disable @typescript-eslint/ban-types */

import React, { ReactElement, useEffect, useMemo } from 'react';
import classnames from 'classnames';

import { STYLE } from './MenuSelectionGroup.constants';
import { Props } from './MenuSelectionGroup.types';
import './MenuSelectionGroup.style.scss';
import MenuItem from '../MenuItem';
import { SelectionManager, useMultipleSelectionState } from '@react-stately/selection';
import { useMenuSection } from '@react-aria/menu';

const MenuSelectionGroup = <T extends object>(props: Props<T>): ReactElement => {
  const { item, state, onAction } = props;

  const { collection: tree, selectionManager: menuSelectionManager } = state;

  const selectionState = useMultipleSelectionState(props);

  const selectionManager = useMemo(
    () => new SelectionManager(tree, selectionState),
    [tree, selectionState]
  );

  const newState = {
    ...state,
    selectionManager,
  };

  useEffect(() => {
    selectionManager.setFocused(menuSelectionManager.isFocused);
    selectionManager.setFocusedKey(menuSelectionManager.focusedKey);
  }, [menuSelectionManager.focusedKey, menuSelectionManager.isFocused]);

  const { itemProps, headingProps, groupProps } = useMenuSection({
    heading: item.rendered,
    'aria-label': item['aria-label'],
  });

  return (
    <div {...itemProps}>
      <ul {...groupProps}>
        {Array.from(item.childNodes).map((node) => {
          let item = <MenuItem key={node.key} item={node} state={newState} onAction={onAction} />;

          if (node.wrapper) {
            item = node.wrapper(item);
          }

          return item;
        })}
      </ul>
    </div>
  );
};

export default MenuSelectionGroup;
