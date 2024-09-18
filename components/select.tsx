'use client'
import { FieldName, useField, useInputControl } from '@conform-to/react';
import { Select } from '@yamada-ui/react';

export const CustomSelect = <T extends string,> ({ name }: {name: FieldName<T, Record<string, unknown>, string[]>}) => {
  const [fieldMeta] = useField(name);
  const {value,blur,change,focus} = useInputControl<string>(fieldMeta);
  return  <Select value={value} onChange={change} onBlur={blur} onFocus={focus} items={[{ value:"A",label:"A"},{value:"B", label:"B"}]} />
