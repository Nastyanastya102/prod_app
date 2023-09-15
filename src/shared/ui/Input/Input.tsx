import { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";

import { classNames } from "shared/lib/className/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">
interface IInputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  type?: string
  placeholder?: string
  autoFocus?: boolean
};

const Input = memo((props: IInputProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const [caretPosition, setCaretPosition] = useState(0);
  const ref = useRef<HTMLInputElement>();
  const { className, value, onChange, type = "text", placeholder, autoFocus, ...restProps } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e?.target?.value);
    setCaretPosition(e?.target?.value?.length)
  };

  const onBlur = () => {
    setIsFocused(false);
  }

  const onFocus = () => {
    setIsFocused(false);
  }

  const onSelect = (e: any) => {setCaretPosition(e?.target?.selectionStart || 0)}

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref?.current?.focus();
    }
  }, [autoFocus])

  return (
    <div className={classNames(cls.Input, {}, [className])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
      <div className={cls.caretWrapper}>
        <input
        ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          {...restProps}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}

        />
        {isFocused && <span className={cls.caret} style={{left: `${caretPosition * 9}px`}}/>}
      </div>
    </div>
  )
});

export default Input;
