export const filterProp = (props: string[]) => (prop: string) => !props.includes(prop);

export const filterTheme = filterProp(['theme']);
