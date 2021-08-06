import React, { memo } from 'react';
import { ShortcutButton } from '../shortuct-button/ShortcutButton';
import { ShortcutButtonModel } from './ShortcutButtonModel';

interface Props {
  viewType: string;
  barSize: number;
  shortcutButtons?: Array<ShortcutButtonModel>;
  updateView: (date: Date | undefined) => void;
  onBlurDefault: () => void;
}

const getShortcutStyles = (size: number) => ({
  root: {
    display: 'flex',
    padding: '2%',
    gap: '1rem',
    height: `${size}px`,
    alignItems: 'center',
    flexDirection: 'column' as const,
    overflow: 'auto',
    width: '120px',
  },
});

function ShortcutBarComponent({ viewType, barSize, shortcutButtons, updateView, onBlurDefault }: Props) {
  const shortcut = getShortcutStyles(barSize);
  const onButtonClick = (btn: ShortcutButtonModel) => {
    btn.goToDate ? updateView(btn.goToDate) : btn.onButtonClick ? btn.onButtonClick() : () => 0;
  };

  return (
    <div style={shortcut.root} className={'arc_shortcuts_view'}>
      {shortcutButtons &&
        shortcutButtons.map((btn: ShortcutButtonModel, index: number) => {
          {
            if (!btn.viewTypes || btn.viewTypes.find((type) => type === viewType)) {
              return (
                <ShortcutButton
                  key={index}
                  buttonText={btn.buttonText}
                  onButtonClick={() => onButtonClick(btn)}
                  onBlur={btn.onBlur ? btn.onBlur : onBlurDefault}
                />
              );
            }
          }
        })}
    </div>
  );
}

export const ShortcutBar = memo(ShortcutBarComponent);
