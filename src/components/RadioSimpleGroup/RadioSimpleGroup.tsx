import React, { FC } from 'react';
import classnames from 'classnames';
import { useRadioGroup } from '@react-aria/radio';
import { useRadioGroupState } from '@react-stately/radio';

import { STYLE } from './RadioSimpleGroup.constants';
import { RadioSimpleGroupProps } from './RadioSimpleGroup.types';
import './RadioSimpleGroup.style.scss';
import Text, { TEXT_CONSTANTS } from '../Text';

/**
 * The RadioSimpleGroup component.
 */
export const RadioSimpleGroupContext = React.createContext(null);

const RadioSimpleGroup: FC<RadioSimpleGroupProps> = (props: RadioSimpleGroupProps) => {
  const { className, description, id, label, children, style } = props;

  const state = useRadioGroupState(props);
  const { radioGroupProps, labelProps } = useRadioGroup(props, state);

  return (
    <div
      {...radioGroupProps}
      className={classnames(className, STYLE.wrapper)}
      id={id}
      style={style}
    >
      <span {...labelProps}>{label}</span>
      {description && <Text type={TEXT_CONSTANTS.TYPES.BODY_SECONDARY}>{description}</Text>}
      <RadioSimpleGroupContext.Provider value={state}>{children}</RadioSimpleGroupContext.Provider>
    </div>
  );
};

export default RadioSimpleGroup;
