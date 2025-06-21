import { AnyTxtRecord } from "dns";
import React from "react";

type FormItemsProps = {
  type: string;
  name: string;
  id: string;
  value: any;
  onChange: any;
  className: string;
};

const input: React.FC<FormItemsProps> = ({
  type,
  name,
  id,
  value,
  onChange,
  className,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      className={className}
      required
    />
  );
};

export default input;
