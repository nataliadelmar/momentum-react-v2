import React, { ReactElement } from 'react';

import { mountAndWait, renderWithWebComponent } from '../../../test/utils';
import Icon, { IconProps } from '../Icon';
import ButtonPill, { ButtonPillProps } from '../ButtonPill';
import '@testing-library/jest-dom';

import ToastNotification, { TOAST_NOTIFICATION_CONSTANTS as CONSTANTS } from './';
import Text from '../Text';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

describe('<ToastNotification />', () => {
  let leadingVisual: ReactElement<IconProps>;
  let buttonGroup: ReactElement<ButtonPillProps>;
  let onClose;
  const exampleContent = 'Example text';
  const closeButtonLabel = 'Close toast';

  beforeEach(() => {
    leadingVisual = <Icon name="help-circle" scale={24} weight="bold" />;
    buttonGroup = (
      <>
        <ButtonPill size={28}>Button</ButtonPill>
        <ButtonPill outline size={28}>
          Button
        </ButtonPill>
      </>
    );
    onClose = () => {
      alert('Hello');
    };
  });

  describe('snapshot', () => {
    it('should match snapshot', async () => {
      expect.assertions(1);

      const container = await mountAndWait(
        <ToastNotification aria-label="Some label" content={exampleContent} />
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with className', async () => {
      expect.assertions(1);

      const className = 'example-class';

      const container = await mountAndWait(
        <ToastNotification aria-label="Some label" className={className} content={exampleContent} />
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with aria-label', async () => {
      expect.assertions(1);
      const ariaLabel = 'test';

      const container = await mountAndWait(
        <ToastNotification aria-label={ariaLabel} content={exampleContent} />
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with aria-labelledby', async () => {
      expect.assertions(1);
      const ariaLabelledby = 'test-id';

      const container = await mountAndWait(
        <ToastNotification aria-labelledby={ariaLabelledby} content={exampleContent} />
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with id', async () => {
      expect.assertions(1);

      const id = 'example-id';

      const container = await mountAndWait(
        <ToastNotification aria-label="Some label" id={id} content={exampleContent} />
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with style', async () => {
      expect.assertions(1);

      const style = { color: 'pink' };

      const container = await mountAndWait(
        <ToastNotification aria-label="Some label" style={style} content={exampleContent} />
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with string content', async () => {
      expect.assertions(1);

      const container = await mountAndWait(
        <ToastNotification aria-label="Some label" content={exampleContent} />
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with non string content', async () => {
      expect.assertions(1);

      const content = <button>{exampleContent}</button>;

      const container = await mountAndWait(
        <ToastNotification aria-label="Some label" content={content} />
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with leading visual', async () => {
      expect.assertions(1);

      const container = await mountAndWait(
        <ToastNotification
          aria-label="Some label"
          content={exampleContent}
          leadingVisual={leadingVisual}
        />
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with button group', async () => {
      expect.assertions(1);

      const container = await mountAndWait(
        <ToastNotification
          aria-label="Some label"
          content={exampleContent}
          buttonGroup={buttonGroup}
        />
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with onClose and closeButtonLabel', async () => {
      expect.assertions(1);

      const container = await mountAndWait(
        <ToastNotification
          aria-label="Some label"
          content={exampleContent}
          onClose={onClose}
          closeButtonLabel={closeButtonLabel}
        />
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('attributes', () => {
    it('should have its wrapper class', async () => {
      expect.assertions(1);

      const wrapper = await mountAndWait(
        <ToastNotification aria-label="Some label" content={exampleContent} />
      );
      const element = wrapper.find(ToastNotification).getDOMNode();

      expect(element.classList.contains(CONSTANTS.STYLE.wrapper)).toBe(true);
    });

    it('should have provided class when className is provided', async () => {
      expect.assertions(1);

      const className = 'example-class';

      const wrapper = await mountAndWait(
        <ToastNotification aria-label="Some label" className={className} content={exampleContent} />
      );
      const element = wrapper.find(ToastNotification).getDOMNode();

      expect(element.classList.contains(className)).toBe(true);
    });

    it('should have provided aria-label when aria-label is provided', async () => {
      expect.assertions(1);

      const ariaLabel = 'test';

      const wrapper = await mountAndWait(
        <ToastNotification aria-label={ariaLabel} content={exampleContent} />
      );
      const element = wrapper.find(ToastNotification).getDOMNode();

      expect(element.getAttribute('aria-label')).toBe(ariaLabel);
    });

    it('should have provided aria-labelledby when aria-labelledby is provided', async () => {
      expect.assertions(1);

      const ariaLabelledby = 'test-id';

      const wrapper = await mountAndWait(
        <ToastNotification aria-labelledby={ariaLabelledby} content={exampleContent} />
      );
      const element = wrapper.find(ToastNotification).getDOMNode();

      expect(element.getAttribute('aria-labelledby')).toBe(ariaLabelledby);
    });

    it('should have provided id when id is provided', async () => {
      expect.assertions(1);

      const id = 'example-id';

      const wrapper = await mountAndWait(
        <ToastNotification aria-label="Some label" id={id} content={exampleContent} />
      );
      const element = wrapper.find(ToastNotification).getDOMNode();

      expect(element.id).toBe(id);
    });

    it('should have provided style when style is provided', async () => {
      expect.assertions(1);

      const style = { color: 'pink' };
      const styleString = 'color: pink;';

      const wrapper = await mountAndWait(
        <ToastNotification aria-label="Some label" style={style} content={exampleContent} />
      );
      const element = wrapper.find(ToastNotification).getDOMNode();

      expect(element.getAttribute('style')).toBe(styleString);
    });

    it('should wrap the onClose inside when onClose is provided and closeButtonLabel is undefined', async () => {
      expect.assertions(2);

      const { container } = await renderWithWebComponent(
        <ToastNotification aria-label="Some label" onClose={onClose} content={exampleContent} />
      );
      const element = container.querySelector('.md-toast-notification-close-button');
      const button = container.querySelector('.md-toast-notification-close-button mdc-button');

      expect(element).toBeDefined();
      expect(button).not.toHaveAttribute('aria-label');
    });

    it('should have label of the close button when both onClose and closeButtonLabel defined', async () => {
      expect.assertions(2);

      const { container } = await renderWithWebComponent(
        <ToastNotification
          aria-label="Some label"
          onClose={onClose}
          closeButtonLabel={'close'}
          content={exampleContent}
        />
      );
      const element = container.querySelector('.md-toast-notification-close-button');
      const button = container.querySelector('.md-toast-notification-close-button mdc-button');

      expect(element).toBeDefined();
      expect(button).toHaveAttribute('aria-label', 'close');
    });

    it('should wrap Icon inside leadingVisual when Icon is provided', async () => {
      expect.assertions(1);

      const wrapper = await mountAndWait(
        <ToastNotification
          aria-label="Some label"
          leadingVisual={leadingVisual}
          content={exampleContent}
        />
      );
      const element = wrapper.find(Icon).getDOMNode();

      expect(element).toBeDefined();
    });

    it('should wrap Buttons inside button group when buttons are provided', async () => {
      expect.assertions(2);

      const wrapper = await mountAndWait(
        <ToastNotification
          aria-label="Some label"
          buttonGroup={buttonGroup}
          content={exampleContent}
        />
      );
      const element1 = wrapper.find(ButtonPill).at(0).getDOMNode();
      const element2 = wrapper.find(ButtonPill).at(1).getDOMNode();

      expect(element1).toBeDefined();
      expect(element2).toBeDefined();
    });

    it('should wrap notification content inside Text component if content is a free string', async () => {
      expect.assertions(1);

      const wrapper = await mountAndWait(
        <ToastNotification aria-label="Some label" content={exampleContent} />
      );
      const textComponent = wrapper
        .find(Text)
        .filter({ className: 'md-toast-notification-content' });
      expect(textComponent).toBeDefined();
    });

    it('should not wrap notification content inside Text component if content is not a free string', async () => {
      expect.assertions(1);

      const notificationContent = <button>{exampleContent}</button>;
      const wrapper = await mountAndWait(
        <ToastNotification aria-label="Some label" content={notificationContent} />
      );
      const textComponent = wrapper
        .find(Text)
        .filter({ className: 'md-toast-notification-content' });
      expect(textComponent).toMatchObject({});
    });
  });

  describe('actions', () => {
    it('should handle mouse press events on close button if method is provided', async () => {
      expect.assertions(1);

      const mockCallback = jest.fn();

      await renderWithWebComponent(
        <ToastNotification
          aria-label="Some label"
          onClose={mockCallback}
          content={exampleContent}
          closeButtonLabel="Close notification"
        />
      );
      const component = screen.getByRole('button', {
        name: 'Close notification',
      });

      await userEvent.click(component);

      expect(mockCallback).toHaveBeenCalledTimes(1);
    });
  });
});
